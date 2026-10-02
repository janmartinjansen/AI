/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: AI CURSUS DEELNEMERSBEHEER & E-MAIL AUTOMATISERING
 * =========================================================================
 * 
 * Gekoppeld aan de Google Sheet: "Deelnemerslijst - Aan de slag met AI"
 * Cursus: MM2704 - Aan de slag met AI: ontdek de kracht van slimme tools
 * Docent: Jan Martin Jansen • Locatie: School 7
 * Cursuswebsite: https://janmartinjansen.github.io/AI/najaar
 * 
 * HOE DIT SCRIPT IN TE STELLEN IN GOOGLE SHEETS:
 * 1. Open je Google Sheet "Deelnemerslijst - Aan de slag met AI".
 * 2. Klik in het bovenmenu op "Extensies" > "Apps Script".
 * 3. Vervang alle tekst in de editor door onderstaande code en klik op "Opslaan" (💾).
 * 4. Sluit het script-tabblad en herlaad je Google Sheet (Cmd+R).
 * 5. Bovenin verschijnt nu het menu: "🤖 AI Cursus Menu"!
 */

// Basisinformatie en URL van het intakeformulier
const BASE_INTAKE_URL = "https://janmartinjansen.github.io/AI/najaar/intake.html";
const BASE_LES1_URL = "https://janmartinjansen.github.io/AI/najaar/les1/?code=AI2026";
const ACCESS_CODE_VAL = "AI2026";
const SHEET_NAME_DEELNEMERS = "Deelnemers";
const SHEET_NAME_ANTWOORDEN = "Intake Antwoorden";
const SHEET_NAME_BERICHTEN = "Berichten";
const START_ROW = 9; // Data van de cursisten begint op rij 9
const HEADER_ROW = 8; // Kolomkopteksten staan op rij 8

/**
 * Zoekt automatisch de juiste kolommen op basis van de kolomkopteksten in rij 8.
 * Hierdoor werkt het script altijd, zelfs als kolommen worden verplaatst of toegevoegd!
 */
function getColumnMapping(sheet) {
  const maxCol = Math.max(sheet.getLastColumn(), 14);
  const headers = sheet.getRange(HEADER_ROW, 1, 1, maxCol).getValues()[0];
  
  // Standaard posities (fallback)
  const map = {
    inschrijfnummer: 1, // Kolom A
    deelnemer: 2,        // Kolom B
    voornaam: 3,         // Kolom C
    telefoon: 4,         // Kolom D
    email: 6,            // Kolom F (of E)
    link: 7,             // Kolom G (of F)
    status: 8,           // Kolom H (of G)
    intakeStatus: 9      // Kolom I
  };

  headers.forEach((h, index) => {
    const col = index + 1;
    const text = String(h).toLowerCase().trim();
    if (text.includes("inschrijf")) map.inschrijfnummer = col;
    else if (text.includes("voornaam")) map.voornaam = col;
    else if (text.includes("deelnemer") || text.includes("achternaam")) {
      if (!text.includes("voornaam")) map.deelnemer = col;
    }
    else if (text.includes("telefoon") || text.includes("tel")) map.telefoon = col;
    else if (text.includes("mail")) map.email = col;
    else if (text.includes("link") || text.includes("url")) map.link = col;
    else if (text.includes("verzendstatus") || (text.includes("status") && !text.includes("intake"))) map.status = col;
    else if (text.includes("intake status") || text.includes("ingevuld") || text.includes("ingestuurd")) map.intakeStatus = col;
  });

  return map;
}

/**
 * Voegt automatisch het menu toe aan de Google Sheet bij openen
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("🤖 AI Cursus Menu")
    // 1. Intake Status & Herinnering
    .addItem("🔍 1. Controleer wie al heeft ingestuurd (Update Status)", "checkIntakeSubmissions")
    .addItem("🔔 2. Intake Herinnering: Zet Concepten klaar (Niet-ingestuurd)", "sendIntakeRemindersDraft")
    .addSeparator()
    // 2. Herbruikbaar Berichtenbeheer (voor elk moment in de cursus)
    .addItem("📝 3. Maak / Open Tabblad Berichten", "setupMessagesSheet")
    .addItem("✉️ 4. Verstuur Bericht uit Tabblad Berichten (Concepten)", "sendCustomMessageDrafts")
    .addItem("🚀 5. Verstuur Bericht uit Tabblad Berichten (Direct)", "sendCustomMessageDirect")
    .addSeparator()
    // 3. Oorspronkelijke Acties & Test
    .addItem("🧪 Test Concept voor geselecteerde rij", "testSingleRowDraft")
    .addItem("🔗 Genereer alle Persoonlijke Links", "generatePersonalLinks")
    .addItem("✉️ Welkomstmails (Alles): Zet Concepten klaar", "createGmailDrafts")
    .addItem("📊 Open Tab Intake Antwoorden", "setupAnswersSheet")
    .addToUi();
}

/**
 * Hulpfunctie: Haalt alle inschrijfnummers en namen op die al in het tabblad "Intake Antwoorden" staan
 */
