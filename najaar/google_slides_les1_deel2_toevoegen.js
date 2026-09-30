/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: DIA'S VOOR DEEL 2 TOEVOEGEN (DIA 21 T/M 25)
 * =========================================================================
 * Cursus: MM2704 - Aan de slag met AI: ontdek de kracht van slimme tools
 * Docent: Jan Martin Jansen • Locatie: School 7
 * 
 * VEILIG TOEVOEGEN ZONDER BESTAANDE DIA'S TE WISSEN:
 * Dit script voegt 5 nieuwe dia's toe ACHTERAAN je bestaande presentatie.
 * Jouw eerdere wijzigingen in dia 1 t/m 20 blijven 100% BEHOUDEN!
 * 
 * HOE TE GEBRUIKEN:
 * 1. Open je bestaande Google Presentatie in de browser.
 * 2. Klik in het bovenmenu op "Extensies" (Extensions) > "Apps Script".
 * 3. Vervang de code in de editor door onderstaande code (of voeg onderstaande functie toe).
 * 4. Klik op "Opslaan" (💾) en daarna op "Uitvoeren" (▶️ Run).
 * 5. Ga terug naar je presentatie: dia 21 t/m 25 zijn direct netjes toegevoegd!
 */

// Alias: als in het Apps Script uitklapmenuutje nog "createAILes1Presentation" geselecteerd staat, werkt het ook direct!
function createAILes1Presentation() {
  voegLes1Deel2DiasToe();
}

