/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: AI CURSUS DEELNEMERSBEHEER & INTAKE AUTOMATISERING
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
 * 4. Sluit het script-tabblad en herlaad je Google Sheet.
 * 5. Bovenin verschijnt nu het menu: "🤖 AI Cursus Menu"!
 * 
 * VOOR HET ONTVANGEN VAN ANTWOORDEN VANAF DE WEBSITE (Web App):
 * 1. Klik in Apps Script rechtsboven op "Implementeren" (Deploy) > "Nieuwe implementatie" (New deployment).
 * 2. Type selecteren: "Web-app" (Web app).
 * 3. Uitvoeren als: "Mijzelf" (Me).
 * 4. Toegang: "Iedereen" (Anyone) -> Zodat het webformulier antwoorden kan insturen.
 * 5. Klik op "Implementeren" en kopieer de Web-app URL.
 * 6. Plak deze URL in het bestand intake.html bij APPS_SCRIPT_WEBAPP_URL.
 */

// Basisinformatie en URL van het intakeformulier
const BASE_INTAKE_URL = "https://janmartinjansen.github.io/AI/najaar/intake.html";
const SHEET_NAME_DEELNEMERS = "Deelnemers";
const SHEET_NAME_ANTWOORDEN = "Intake Antwoorden";

// Kolomnummers op tabblad "Deelnemers" (1-based: A=1, B=2, etc.)
const COL_INSCHRIJFNUMMER = 1; // Kolom A
const COL_DEELNEMER = 2;        // Kolom B
const COL_VOORNAAM = 3;         // Kolom C
const COL_TELEFOON = 4;         // Kolom D
const COL_EMAIL = 5;            // Kolom E
const COL_PERSOONLIJKE_LINK = 6;// Kolom F
const COL_VERZENDSTATUS = 7;    // Kolom G
const START_ROW = 9;            // Data begint op rij 9

/**
 * Voegt automatisch het menu toe aan de Google Sheet
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🤖 AI Cursus Menu')
    .addItem('🧪 0. TEST: Maak Concept Mail voor Geselecteerde Rij', 'testSingleRowDraft')
    .addSeparator()
    .addItem('🔗 1. Genereer Persoonlijke Links (Alles)', 'generatePersonalLinks')
    .addSeparator()
    .addItem('✉️ 2. Zet Concept Mails klaar in Gmail (Alles)', 'createGmailDrafts')
    .addItem('🚀 3. Verstuur Mails Direct (Alles)', 'sendEmailsDirectly')
    .addSeparator()
    .addItem('📊 4. Maak / Open Tab "Intake Antwoorden"', 'setupAnswersSheet')
    .addToUi();
}

/**
 * 0. TEST MODUS: Maakt alleen een concept-mail aan voor de rij die je nu geselecteerd hebt!
 */
function testSingleRowDraft() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(`Tabblad "${SHEET_NAME_DEELNEMERS}" niet gevonden!`);
    return;
  }

  const activeRow = sheet.getActiveCell().getRow();
  if (activeRow < START_ROW) {
    SpreadsheetApp.getUi().alert(`Selecteer eerst een cursist-rij (vanaf rij ${START_ROW}, bijv. je testrij)!`);
    return;
  }

  const rowData = sheet.getRange(activeRow, 1, 1, 7).getValues()[0];
  const inschrijfnummer = String(rowData[COL_INSCHRIJFNUMMER - 1]).trim();
  const voornaam = String(rowData[COL_VOORNAAM - 1]).trim() || "Testgebruiker";
  const email = String(rowData[COL_EMAIL - 1]).trim();
  let link = String(rowData[COL_PERSOONLIJKE_LINK - 1]).trim();

  if (!email || !email.includes('@')) {
    SpreadsheetApp.getUi().alert(`Rij ${activeRow} heeft geen geldig e-mailadres in kolom E!`);
    return;
  }

  // Genereer link voor deze specifieke testrij als die er nog niet staat
  if (!link) {
    link = `${BASE_INTAKE_URL}?id=${encodeURIComponent(inschrijfnummer || "TEST-01")}&naam=${encodeURIComponent(voornaam)}`;
    sheet.getRange(activeRow, COL_PERSOONLIJKE_LINK).setValue(link);
  }

  // Maak de concept-mail aan
  const subject = `[TEST] Praktijkcursus "Aan de slag met AI" - Welkom & Korte Vragenlijst`;
  const emailContent = buildEmailHtml(voornaam, link);

  GmailApp.createDraft(email, subject, emailContent.plainBody, { htmlBody: emailContent.htmlBody });
  sheet.getRange(activeRow, COL_VERZENDSTATUS).setValue("Test concept klaar in Gmail");

  SpreadsheetApp.getUi().alert(
    `✅ Test geslaagd!\n\nEr is een concept-mail klaargezet in jouw Gmail voor:\n${voornaam} (${email})\n\nOpen Gmail > Concepten om de mail te openen en de link te testen!`
  );
}