function getSubmittedIdsAndNames(ss) {
  const sheet = ss.getSheetByName(SHEET_NAME_ANTWOORDEN);
  const submittedSet = new Set();
  if (!sheet || sheet.getLastRow() < 2) return submittedSet;
  
  const numRows = sheet.getLastRow() - 1;
  const data = sheet.getRange(2, 1, numRows, 3).getValues();
  data.forEach(row => {
    const id = String(row[1] || "").trim().toLowerCase();
    const name = String(row[2] || "").trim().toLowerCase();
    if (id && id !== "onbekend") submittedSet.add(id);
    if (name && name !== "onbekend") submittedSet.add(name);
  });
  return submittedSet;
}

/**
 * 1. CONTROLEER WIE AL HEEFT INGESTUURD & UPDATE STATUS IN SHEET
 */
function checkIntakeSubmissions() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) {
    SpreadsheetApp.getUi().alert("Tabblad \"" + SHEET_NAME_DEELNEMERS + "\" niet gevonden!");
    return;
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < START_ROW) {
    SpreadsheetApp.getUi().alert("Geen cursisten gevonden vanaf rij " + START_ROW + ".");
    return;
  }

  const map = getColumnMapping(sheet);
  const submittedSet = getSubmittedIdsAndNames(ss);
  
  // Zorg voor een "Intake Status" header als die er nog niet is
  let intakeCol = map.intakeStatus;
  const headerVal = String(sheet.getRange(HEADER_ROW, intakeCol).getValue()).trim();
  if (!headerVal) {
    sheet.getRange(HEADER_ROW, intakeCol).setValue("Intake Status");
    sheet.getRange(HEADER_ROW, intakeCol).setBackground("#1e293b").setFontColor("#ffffff").setFontWeight("bold");
  }

  const numRows = lastRow - START_ROW + 1;
  const maxCol = Math.max(sheet.getLastColumn(), intakeCol);
  const data = sheet.getRange(START_ROW, 1, numRows, maxCol).getValues();

  let submittedCount = 0;
  let missingCount = 0;
  const statusValues = [];

  for (let i = 0; i < data.length; i++) {
    const id = String(data[i][map.inschrijfnummer - 1] || "").trim().toLowerCase();
    const voornaam = String(data[i][map.voornaam - 1] || "").trim().toLowerCase();
    const deelnemer = String(data[i][map.deelnemer - 1] || "").trim().toLowerCase();
    const email = String(data[i][map.email - 1] || "").trim();

    if (!email) {
      statusValues.push([""]);
      continue;
    }

    const hasSubmitted = (id && submittedSet.has(id)) || 
                         (voornaam && submittedSet.has(voornaam)) || 
                         (deelnemer && submittedSet.has(deelnemer));

    if (hasSubmitted) {
      statusValues.push(["✅ Ingevuld"]);
      submittedCount++;
    } else {
      statusValues.push(["⏳ Nog niet"]);
      missingCount++;
    }
  }

  sheet.getRange(START_ROW, intakeCol, numRows, 1).setValues(statusValues);

  SpreadsheetApp.getUi().alert(
    "📊 Intake Overzicht:\n\n" +
    "• " + submittedCount + " cursist(en) hebben het formulier ingevuld (✅)\n" +
    "• " + missingCount + " cursist(en) hebben nog NIET ingevuld (⏳)\n\n" +
    "De kolom \"Intake Status\" is bijgewerkt!"
  );
}

/**
 * 2. STUUR HERINNERING NAAR CURSISTEN DIE NOG NIET HEBBEN INGESTUURD (Concepten)
 */