function voegLes1Deel2DiasToe() {
  var presentation = SlidesApp.getActivePresentation();
  
  // LET OP: We verwijderen géén bestaande dia's! 
  // Alles wordt veilig achteraan toegevoegd.
  
  // Kleurenpalet
  var COLOR_BG = '#0f172a';         // Slate 900
  var COLOR_CYAN = '#38bdf8';       // Cyaan
  var COLOR_PURPLE = '#c084fc';     // Paars
  var COLOR_GREEN = '#34d399';      // Groen
  var COLOR_AMBER = '#fbbf24';      // Goud/Amber

  // =========================================================================
  // DIA 21: Het AI-Landschap (De Grote Vier Chat-Apps)
  // =========================================================================
  var slide21 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide21.getBackground().setSolidFill(COLOR_BG);
  createTag(slide21, 40, 30, 400, 25, '🧭 SPEELVELD • NIVEAU 1', COLOR_CYAN);
  createTitle(slide21, 40, 55, 640, 50, 'De Grote Vier Chat-Apps', 34);
  createSubtitle(slide21, 40, 105, 640, 25, 'ChatGPT als referentiepunt: wanneer kies je een andere assistent?');
  
  createCard(slide21, 40, 135, 310, 105, '🤖 ChatGPT (OpenAI)', 
    '• De vertrouwde allrounder waar iedereen mee begint\n' +
    '• Sterk in brainstormen, vloeiende teksten en DALL-E beelden\n' +
    '• De standaard waartegen alle andere modellen worden afgezet'
  );
  createCard(slide21, 370, 135, 310, 105, '💎 Google Gemini', 
    '• Gigantisch contextvenster (hele boeken of video\'s in 1 prompt!)\n' +
    '• Direct gekoppeld aan Google Drive, Gmail en Google Docs\n' +
    '• Ideaal voor wie al veel in het Google-ecosysteem werkt'
  );
  createCard(slide21, 40, 250, 310, 105, '🧠 Claude (Anthropic)', 
    '• Schrijft het meest natuurlijke, genuanceerde Nederlands\n' +
    '• Veel minder \'Amerikaans/plastic\' of wollig dan ChatGPT\n' +
    '• Ongeëvenaard in logica, lange analyses en diep redeneren'
  );
  createCard(slide21, 370, 250, 310, 105, '💼 Microsoft Copilot', 
    '• Direct geïntegreerd in Windows, Edge en Microsoft 365\n' +
    '• Ondersteunt direct in Word, Excel en PowerPoint\n' +
    '• Handig voor zakelijk gebruik en kantoorautomatisering'
  );
  
  setNotes(slide21, 
    "DE GROTE VIER VERGELEKEN:\n" +
    "- Iedereen kent ChatGPT, maar het loont enorm om te weten welke tool waarin uitblinkt.\n" +
    "- Als je een heel dik rapport of een video van een uur wilt samenvatten: kies Gemini.\n" +
    "- Als je een gevoelige brief of beleidstekst wilt die écht als prachtig Nederlands moet klinken: kies Claude.\n" +
    "- Als je in Word of Excel zit: kies Copilot.\n" +
    "- En voor het dagelijkse sparren en brainstormen: ChatGPT blijft de vertrouwde allrounder."
  );

  // =========================================================================
  // DIA 22: NotebookLM: Grip op je Eigen Bronnen
  // =========================================================================
  var slide22 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide22.getBackground().setSolidFill(COLOR_BG);
  createTag(slide22, 40, 30, 400, 25, '📚 DOCUMENTEN TEMMEN • NIVEAU 2', COLOR_PURPLE);
  createTitle(slide22, 40, 55, 640, 50, 'NotebookLM: Grip op je Eigen Bronnen', 34);
  createSubtitle(slide22, 40, 105, 640, 25, 'Geen hallucinaties: uitsluitend antwoorden gebaseerd op jóuw documenten');
  
  createCard(slide22, 40, 135, 310, 140, '📁 Hoe Werkt Het?', 
    '• Upload je eigen documenten: PDF\'s, Word-bestanden, notities of weblinks (tot 50 bronnen per notitieblok)\n\n' +
    '• Stel gerichte vragen: "Wat waren de afspraken in 2024?", "Maak een tijdlijn" of "Waar spreken de stukken elkaar tegen?"'
  );
  createCard(slide22, 370, 135, 310, 140, '✨ Waarom is dit een Eye-opener?', 
    '• Vrijwel 0% kans op hallucinaties: het model weet alleen wat in jouw bronnen staat\n\n' +
    '• Elk antwoord heeft klikbare voetnoten naar de exacte alinea in jouw bron\n\n' +
    '• Volledig gratis te gebruiken met een Google-account'
  );
  createBanner(slide22, 40, 285, 640, 75, '🎙️ De \'Audio Overview\' (Podcast Generatie)', 
    'Met één klik tovert NotebookLM jouw taaie documenten om in een levendig Engels radiogesprek tussen twee AI-presentatoren die jouw dossier bespreken!');
  
  setNotes(slide22, 
    "NOTEBOOKLM UITGELEGD:\n" +
    "- Dit is voor veel mensen een absolute openbaring.\n" +
    "- Normale AI verzint soms dingen als het het antwoord niet weet. NotebookLM doet dat NIET: het baseert zich strikt op jouw geüploade documenten.\n" +
    "- Ideaal voor verenigingsbestuurders (statuten, notulen), intakegesprekken samenvatten, of dikke rapporten doorzoeken.\n" +
    "- Tip: laat na afloop even kort de Audio Overview horen als je tijd hebt, de zaal vindt dat altijd fantastisch!"
  );

  // =========================================================================
  // DIA 23: De Volgende Stap: AI Agents
  // =========================================================================
  var slide23 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide23.getBackground().setSolidFill(COLOR_BG);
  createTag(slide23, 40, 30, 400, 25, '🚀 DE TOEKOMST • NIVEAU 3', COLOR_GREEN);
  createTitle(slide23, 40, 55, 640, 50, 'Van \'Praten\' naar \'Zelf Doen\'', 34);
  createSubtitle(slide23, 40, 105, 640, 25, 'AI Agents die software bouwen, bestanden beheren en taken uitvoeren');
  
  createCard(slide23, 40, 135, 370, 130, '⚡ Het Verschil met ChatGPT', 
    '• Een Chat-app adviseert: hij typt tekst op je scherm, maar jij moet zelf knippen, plakken en uitvoeren.\n\n' +
    '• Een AI Agent heeft "handen": hij krijgt een doel ("bouw een website voor mijn club"), maakt bestanden aan, voert code uit en test het zélf!'
  );
  createBanner(slide23, 40, 275, 370, 80, '🛠️ De Nieuwe Generatie Bouwers', 
    'Claude Code, Google Antigravity & Codex: zelfstandig werkende agents die complete websites en programma\'s ontwikkelen.');
  insertSlideImage(slide23, 'dia23_ai_agents.jpg', 430, 135, 250, 220);
  
  setNotes(slide23, 
    "AI AGENTS UITGELEGD:\n" +
    "- In de intake vroeg Arie: 'Hoe kan AI een website voor me bouwen?' Dit is het antwoord!\n" +
    "- Waar we nu zitten is 'chatten': vraag en antwoord.\n" +
    "- De volgende golf zijn 'Agents': je geeft ze een taak, en ze gaan zelfstandig aan de slag. Ze openen bestanden, schrijven de code, testen of de knoppen werken, en lossen hun eigen fouten op.\n" +
    "- Je hoeft straks geen programmeur meer te zijn; je moet de AI kunnen aansturen als een projectleider."
  );

  // =========================================================================
  // DIA 24: De Gouden Promptformule: RCTK
  // =========================================================================
  var slide24 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide24.getBackground().setSolidFill(COLOR_BG);
  createTag(slide24, 40, 30, 400, 25, '🎯 PROMPTING TECHNIEK', COLOR_CYAN);
  createTitle(slide24, 40, 55, 640, 50, 'De Gouden Promptformule: RCTK', 34);
  createSubtitle(slide24, 40, 105, 640, 25, 'Stop met zoeken zoals in Google • Start met regisseren als een opdrachtgever');
  
  createCard(slide24, 40, 135, 150, 140, '👤 R - Rol', 
    'Geef de AI een persona:\n\n"Je bent een ervaren eindredacteur" of "Je bent een geduldige coach."'
  );
  createCard(slide24, 203, 135, 150, 140, '📍 C - Context', 
    'Geef de situatie mee:\n\n"Dit is voor een vereniging met veel 65-plussers die de mail ontvangen."'
  );
  createCard(slide24, 366, 135, 150, 140, '🎯 T - Taak', 
    'Omschrijf de actie:\n\n"Herschrijf deze brief zodat de toon warm, helder en uitnodigend is."'
  );
  createCard(slide24, 529, 135, 150, 140, '📏 K - Kaders', 
    'Stel duidelijke grenzen:\n\n"Max. 150 woorden, in 3 alinea\'s, geen vakjargon, puntsgewijs."'
  );
  createBanner(slide24, 40, 285, 640, 75, '💡 Waarom dit zo goed werkt', 
    'Herinner je de theorie: AI voorspelt woorden op basis van context. Hoe specifieker jouw RCTK-kader, hoe verbluffender het resultaat!');
  
  setNotes(slide24, 
    "DE RCTK-FORMULE:\n" +
    "- Cursisten vragen vaak: waarom krijg ik van ChatGPT van die saaie, algemene antwoorden?\n" +
    "- Omdat je een algemene vraag stelt!\n" +
    "- Onthoud RCTK: Rol, Context, Taak, Kaders.\n" +
    "- Vooral de 'K' van Kaders (beperkingen: lengte, toon, doelgroep) maakt het verschil tussen een 6-min en een 9-plus tekst."
  );

  // =========================================================================
  // DIA 25: Aan de Slag: Drie Praktijkoefeningen
  // =========================================================================
  var slide25 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide25.getBackground().setSolidFill(COLOR_BG);
  createTag(slide25, 40, 30, 400, 25, '💻 ZELF ACHTER DE KNOPPEN', COLOR_GREEN);
  createTitle(slide25, 40, 55, 640, 50, 'Aan de Slag: Drie Praktijkoefeningen', 34);
  createSubtitle(slide25, 40, 105, 640, 25, 'Open je laptop of tablet • Start ChatGPT, Gemini of Copilot');
  
  createCard(slide25, 40, 135, 200, 220, '✍️ Oefening 1: Herschrijven', 
    '• Pak een formele, stugge brief of e-mail\n\n' +
    '• Vraag de AI: "Herschrijf deze mail met een warme, uitnodigende toon voor een verenigingslid"\n\n' +
    '• Verfijn het resultaat met een vervolgvraag ("Maak het korter!")'
  );
  createCard(slide25, 260, 135, 200, 220, '📑 Oefening 2: Samenvatten', 
    '• Plak een lang artikel of verslag in het chatvenster\n\n' +
    '• Vraag om: 1) Kernboodschap in 2 zinnen, 2) De 3 belangrijkste besluiten\n\n' +
    '• Geef een kader mee: "In maximaal 100 woorden"'
  );
  createCard(slide25, 480, 135, 200, 220, '📊 Oefening 3: Tabellen', 
    '• Vraag om een actielijst of taakverdeling\n\n' +
    '• Prompt: "Zet de uitkomst in een tabel met kolommen: Wie, Wat, Wanneer"\n\n' +
    '• Selecteer de tabel en plak hem direct in Word of Excel!'
  );
  
  setNotes(slide25, 
    "OEFENINGEN BEGELEIDEN:\n" +
    "- Iedereen mag nu aan de slag!\n" +
    "- Loop rond in de zaal: help mensen die nog moeten inloggen (Google/Microsoft account werkt meestal direct).\n" +
    "- Voor tabletgebruikers: wijs op het microfoontje op het virtuele toetsenbord om prompts in te spreken!\n" +
    "- Na 25 minuten bespreken we plenair een paar mooie resultaten."
  );

  Logger.log('Dia 21 t/m 25 succesvol toegevoegd aan je presentatie!');
}