/**
 * 1. GENEREER PERSOONLIJKE LINKS
 * Vult kolom F ("Persoonlijke Link") met de unieke URL per cursist
 */
function generatePersonalLinks() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(`Tabblad "${SHEET_NAME_DEELNEMERS}" niet gevonden!`);
    return;
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < START_ROW) {
    SpreadsheetApp.getUi().alert('Geen cursisten gevonden vanaf rij 9.');
    return;
  }

  const numRows = lastRow - START_ROW + 1;
  const data = sheet.getRange(START_ROW, 1, numRows, 7).getValues();
  const links = [];
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const inschrijfnummer = String(data[i][COL_INSCHRIJFNUMMER - 1]).trim();
    const voornaam = String(data[i][COL_VOORNAAM - 1]).trim();

    if (inschrijfnummer || voornaam) {
      const paramId = encodeURIComponent(inschrijfnummer);
      const paramNaam = encodeURIComponent(voornaam);
      const fullUrl = `${BASE_INTAKE_URL}?id=${paramId}&naam=${paramNaam}`;
      links.push([fullUrl]);
      count++;
    } else {
      links.push(['']);
    }
  }

  // Schrijf de links in kolom F
  sheet.getRange(START_ROW, COL_PERSOONLIJKE_LINK, numRows, 1).setValues(links);
  
  SpreadsheetApp.getUi().alert(`Succes! Er zijn ${count} persoonlijke links gegenereerd in kolom F.`);
}

/**
 * 2. MAAK CONCEPT MAILS IN GMAIL (DRAFTS)
 * Maakt voor elke cursist een gepersonaliseerde welkomstmail aan als concept in jouw Gmail.
 */
function createGmailDrafts() {
  processEmails(true);
}

/**
 * 3. VERSTUUR MAILS DIRECT
 * Verstuurt de e-mails direct vanuit jouw Gmail account.
 */
function sendEmailsDirectly() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    'Mails Direct Verzenden',
    'Weet je zeker dat je de welkomstmails direct wilt verzenden naar alle cursisten?',
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    processEmails(false);
  }
}

/**
 * Hulpfunctie voor het verwerken / klaarzetten van e-mails
 */
function processEmails(isDraftOnly) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_DEELNEMERS);
  if (!sheet) return;

  const lastRow = sheet.getLastRow();
  if (lastRow < START_ROW) return;

  const numRows = lastRow - START_ROW + 1;
  const range = sheet.getRange(START_ROW, 1, numRows, 7);
  const data = range.getValues();

  let count = 0;
  let skipped = 0;

  for (let i = 0; i < data.length; i++) {
    const rowNum = START_ROW + i;
    const voornaam = String(data[i][COL_VOORNAAM - 1]).trim();
    const email = String(data[i][COL_EMAIL - 1]).trim();
    let link = String(data[i][COL_PERSOONLIJKE_LINK - 1]).trim();
    const status = String(data[i][COL_VERZENDSTATUS - 1]).trim();

    // Sla over als al verzonden of geen email
    if (!email || !email.includes('@')) {
      skipped++;
      continue;
    }

    if (status === 'Verzonden') {
      skipped++;
      continue;
    }

    // Genereer link als deze nog ontbrak
    if (!link) {
      const inschrijfnummer = String(data[i][COL_INSCHRIJFNUMMER - 1]).trim();
      link = `${BASE_INTAKE_URL}?id=${encodeURIComponent(inschrijfnummer)}&naam=${encodeURIComponent(voornaam)}`;
      sheet.getRange(rowNum, COL_PERSOONLIJKE_LINK).setValue(link);
    }

    const subject = `Praktijkcursus "Aan de slag met AI" - Welkom & Korte Vragenlijst`;
    const emailContent = buildEmailHtml(voornaam, link);

    if (isDraftOnly) {
      GmailApp.createDraft(email, subject, emailContent.plainBody, { htmlBody: emailContent.htmlBody });
      sheet.getRange(rowNum, COL_VERZENDSTATUS).setValue("Concept klaar in Gmail");
    } else {
      GmailApp.sendEmail(email, subject, emailContent.plainBody, { htmlBody: emailContent.htmlBody });
      sheet.getRange(rowNum, COL_VERZENDSTATUS).setValue("Verzonden");
    }

    count++;
  }

  const actie = isDraftOnly ? "concepten klaargezet in je Gmail inbox" : "e-mails direct verzonden";
  SpreadsheetApp.getUi().alert(`Klaar! Er zijn ${count} ${actie}. (${skipped} overgeslagen).`);
}

/**
 * HULPFUNCTIE: Bouwt de gestylde HTML en platte tekst e-mail op
 */