function sendIntakeRemindersDraft() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) return;

  const lastRow = sheet.getLastRow();
  if (lastRow < START_ROW) return;

  const map = getColumnMapping(sheet);
  const submittedSet = getSubmittedIdsAndNames(ss);
  const numRows = lastRow - START_ROW + 1;
  const maxCol = Math.max(sheet.getLastColumn(), 14);
  const data = sheet.getRange(START_ROW, 1, numRows, maxCol).getValues();

  let draftCount = 0;
  let skippedSubmitted = 0;

  for (let i = 0; i < data.length; i++) {
    const rowNum = START_ROW + i;
    const id = String(data[i][map.inschrijfnummer - 1] || "").trim().toLowerCase();
    const voornaam = String(data[i][map.voornaam - 1] || "").trim();
    const deelnemer = String(data[i][map.deelnemer - 1] || "").trim().toLowerCase();
    const email = String(data[i][map.email - 1] || "").trim();
    let link = String(data[i][map.link - 1] || "").trim();

    if (!email || !email.includes("@")) continue;

    const hasSubmitted = (id && submittedSet.has(id)) || 
                         (voornaam && submittedSet.has(voornaam.toLowerCase())) || 
                         (deelnemer && submittedSet.has(deelnemer));

    if (hasSubmitted) {
      skippedSubmitted++;
      continue;
    }

    // Genereer link als deze nog ontbrak
    if (!link) {
      const inschrijfnummer = String(data[i][map.inschrijfnummer - 1] || "").trim();
      link = BASE_INTAKE_URL + "?id=" + encodeURIComponent(inschrijfnummer) + "&naam=" + encodeURIComponent(voornaam);
      sheet.getRange(rowNum, map.link).setValue(link);
    }

    const subject = "Herinnering: Voorbereiding Cursus \"Aan de slag met AI\" (Korte Vragenlijst)";
    const emailContent = buildReminderEmailHtml(voornaam, link);

    GmailApp.createDraft(email, subject, emailContent.plainBody, { htmlBody: emailContent.htmlBody });
    draftCount++;
  }

  SpreadsheetApp.getUi().alert(
    "✅ Herinneringen Klaargezet!\n\n" +
    "Er zijn " + draftCount + " herinnerings-concepten klaargezet in jouw Gmail.\n" +
    "(" + skippedSubmitted + " cursisten die al hadden ingevuld zijn netjes overgeslagen).\n\n" +
    "Open Gmail > Concepten om ze te bekijken en te verzenden!"
  );
}

/**
 * 3. MAAK / OPEN TABBLAD "BERICHTEN" (Herbruikbaar voor elk moment in de cursus)
 */
function setupMessagesSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME_BERICHTEN);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME_BERICHTEN);
    
    // Header Banner
    sheet.getRange("A1:B1").merge();
    sheet.getRange("A1").setValue("📧 BERICHTEN NAAR CURSISTEN (Herbruikbaar)");
    sheet.getRange("A1").setBackground("#1e293b").setFontColor("#ffffff").setFontWeight("bold").setFontSize(13);
    
    // Velden
    sheet.getRange("A3").setValue("Onderwerp:").setFontWeight("bold");
    sheet.getRange("B3").setValue("Les 1: Samenvatting & Hand-out");
    sheet.getRange("B3").setBackground("#f0fdf4").setFontWeight("bold");

    sheet.getRange("A4").setValue("Doelgroep:").setFontWeight("bold");
    sheet.getRange("B4").setValue("Iedereen");
    sheet.getRange("B4").setBackground("#f8fafc");

    // Dropdown voor Doelgroep
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList([
        "Iedereen",
        "Alleen wie nog NIET heeft ingestuurd",
        "Alleen wie WEL heeft ingestuurd",
        "Alleen geselecteerde rij(en) in Deelnemers"
      ], true)
      .build();
    sheet.getRange("B4").setDataValidation(rule);

    sheet.getRange("A6").setValue("Berichttekst:").setFontWeight("bold");
    const defaultBody = [
      "Beste {voornaam},",
      "",
      "Hierbij ontvang je extra informatie over de cursus \"Aan de slag met AI: ontdek de kracht van slimme tools\".",
      "",
      "[Typ hier je eigen bericht, samenvatting, huiswerk of links]",
      "",
      "Neem naar de volgende les je eigen laptop of tablet mee.",
      "",
      "Hartelijke groet,",
      "Jan Martin Jansen",
      "https://janmartinjansen.github.io/AI/najaar"
    ].join("\n");
    
    sheet.getRange("B6").setValue(defaultBody);
    sheet.getRange("B6").setWrap(true);
    sheet.getRange("B6").setBackground("#f8fafc");

    // Uitleg tags
    sheet.getRange("A8").setValue("Beschikbare tags:").setFontWeight("bold").setFontColor("#64748b");
    sheet.getRange("B8").setValue("{voornaam} = Voornaam | {les1} = Link Les 1 (auto-login) | {code} = Code (AI2026) | {link} = Intakelink")
      .setFontColor("#64748b").setFontStyle("italic");

    sheet.setColumnWidth(1, 150);
    sheet.setColumnWidth(2, 550);
    sheet.setRowHeight(6, 180);

    SpreadsheetApp.getUi().alert("Tabblad \"" + SHEET_NAME_BERICHTEN + "\" is aangemaakt! Typ hier je onderwerp en bericht.");
  } else {
    ss.setActiveSheet(sheet);
  }
}

