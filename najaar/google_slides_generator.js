/**
 * Google Apps Script om direct de presentatie "Aan de slag met AI" te genereren.
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga in je browser naar https://slides.new (opent een nieuwe lege Google Presentatie).
 * 2. Klik in het menu op "Extensies" (Extensions) > "Apps Script".
 * 3. Plak onderstaande code in de editor (vervang alle bestaande tekst).
 * 4. Klik op "Opslaan" (💾) en vervolgens op "Uitvoeren" (▶️ Run).
 * 5. Geef eventueel eenmalig toestemming.
 * 6. Ga terug naar je Google Presentatie: alle 6 moderne slides zijn nu automatisch gegenereerd!
 * 
 * AUTORUN OP JE IPAD INSTELLEN:
 * - Klik in Google Presentaties op: Bestand > Delen > Publiceren op internet.
 * - Vink aan: "Dia's automatisch laten voortgaan: elke 15 seconden" (of 10 seconden).
 * - Vink aan: "Presentatie starten zodra de speler is geladen".
 * - Vink aan: "Presentatie opnieuw starten na de laatste dia".
 * - Kopieer de gegenereerde link en open deze op je iPad in Safari!
 */

function createAIOpenDagPresentation() {
  var presentation = SlidesApp.getActivePresentation();
  
  // Verwijder eventuele lege standaard slides
  var existingSlides = presentation.getSlides();
  for (var i = 0; i < existingSlides.length; i++) {
    existingSlides[i].remove();
  }
  
  // Kleurenpalet
  var COLOR_BG = '#0f172a';       // Donkerblauw / Slate 900
  var COLOR_CARD = '#1e293b';     // Slate 800
  var COLOR_WHITE = '#ffffff';
  var COLOR_TEXT_MUTED = '#94a3b8';
  var COLOR_BLUE = '#38bdf8';     // Cyaan
  var COLOR_PURPLE = '#c084fc';   // Paars
  var COLOR_PINK = '#f472b6';     // Roze
  var COLOR_GREEN = '#34d399';    // Groen
  var COLOR_AMBER = '#fbbf24';    // Goud/Geel

  // SLIDE 1: Titel
  var slide1 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide1.getBackground().setSolidFill(COLOR_BG);
  
  var tag1 = slide1.insertTextBox('✨ OPEN DAG 2026 • PRAKTIJKCURSUS', 40, 30, 400, 30);
  tag1.getText().getTextStyle().setForegroundColor(COLOR_BLUE).setFontSize(13).setBold(true);
  
  var title1 = slide1.insertTextBox('Aan de slag met AI', 40, 60, 640, 70);
  title1.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(40).setBold(true);
  
  var sub1 = slide1.insertTextBox('Ontdek hoe je de slimste AI-tools (zoals ChatGPT & Gemini) direct praktisch inzet voor dagelijks gemak, werk en creativiteit.', 40, 135, 640, 50);
  sub1.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(15);
  
  createCard(slide1, 40, 200, 200, 160, '🚀 100% Praktijk', 'Geen saaie theorie of geschiedenis, maar direct zelf aan de knoppen zitten.');
  createCard(slide1, 260, 200, 200, 160, '🗓️ 3 Lessen', 'In 3 compacte avonden/ochtenden van nieuwsgierig naar zelfverzekerd met AI.');
  createCard(slide1, 480, 200, 200, 160, '💻 Eigen Apparaat', 'Neem je eigen laptop of tablet mee: we gaan hands-on aan de slag!');

  // SLIDE 2: Waarom meedoen?
  var slide2 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide2.getBackground().setSolidFill(COLOR_BG);
  
  var tag2 = slide2.insertTextBox('💡 DOEN IN PLAATS VAN PRATEN', 40, 30, 400, 30);
  tag2.getText().getTextStyle().setForegroundColor(COLOR_PURPLE).setFontSize(13).setBold(true);
  
  var title2 = slide2.insertTextBox('Waarom deze cursus?', 40, 60, 640, 50);
  title2.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(32).setBold(true);
  
  createListItem(slide2, 40, 120, 640, 60, '⚡ Tijdwinst & Gemak', 'Laat AI routinetaken overnemen: brieven schrijven, dikke teksten samenvatten en sneller plannen.');
  createListItem(slide2, 40, 190, 640, 60, '🎨 Creatieve Mogelijkheden', 'Maak unieke afbeeldingen, brainstorm over originele ideeën en bewerk foto\'s.');
  createListItem(slide2, 40, 260, 640, 60, '👌 Toegankelijk voor Iedereen', 'Geen technische achtergrond nodig. Als je kunt typen en nieuwsgierig bent, kun je meedoen!');

  // SLIDE 3: Les 1
  var slide3 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide3.getBackground().setSolidFill(COLOR_BG);
  
  var tag3 = slide3.insertTextBox('📚 LES 1 VAN 3', 40, 30, 400, 30);
  tag3.getText().getTextStyle().setForegroundColor(COLOR_BLUE).setFontSize(13).setBold(true);
  
  var title3 = slide3.insertTextBox('De Slimme Schrijver & Samenvatter', 40, 60, 640, 50);
  title3.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(30).setBold(true);
  
  var sub3 = slide3.insertTextBox('ChatGPT, Google Gemini, Copilot & de kunst van het vragen stellen (prompting)', 40, 110, 640, 30);
  sub3.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(14);
  
  createCard(slide3, 40, 150, 200, 210, '✍️ Slim Schrijven', 'Opstellen en perfectioneren van e-mails, brieven, toespraken en verslagen in enkele seconden.');
  createCard(slide3, 260, 150, 200, 210, '🎯 Prompt Technieken', 'Geef de juiste context en gebruik rollen (bv. "reageer als kritische redacteur" of "coach").');
  createCard(slide3, 480, 150, 200, 210, '📑 Informatie Temmen', 'Razendsnel de kern halen uit lange rapporten, taaie beleidsstukken of artikelen.');

  // SLIDE 4: Les 2
  var slide4 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide4.getBackground().setSolidFill(COLOR_BG);
  
  var tag4 = slide4.insertTextBox('🎨 LES 2 VAN 3', 40, 30, 400, 30);
  tag4.getText().getTextStyle().setForegroundColor(COLOR_PINK).setFontSize(13).setBold(true);
  
  var title4 = slide4.insertTextBox('Beeld, Ontwerp & \'Kijken\' met AI', 40, 60, 640, 50);
  title4.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(30).setBold(true);
  
  var sub4 = slide4.insertTextBox('Creativiteit, beeldgeneratie & Multimodale AI (Vision)', 40, 110, 640, 30);
  sub4.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(14);
  
  createCard(slide4, 40, 150, 200, 210, '🖼️ Beeldgeneratie', 'Creëer unieke afbeeldingen en illustraties puur op basis van een tekstuele beschrijving.');
  createCard(slide4, 260, 150, 200, 210, '🖌️ Beeldbewerking', 'Achtergronden vervangen, onderdelen aanpassen en foto\'s omtoveren in verschillende stijlen.');
  createCard(slide4, 480, 150, 200, 210, '👁️ Kijken met AI (Vision)', 'Upload een foto van een onbekende plant of koelkastinhoud en laat AI direct analyseren & meedenken!');

  // SLIDE 5: Les 3
  var slide5 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide5.getBackground().setSolidFill(COLOR_BG);
  
  var tag5 = slide5.insertTextBox('🛡️ LES 3 VAN 3', 40, 30, 400, 30);
  tag5.getText().getTextStyle().setForegroundColor(COLOR_GREEN).setFontSize(13).setBold(true);
  
  var title5 = slide5.insertTextBox('Persoonlijke Assistent & Veiligheid', 40, 60, 640, 50);
  title5.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(30).setBold(true);
  
  var sub5 = slide5.insertTextBox('Planningen maken, sparren, betrouwbaarheid & kritische blik', 40, 110, 640, 30);
  sub5.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(14);
  
  createCard(slide5, 40, 150, 200, 210, '🗓️ Assistent & Coach', 'Maken van dag-, week- of reisplanningen, brainstormen en oefenen met vreemde talen.');
  createCard(slide5, 260, 150, 200, 210, '🔍 Feiten vs. Fictie', 'Omgaan met hallucinaties: hoe controleer je of de uitkomst klopt en bronnen betrouwbaar zijn?');
  createCard(slide5, 480, 150, 200, 210, '🔒 Privacy & Veiligheid', 'Veilig omgaan met persoonlijke data en het leren herkennen van AI-content en deepfakes.');

  // SLIDE 6: Praktisch & Contact
  var slide6 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide6.getBackground().setSolidFill(COLOR_BG);
  
  var tag6 = slide6.insertTextBox('📋 PRAKTISCHE INFORMATIE', 40, 30, 400, 30);
  tag6.getText().getTextStyle().setForegroundColor(COLOR_AMBER).setFontSize(13).setBold(true);
  
  var title6 = slide6.insertTextBox('Meld je aan of stel je vraag!', 40, 60, 640, 50);
  title6.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(32).setBold(true);
  
  createCard(slide6, 40, 120, 310, 110, '👥 Voor wie?', 'Iedereen met belangstelling voor AI. Digitale basisvaardigheden zijn voldoende.');
  createCard(slide6, 370, 120, 310, 110, '💻 Meenemen', 'Een eigen laptop of tablet (iPad/Android). We gaan elke bijeenkomst zelf oefenen.');
  
  var banner = slide6.insertShape(SlidesApp.ShapeType.ROUNDED_RECTANGLE, 40, 250, 640, 100);
  banner.getFill().setSolidFill('#2a1e05');
  banner.getBorder().getLineFill().setSolidFill(COLOR_AMBER);
  banner.getBorder().setWeight(2);
  
  var bannerText = banner.getText();
  bannerText.setText('💬 Vragen of direct inschrijven?\nSpreek mij nu gerust aan bij de stand. Ik vertel je graag meer over de cursus!');
  bannerText.getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(16);
  bannerText.getParagraphs()[0].getRange().getTextStyle().setBold(true).setForegroundColor(COLOR_AMBER);
  
  Logger.log('Presentatie succesvol gegenereerd!');
}