function buildEmailHtml(voornaam, link) {
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; color: #1e293b; line-height: 1.6; max-width: 600px;">
      <p>Beste ${voornaam},</p>
      
      <p>Binnenkort gaan we van start met de praktijkcursus <strong>"Aan de slag met AI: ontdek de kracht van slimme tools"</strong> in School 7. Ik kijk er erg naar uit om je te ontmoeten!</p>
      
      <p>In 3 interactieve bijeenkomsten gaan we zelf actief aan de knoppen zitten met moderne AI-tools (zoals ChatGPT en Google Gemini) voor o.a. het schrijven van brieven en e-mails, razendsnel samenvatten, beeldgeneratie en praktische assistentie.</p>
      
      <p>Om de bijeenkomsten en praktijkoefeningen optimaal af te stemmen op jouw persoonlijke achtergrond, ervaring en het apparaat dat je meeneemt, wil ik je vragen om vooraf onderstaande korte vragenlijst in te vullen (kost circa 3 minuten):</p>
      
      <div style="margin: 28px 0; text-align: left;">
        <a href="${link}" style="background-color: #2563eb; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px rgba(37,99,235,0.2);">👉 Klik hier om de Vragenlijst in te vullen</a>
      </div>
      
      <p style="font-size: 13px; color: #64748b;">
        <em>Werkt de knop niet? Kopieer dan deze link in je browser:<br>
        <a href="${link}" style="color: #2563eb;">${link}</a></em>
      </p>
      
      <div style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 10px 14px; margin: 20px 0; font-size: 13px; color: #475569;">
        🔒 <strong>Privacy:</strong> Je antwoorden zijn vertrouwelijk en uitsluitend bestemd voor mij als docent om de lessen voor te bereiden.
      </div>
      
      <p><strong>Praktisch:</strong> Neem naar de eerste bijeenkomst je eigen laptop of tablet mee. Mocht je vooraf al vragen hebben, reageer dan gerust op deze mail.</p>
      
      <p>Hartelijke groet en graag tot ziens bij de eerste les!</p>
      
      <p style="margin-top: 20px;">
        <strong>Jan Martin Jansen</strong><br>
        <span style="color: #64748b; font-size: 14px;">Docent "Aan de slag met AI"</span><br>
        <a href="https://janmartinjansen.github.io/AI/najaar" style="color: #2563eb; font-size: 13px;">https://janmartinjansen.github.io/AI/najaar</a>
      </p>
    </div>
  `;

  const plainBody = `Beste ${voornaam},\n\nBinnenkort gaan we van start met de praktijkcursus "Aan de slag met AI: ontdek de kracht van slimme tools" in School 7.\n\nOm de lessen optimaal af te stemmen, wil ik je vragen onderstaande korte vragenlijst in te vullen:\n${link}\n\nNeem je eigen laptop of tablet mee naar de les. Tot ziens!\n\nHartelijke groet,\nJan Martin Jansen\nhttps://janmartinjansen.github.io/AI/najaar`;

  return { htmlBody: htmlBody, plainBody: plainBody };
}

/**
 * 4. MAAK TABBLAD VOOR INTAKE-ANTWOORDEN
 */
function setupAnswersSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME_ANTWOORDEN);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME_ANTWOORDEN);
    
    // Header opmaken
    const headers = [
      "Tijdstempel", 
      "Inschrijfnummer", 
      "Naam Cursist", 
      "Apparaat", 
      "Huidige Ervaring", 
      "Redenen Deelname", 
      "Toepassingen in Dagelijks Leven", 
      "Wanneer Geslaagd?", 
      "Specifieke Vragen/Wensen"
    ];

    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Header styling
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#1e293b");
    headerRange.setFontColor("#ffffff");
    headerRange.setFontWeight("bold");
    headerRange.setWrap(true);
    sheet.setFrozenRows(1);
    
    // Kolombreedtes
    sheet.setColumnWidth(1, 150); // Tijdstempel
    sheet.setColumnWidth(2, 140); // Inschrijfnummer
    sheet.setColumnWidth(3, 140); // Naam
    sheet.setColumnWidth(4, 150); // Apparaat
    sheet.setColumnWidth(5, 160); // Ervaring
    sheet.setColumnWidth(6, 220); // Redenen
    sheet.setColumnWidth(7, 220); // Toepassingen
    sheet.setColumnWidth(8, 250); // Geslaagd
    sheet.setColumnWidth(9, 250); // Vragen

    SpreadsheetApp.getUi().alert(`Tabblad "${SHEET_NAME_ANTWOORDEN}" is aangemaakt!`);
  } else {
    ss.setActiveSheet(sheet);
  }
}

/**
 * WEB APP ENDPOINT: Ontvangt de formulier-inzendingen van intake.html
 */
function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME_ANTWOORDEN);
    if (!sheet) {
      setupAnswersSheet();
      sheet = ss.getSheetByName(SHEET_NAME_ANTWOORDEN);
    }

    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      data = {};
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

    // Retourneer succesbericht met CORS
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