/**
 * 4. VERSTUUR BERICHT UIT TABBLAD "BERICHTEN" (Als Gmail Concepten)
 */
function sendCustomMessageDrafts() {
  processCustomMessage(true);
}

/**
 * 5. VERSTUUR BERICHT UIT TABBLAD "BERICHTEN" (Direct Verzenden)
 */
function sendCustomMessageDirect() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    "Direct Verzenden",
    "Weet je zeker dat je het bericht uit het tabblad 'Berichten' direct wilt verzenden naar de geselecteerde doelgroep?",
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    processCustomMessage(false);
  }
}

/**
 * Hulpfunctie: Verwerkt en verstuurt het aangepaste bericht vanuit tabblad "Berichten"
 */
function processCustomMessage(isDraftOnly) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const msgSheet = ss.getSheetByName(SHEET_NAME_BERICHTEN);
  const deelSheet = ss.getSheetByName(SHEET_NAME_DEELNEMERS);

  if (!msgSheet) {
    SpreadsheetApp.getUi().alert("Tabblad \"" + SHEET_NAME_BERICHTEN + "\" niet gevonden! Klik eerst op menuoptie 3.");
    return;
  }
  if (!deelSheet) return;

  const rawSubject = String(msgSheet.getRange("B3").getValue()).trim();
  const targetAudience = String(msgSheet.getRange("B4").getValue()).trim() || "Iedereen";
  const rawBody = String(msgSheet.getRange("B6").getValue()).trim();

  if (!rawSubject) {
    SpreadsheetApp.getUi().alert("Vul eerst een Onderwerp in cel B3 van het tabblad 'Berichten'!");
    return;
  }
  if (!rawBody) {
    SpreadsheetApp.getUi().alert("Vul eerst een Berichttekst in cel B6 van het tabblad 'Berichten'!");
    return;
  }

  const map = getColumnMapping(deelSheet);
  const submittedSet = getSubmittedIdsAndNames(ss);
  const lastRow = deelSheet.getLastRow();
  if (lastRow < START_ROW) return;

  const numRows = lastRow - START_ROW + 1;
  const maxCol = Math.max(deelSheet.getLastColumn(), 14);
  const data = deelSheet.getRange(START_ROW, 1, numRows, maxCol).getValues();

  // Indien doelgroep geselecteerde rijen is
  let selectedRows = [];
  if (targetAudience.includes("geselecteerde")) {
    const activeRange = deelSheet.getActiveRange();
    if (activeRange) {
      const start = activeRange.getRow();
      const end = start + activeRange.getNumRows() - 1;
      for (let r = start; r <= end; r++) {
        if (r >= START_ROW && r <= lastRow) selectedRows.push(r);
      }
    }
  }

  let count = 0;
  let skipped = 0;

  for (let i = 0; i < data.length; i++) {
    const rowNum = START_ROW + i;
    const id = String(data[i][map.inschrijfnummer - 1] || "").trim();
    const voornaam = String(data[i][map.voornaam - 1] || "").trim();
    const deelnemer = String(data[i][map.deelnemer - 1] || "").trim();
    const email = String(data[i][map.email - 1] || "").trim();
    let link = String(data[i][map.link - 1] || "").trim();

    if (!email || !email.includes("@")) {
      skipped++;
      continue;
    }

    const hasSubmitted = (id && submittedSet.has(id.toLowerCase())) || 
                         (voornaam && submittedSet.has(voornaam.toLowerCase())) || 
                         (deelnemer && submittedSet.has(deelnemer.toLowerCase()));

    // Filter doelgroep
    if (targetAudience.includes("NIET") && hasSubmitted) {
      skipped++;
      continue;
    }
    if (targetAudience.includes("WEL") && !hasSubmitted) {
      skipped++;
      continue;
    }
    if (targetAudience.includes("geselecteerde") && !selectedRows.includes(rowNum)) {
      skipped++;
      continue;
    }

    if (!link) {
      link = BASE_INTAKE_URL + "?id=" + encodeURIComponent(id) + "&naam=" + encodeURIComponent(voornaam);
    }

    // Vervang tags
    const subject = rawSubject
      .replace(/{voornaam}/gi, voornaam)
      .replace(/{naam}/gi, deelnemer || voornaam)
      .replace(/{nummer}/gi, id);

    const personalizedPlain = rawBody
      .replace(/{voornaam}/gi, voornaam)
      .replace(/{naam}/gi, deelnemer || voornaam)
      .replace(/{link}/gi, link)
      .replace(/{les1}/gi, BASE_LES1_URL)
      .replace(/{les1link}/gi, BASE_LES1_URL)
      .replace(/{code}/gi, ACCESS_CODE_VAL)
      .replace(/{nummer}/gi, id);

    const htmlBodyFormatted = formatPlainTextToHtml(personalizedPlain);

    if (isDraftOnly) {
      GmailApp.createDraft(email, subject, personalizedPlain, { htmlBody: htmlBodyFormatted });
    } else {
      GmailApp.sendEmail(email, subject, personalizedPlain, { htmlBody: htmlBodyFormatted });
    }

    count++;
  }

  const actie = isDraftOnly ? "concepten klaargezet in je Gmail" : "e-mails direct verzonden";
  SpreadsheetApp.getUi().alert(
    "✅ Klaar!\n\n" +
    "Er zijn " + count + " " + actie + " naar doelgroep: \"" + targetAudience + "\".\n" +
    "(" + skipped + " overgeslagen/buiten doelgroep)."
  );
}