// =========================================================================
// HULPFUNCTIES (DRIVE AFBEELDINGEN & OPMAAK)
// =========================================================================

var _driveFolderCache = null;

function getDriveFolder() {
  if (_driveFolderCache !== null) return _driveFolderCache;
  try {
    var folders = DriveApp.getFoldersByName('les1_afbeeldingen');
    if (folders.hasNext()) {
      _driveFolderCache = folders.next();
      return _driveFolderCache;
    }
  } catch (e) {
    Logger.log('Fout bij zoeken naar map les1_afbeeldingen: ' + e);
  }
  _driveFolderCache = false;
  return null;
}

function insertSlideImage(slide, filename, left, top, width, height) {
  var frame = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, width, height);
  frame.getFill().setSolidFill('#1e293b');
  frame.getBorder().getLineFill().setSolidFill('#334155');
  frame.getBorder().setWeight(1);
  
  var folder = getDriveFolder();
  if (!folder) return;
  
  try {
    var file = null;
    var files = folder.getFilesByName(filename);
    if (files.hasNext()) {
      file = files.next();
    } else {
      var altName = filename.replace('.jpg', '.png');
      var files2 = folder.getFilesByName(altName);
      if (files2.hasNext()) file = files2.next();
    }
    
    if (file) {
      var blob = file.getBlob();
      var pad = 8;
      slide.insertImage(blob, left + pad, top + pad, width - (pad * 2), height - (pad * 2));
    }
  } catch (e) {
    Logger.log('Afbeelding kon niet worden ingevoegd: ' + e);
  }
}