function createCard(slide, left, top, width, height, title, body) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUNDED_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#1e293b');
  shape.getBorder().getLineFill().setSolidFill('#334155');
  shape.getBorder().setWeight(1);
  
  var text = shape.getText();
  text.setText(title + '\n\n' + body);
  
  var paragraphs = text.getParagraphs();
  if (paragraphs.length > 0) {
    paragraphs[0].getRange().getTextStyle().setForegroundColor('#ffffff').setFontSize(14).setBold(true);
  }
  if (paragraphs.length > 1) {
    var bodyRange = text.getRange(paragraphs[0].getRange().getEndIndex(), text.getLength());
    bodyRange.getTextStyle().setForegroundColor('#94a3b8').setFontSize(12).setBold(false);
  }
}

function createListItem(slide, left, top, width, height, title, body) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUNDED_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#1e293b');
  shape.getBorder().getLineFill().setSolidFill('#334155');
  shape.getBorder().setWeight(1);
  
  var text = shape.getText();
  text.setText(title + ': ' + body);
  
  var titleLength = (title + ': ').length;
  text.getRange(0, titleLength).getTextStyle().setForegroundColor('#ffffff').setFontSize(14).setBold(true);
  text.getRange(titleLength, text.getLength()).getTextStyle().setForegroundColor('#cbd5e1').setFontSize(13);
}