/**
 * HULPFUNCTIE: Vormt gewone tekst om naar een nette gestylde HTML-mail
 */
function formatPlainTextToHtml(text) {
  const paragraphs = text.split(/\n\s*\n/);
  const htmlParagraphs = paragraphs.map(p => {
    let escaped = p
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");
    
    escaped = escaped.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color: #2563eb; text-decoration: underline;">$1</a>');
    return "<p style=\"margin-bottom: 14px;\">" + escaped + "</p>";
  }).join("");

  return "<div style=\"font-family: Arial, sans-serif; font-size: 15px; color: #1e293b; line-height: 1.6; max-width: 600px;\">" +
         htmlParagraphs +
         "</div>";
}

/**
 * HULPFUNCTIE: Herinneringsmail HTML template
 */
function buildReminderEmailHtml(voornaam, link) {
  const htmlBody = [
    "<div style=\"font-family: Arial, sans-serif; font-size: 15px; color: #1e293b; line-height: 1.6; max-width: 600px;\">",
    "  <p>Beste " + voornaam + ",</p>",
    "  <p>Binnenkort gaan we van start met de praktijkcursus <strong>\"Aan de slag met AI: ontdek de kracht van slimme tools\"</strong> in School 7. Ik kijk er erg naar uit om je te ontmoeten!</p>",
    "  <p>Mocht je nog geen gelegenheid hebben gehad: wil je vooraf nog even de korte vragenlijst invullen? Hiermee kan ik de praktijkoefeningen optimaal afstemmen op jouw ervaring en het apparaat dat je meeneemt (kost circa 2 à 3 minuten):</p>",
    "  <div style=\"margin: 28px 0; text-align: left;\">",
    "    <a href=\"" + link + "\" style=\"background-color: #2563eb; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px rgba(37,99,235,0.2);\">Vragenlijst invullen &rarr;</a>",
    "  </div>",
    "  <p style=\"font-size: 13px; color: #64748b;\">",
    "    <em>Werkt de knop niet? Kopieer dan deze link in je browser:<br>",
    "    <a href=\"" + link + "\" style=\"color: #2563eb;\">" + link + "</a></em>",
    "  </p>",
    "  <div style=\"background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 10px 14px; margin: 20px 0; font-size: 13px; color: #475569;\">",
    "    <strong>Privacy:</strong> Je antwoorden zijn vertrouwelijk en uitsluitend bestemd voor mij als docent om de lessen voor te bereiden.",
    "  </div>",
    "  <p><strong>Praktisch:</strong> Neem naar de eerste bijeenkomst je eigen laptop of tablet mee. Mocht je vooraf al vragen hebben, reageer dan gerust op deze mail.</p>",
    "  <p>Hartelijke groet en graag tot ziens bij de eerste les!</p>",
    "  <p style=\"margin-top: 20px;\">",
    "    <strong>Jan Martin Jansen</strong><br>",
    "    <span style=\"color: #64748b; font-size: 14px;\">Docent \"Aan de slag met AI\"</span><br>",
    "    <a href=\"https://janmartinjansen.github.io/AI/najaar\" style=\"color: #2563eb; font-size: 13px;\">https://janmartinjansen.github.io/AI/najaar</a>",
    "  </p>",
    "</div>"
  ].join("\n");

  const plainBody = "Beste " + voornaam + ",\n\n" +
    "Binnenkort gaan we van start met de praktijkcursus \"Aan de slag met AI: ontdek de kracht van slimme tools\" in School 7.\n\n" +
    "Mocht je nog geen gelegenheid hebben gehad, wil je vooraf nog even de korte vragenlijst invullen?\n" +
    link + "\n\n" +
    "Neem je eigen laptop of tablet mee naar de les. Tot ziens!\n\n" +
    "Hartelijke groet,\nJan Martin Jansen\nhttps://janmartinjansen.github.io/AI/najaar";

  return { htmlBody: htmlBody, plainBody: plainBody };
}