function createTag(slide, left, top, width, height, text, color) {
  var tag = slide.insertTextBox(text, left, top, width, height);
  tag.getText().getTextStyle().setForegroundColor(color).setFontSize(11).setBold(true);
}

function createTitle(slide, left, top, width, height, text, fontSize) {
  var title = slide.insertTextBox(text, left, top, width, height);
  title.getText().getTextStyle().setForegroundColor('#ffffff').setFontSize(fontSize || 32).setBold(true);
}

function createSubtitle(slide, left, top, width, height, text) {
  var sub = slide.insertTextBox(text, left, top, width, height);
  sub.getText().getTextStyle().setForegroundColor('#94a3b8').setFontSize(13);
}

function createCard(slide, left, top, width, height, title, body) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#1e293b');
  shape.getBorder().getLineFill().setSolidFill('#334155');
  shape.getBorder().setWeight(1);
  
  var text = shape.getText();
  text.setText(title + '\n\n' + body);
  
  var paragraphs = text.getParagraphs();
  if (paragraphs.length > 0) {
    paragraphs[0].getRange().getTextStyle().setForegroundColor('#ffffff').setFontSize(13).setBold(true);
  }
  if (paragraphs.length > 1) {
    var bodyRange = text.getRange(paragraphs[0].getRange().getEndIndex(), text.getLength());
    bodyRange.getTextStyle().setForegroundColor('#cbd5e1').setFontSize(11).setBold(false);
  }
}

function createBanner(slide, left, top, width, height, title, body) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#1e293b');
  shape.getBorder().getLineFill().setSolidFill('#38bdf8');
  shape.getBorder().setWeight(1.5);
  
  var text = shape.getText();
  text.setText(title + '\n' + body);
  
  var paragraphs = text.getParagraphs();
  if (paragraphs.length > 0) {
    paragraphs[0].getRange().getTextStyle().setForegroundColor('#38bdf8').setFontSize(12).setBold(true);
  }
  if (paragraphs.length > 1) {
    var bodyRange = text.getRange(paragraphs[0].getRange().getEndIndex(), text.getLength());
    bodyRange.getTextStyle().setForegroundColor('#cbd5e1').setFontSize(11).setBold(false);
  }
}

function setNotes(slide, notesText) {
  try {
    slide.getNotesPage().getSpeakerNotesShape().getText().setText(notesText);
  } catch (e) {
    Logger.log('Kon sprekersnotitie niet instellen: ' + e);
  }
}