/**
 * 0. TEST MODUS: Maakt alleen een concept-mail aan voor de rij die je nu geselecteerd hebt!
 */
function testSingleRowDraft() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) {
    SpreadsheetApp.getUi().alert("Tabblad \"" + SHEET_NAME_DEELNEMERS + "\" niet gevonden!");
    return;
  }

  const activeRow = sheet.getActiveCell().getRow();
  if (activeRow < START_ROW) {
    SpreadsheetApp.getUi().alert("Selecteer eerst een cursist-rij (vanaf rij " + START_ROW + ", bijv. je testrij op rij 22)!");
    return;
  }

  const map = getColumnMapping(sheet);
  const maxCol = Math.max(sheet.getLastColumn(), 14);
  const rowData = sheet.getRange(activeRow, 1, 1, maxCol).getValues()[0];

  const inschrijfnummer = String(rowData[map.inschrijfnummer - 1] || "").trim();
  const voornaam = String(rowData[map.voornaam - 1] || "").trim() || "Testgebruiker";
  const email = String(rowData[map.email - 1] || "").trim();
  let link = String(rowData[map.link - 1] || "").trim();

  const colLetterEmail = String.fromCharCode(64 + map.email);

  if (!email || !email.includes("@")) {
    SpreadsheetApp.getUi().alert(
      "Geen geldig e-mailadres gevonden op rij " + activeRow + " in kolom " + colLetterEmail + "!\n" +
      "Gevonden waarde: \"" + email + "\"\n\n" +
      "Controleer of het e-mailadres in kolom " + colLetterEmail + " staat."
    );
    return;
  }

  if (!link) {
    link = BASE_INTAKE_URL + "?id=" + encodeURIComponent(inschrijfnummer || "TEST-01") + "&naam=" + encodeURIComponent(voornaam);
    sheet.getRange(activeRow, map.link).setValue(link);
  }

  const subject = "[TEST] Praktijkcursus \"Aan de slag met AI\" - Welkom & Korte Vragenlijst";
  const emailContent = buildReminderEmailHtml(voornaam, link);

  GmailApp.createDraft(email, subject, emailContent.plainBody, { htmlBody: emailContent.htmlBody });
  sheet.getRange(activeRow, map.status).setValue("Test concept klaar in Gmail");

  SpreadsheetApp.getUi().alert(
    "✅ Test geslaagd!\n\n" +
    "Voor rij " + activeRow + " (" + voornaam + "):\n" +
    "1. E-mailadres: " + email + "\n" +
    "2. Persoonlijke link geplaatst in kolom " + String.fromCharCode(64 + map.link) + "\n" +
    "3. Concept-mail klaargezet in jouw Gmail!\n\n" +
    "Open Gmail > Concepten om te bekijken!"
  );
}

/**
 * GENEREER ALLE PERSOONLIJKE LINKS
 */
function generatePersonalLinks() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) return;

  const lastRow = sheet.getLastRow();
  if (lastRow < START_ROW) return;

  const map = getColumnMapping(sheet);
  const maxCol = Math.max(sheet.getLastColumn(), 14);
  const numRows = lastRow - START_ROW + 1;
  const data = sheet.getRange(START_ROW, 1, numRows, maxCol).getValues();
  const links = [];
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const inschrijfnummer = String(data[i][map.inschrijfnummer - 1] || "").trim();
    const voornaam = String(data[i][map.voornaam - 1] || "").trim();

    if (inschrijfnummer || voornaam) {
      const fullUrl = BASE_INTAKE_URL + "?id=" + encodeURIComponent(inschrijfnummer) + "&naam=" + encodeURIComponent(voornaam);
      links.push([fullUrl]);
      count++;
    } else {
      links.push([""]);
    }
  }

  sheet.getRange(START_ROW, map.link, numRows, 1).setValues(links);
  SpreadsheetApp.getUi().alert("Succes! Er zijn " + count + " persoonlijke links gegenereerd in kolom " + String.fromCharCode(64 + map.link) + ".");
}

/**
 * WELKOMSTMAILS CONCEPTEN KLAARZETTEN (Alles)
 */
function createGmailDrafts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) return;

  const lastRow = sheet.getLastRow();
  if (lastRow < START_ROW) return;

  const map = getColumnMapping(sheet);
  const maxCol = Math.max(sheet.getLastColumn(), 14);
  const numRows = lastRow - START_ROW + 1;
  const data = sheet.getRange(START_ROW, 1, numRows, maxCol).getValues();

  let count = 0;
  for (let i = 0; i < data.length; i++) {
    const rowNum = START_ROW + i;
    const inschrijfnummer = String(data[i][map.inschrijfnummer - 1] || "").trim();
    const voornaam = String(data[i][map.voornaam - 1] || "").trim();
    const email = String(data[i][map.email - 1] || "").trim();
    let link = String(data[i][map.link - 1] || "").trim();
    const status = String(data[i][map.status - 1] || "").trim();

    if (!email || !email.includes("@") || status === "Verzonden") continue;

    if (!link) {
      link = BASE_INTAKE_URL + "?id=" + encodeURIComponent(inschrijfnummer) + "&naam=" + encodeURIComponent(voornaam);
      sheet.getRange(rowNum, map.link).setValue(link);
    }

    const subject = "Praktijkcursus \"Aan de slag met AI\" - Welkom & Korte Vragenlijst";
    const emailContent = buildReminderEmailHtml(voornaam, link);

    GmailApp.createDraft(email, subject, emailContent.plainBody, { htmlBody: emailContent.htmlBody });
    sheet.getRange(rowNum, map.status).setValue("Concept klaar in Gmail");
    count++;
  }

  SpreadsheetApp.getUi().alert("Klaar! Er zijn " + count + " welkomst-concepten klaargezet in je Gmail.");
}

/**
 * TABBLAD INTAKE ANTWOORDEN AANMAKEN / OPENEN
 */
function setupAnswersSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME_ANTWOORDEN);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME_ANTWOORDEN);
    const headers = [
      "Tijdstempel", "Inschrijfnummer", "Naam Cursist", "Apparaat", 
      "Huidige Ervaring", "Redenen Deelname", "Toepassingen in Dagelijks Leven", 
      "Wanneer Geslaagd?", "Specifieke Vragen/Wensen"
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setBackground("#1e293b").setFontColor("#ffffff").setFontWeight("bold");
    sheet.setFrozenRows(1);
    
    try {
      SpreadsheetApp.getUi().alert("Tabblad \"" + SHEET_NAME_ANTWOORDEN + "\" is aangemaakt!");
    } catch (err) {}
  } else {
    try {
      ss.setActiveSheet(sheet);
    } catch (err) {}
  }
  return sheet;
}

/**
 * WEBHOOK ENDPOINT
 */
function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME_ANTWOORDEN);
    if (!sheet) {
      sheet = setupAnswersSheet();
    }

    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const row = [
      new Date(),
      data.student_id || "Onbekend",
      data.student_name || "Onbekend",
      data.apparaat || "",
      data.ervaring || "",
      data.redenen || "",
      data.toepassingen || "",
      data.geslaagd || "",
      data.specifieke_vragen || ""
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("AI Cursus Webhook is actief!");
}
