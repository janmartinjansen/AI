/**
 * Google Apps Script om direct de presentatie "De Geboorte van de Moderne Wetenschap" te genereren.
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga in je browser naar https://slides.new (opent een nieuwe lege Google Presentatie).
 * 2. Klik in het menu op "Extensies" (Extensions) > "Apps Script".
 * 3. Plak onderstaande code in de editor (vervang alle eventuele bestaande tekst).
 * 4. Klik op "Opslaan" (💾) en vervolgens op "Uitvoeren" (▶️ Run).
 * 5. Geef eventueel eenmalig toestemming aan Google.
 * 6. Ga terug naar je Google Presentatie: alle 6 gestylde slides zijn nu automatisch gegenereerd!
 * 
 * AUTORUN OP JE IPAD INSTELLEN:
 * - Klik in Google Presentaties op: Bestand > Delen > Publiceren op internet.
 * - Vink aan: "Dia's automatisch laten voortgaan: elke 15 seconden" (of 10 seconden).
 * - Vink aan: "Presentatie starten zodra de speler is geladen".
 * - Vink aan: "Presentatie opnieuw starten na de laatste dia".
 * - Kopieer de gegenereerde link en open deze op je iPad in Safari!
 */

function createWetenschapOpenDagPresentation() {
  var presentation = SlidesApp.getActivePresentation();
  
  // Verwijder eventuele lege standaard slides
  var existingSlides = presentation.getSlides();
  for (var i = 0; i < existingSlides.length; i++) {
    existingSlides[i].remove();
  }
  
  // Kleurenpalet (Kosmisch / Klassiek elegant)
  var COLOR_BG = '#070b14';         // Zeer donker nachtblauw
  var COLOR_CARD = '#0f172a';       // Slate 900
  var COLOR_CARD_BORDER = '#1e293b';// Slate 800
  var COLOR_WHITE = '#ffffff';
  var COLOR_TEXT_MUTED = '#94a3b8';
  var COLOR_GOLD = '#fbbf24';       // Goud / Amber
  var COLOR_CYAN = '#38bdf8';       // Kosmisch Cyaan
  var COLOR_INDIGO = '#818cf8';     // Indigo
  var COLOR_EMERALD = '#34d399';    // Smaragdgroen
  var COLOR_ROSE = '#fb7185';       // Zachtrood/Roze

  // SLIDE 1: Titel
  var slide1 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide1.getBackground().setSolidFill(COLOR_BG);
  
  var tag1 = slide1.insertTextBox('🌌 OPEN DAG 2026 • WETENSCHAPSGESCHIEDENIS', 40, 25, 550, 30);
  tag1.getText().getTextStyle().setForegroundColor(COLOR_GOLD).setFontSize(13).setBold(true);
  
  var title1 = slide1.insertTextBox('De Geboorte van de Moderne Wetenschap', 40, 55, 640, 75);
  title1.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(36).setBold(true);
  
  var sub1 = slide1.insertTextBox('Blok 1: Van de Griekse abstractie naar het mathematische \'Uurwerk\' van Newton (3 inspirerende lessen).', 40, 130, 640, 45);
  sub1.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(15);
  
  createCard(slide1, 40, 195, 200, 170, '🏛️ Ideeëngeschiedenis', 'Hoe ons begrip van de kosmos en werkelijkheid in twee eeuwen tijd radicaal kantelde.');
  createCard(slide1, 260, 195, 200, 170, '🔭 De Grote Denkers', 'Van Aristoteles en Copernicus tot Kepler, Galilei, Descartes en Newton.');
  createCard(slide1, 480, 195, 200, 170, '💡 Voor Iedereen', 'Toegankelijk en meeslepend verteld: geen wiskundige of natuurkundige voorkennis vereist!');

  // SLIDE 2: Waarom deze cyclus?
  var slide2 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide2.getBackground().setSolidFill(COLOR_BG);
  
  var tag2 = slide2.insertTextBox('⚡ PARADIGMAVERSCHUIVINGEN', 40, 25, 450, 30);
  tag2.getText().getTextStyle().setForegroundColor(COLOR_CYAN).setFontSize(13).setBold(true);
  
  var title2 = slide2.insertTextBox('Hoe de Wereld een Machine Werd', 40, 55, 640, 45);
  title2.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(30).setBold(true);
  
  createListItem(slide2, 40, 110, 640, 55, '📜 Van Dogma naar Observatie', 'Waarom het 2000 jaar duurde voordat we antieke autoriteiten durfden te testen met metingen.');
  createListItem(slide2, 40, 175, 640, 55, '🪐 De Kosmische Schok', 'Wat gebeurde er met het mensbeeld toen de Aarde niet langer het centrum van het heelal bleek?');
  createListItem(slide2, 40, 240, 640, 55, '⚙️ Het Uurwerk van de Natuur', 'Hoe zwaartekracht en wiskundige wetten de vallende appel en de planetenbanen verenigden.');

  var quoteShape = slide2.insertShape(SlidesApp.ShapeType.ROUNDED_RECTANGLE, 40, 310, 640, 45);
  quoteShape.getFill().setSolidFill('#17140a');
  quoteShape.getBorder().getLineFill().setSolidFill(COLOR_GOLD);
  quoteShape.getBorder().setWeight(1);
  var quoteText = quoteShape.getText();
  quoteText.setText('🔭 "Als ik verder heb gezien dan anderen, was dat door op de schouders van reuzen te staan." — Isaac Newton');
  quoteText.getTextStyle().setForegroundColor(COLOR_GOLD).setFontSize(12).setItalic(true);

  // SLIDE 3: Les 1
  var slide3 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide3.getBackground().setSolidFill(COLOR_BG);
  
  var tag3 = slide3.insertTextBox('🏛️ LES 1 VAN BLOK 1', 40, 25, 400, 30);
  tag3.getText().getTextStyle().setForegroundColor(COLOR_GOLD).setFontSize(13).setBold(true);
  
  var title3 = slide3.insertTextBox('De Griekse Erfenis & Het Dogma', 40, 55, 640, 45);
  title3.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(28).setBold(true);
  
  var sub3 = slide3.insertTextBox('Deductieve logica, de harmonie van meetkunde en het onwrikbare geocentrische universum.', 40, 105, 640, 30);
  sub3.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(14);
  
  createCard(slide3, 40, 145, 200, 215, '📐 De Griekse Paradox', 'Geniale wiskunde en deductie (Euclides), maar het ontbreken van systematische experimenten.');
  createCard(slide3, 260, 145, 200, 215, '🌍 Aristoteles & Doel', 'Voorwerpen zoeken hun "natuurlijke plaats" (teleologie). Rigide scheiding tussen onder- en bovenmaans.');
  createCard(slide3, 480, 145, 200, 215, '⛪ Scholastiek & Kerk', 'Versmelting van christelijke theologie met Aristoteles: waarheid ligt vast, afwijken is ketterij.');

  // SLIDE 4: Les 2
  var slide4 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide4.getBackground().setSolidFill(COLOR_BG);
  
  var tag4 = slide4.insertTextBox('🔭 LES 2 VAN BLOK 1', 40, 25, 400, 30);
  tag4.getText().getTextStyle().setForegroundColor(COLOR_CYAN).setFontSize(13).setBold(true);
  
  var title4 = slide4.insertTextBox('De Breuk met het Geocentrisme', 40, 55, 640, 45);
  title4.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(28).setBold(true);
  
  var sub4 = slide4.insertTextBox('Copernicus, Kepler en Galilei zetten de aarde in beweging.', 40, 105, 640, 30);
  sub4.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(14);
  
  createCard(slide4, 40, 145, 200, 215, '☀️ Copernicus (1543)', 'De Zon in het middelpunt. Een elegante wiskundige vereenvoudiging met schokkende filosofische implicaties.');
  createCard(slide4, 260, 145, 200, 215, '🪐 Kepler: De Ellips', 'Weg met de "volmaakte cirkel". Dankzij metingen van Tycho Brahe ontstaan de 3 beroemde planeetwetten.');
  createCard(slide4, 480, 145, 200, 215, '🔍 Galilei & Telescoop', 'Kraters op de maan en manen bij Jupiter: het empirische bewijs botst hard met de Inquisitie.');

  // SLIDE 5: Les 3
  var slide5 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide5.getBackground().setSolidFill(COLOR_BG);
  
  var tag5 = slide5.insertTextBox('⚙️ LES 3 VAN BLOK 1', 40, 25, 400, 30);
  tag5.getText().getTextStyle().setForegroundColor(COLOR_INDIGO).setFontSize(13).setBold(true);
  
  var title5 = slide5.insertTextBox('De Mechanisering van het Wereldbeeld', 40, 55, 640, 45);
  title5.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(28).setBold(true);
  
  var sub5 = slide5.insertTextBox('Descartes, Newton en het ontstaan van het deterministische universum.', 40, 105, 640, 30);
  sub5.getText().getTextStyle().setForegroundColor(COLOR_TEXT_MUTED).setFontSize(14);
  
  createCard(slide5, 40, 145, 200, 215, '🧠 Descartes & Machine', 'Methodische twijfel: niets aannemen op autoriteit. De natuur als een rationeel raderwerk van deeltjes.');
  createCard(slide5, 260, 145, 200, 215, '🍎 Newton\'s Synthese', 'Principia (1687): 3 bewegingswetten en universele gravitatie verenigen hemel en aarde in één formule.');
  createCard(slide5, 480, 145, 200, 215, '⏱️ Het Uurwerk Heelal', 'Calculus en voorspelbaarheid; de opmaat naar de latere revoluties van Quantum en Relativiteit.');

  // SLIDE 6: Praktisch & Contact
  var slide6 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide6.getBackground().setSolidFill(COLOR_BG);
  
  var tag6 = slide6.insertTextBox('📋 PRAKTISCHE INFORMATIE', 40, 25, 400, 30);
  tag6.getText().getTextStyle().setForegroundColor(COLOR_GOLD).setFontSize(13).setBold(true);
  
  var title6 = slide6.insertTextBox('Aanmelden & Meedoen', 40, 55, 640, 45);
  title6.getText().getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(30).setBold(true);
  
  createCard(slide6, 40, 115, 310, 115, '👥 Voor wie?', 'Voor iedereen met nieuwsgierigheid naar geschiedenis, filosofie en wetenschap. Geen voorkennis vereist.');
  createCard(slide6, 370, 115, 310, 115, '📚 Opzet van Blok 1', '3 inspirerende bijeenkomsten met rijke historische context, visuele simulaties en verdiepende discussie.');
  
  var banner = slide6.insertShape(SlidesApp.ShapeType.ROUNDED_RECTANGLE, 40, 250, 640, 105);
  banner.getFill().setSolidFill('#211a05');
  banner.getBorder().getLineFill().setSolidFill(COLOR_GOLD);
  banner.getBorder().setWeight(2);
  
  var bannerText = banner.getText();
  bannerText.setText('💬 Vragen of interesse in deze collegereeks?\nSpreek mij nu gerust aan bij de stand! Ik vertel je met plezier meer over de inhoud en data.');
  bannerText.getTextStyle().setForegroundColor(COLOR_WHITE).setFontSize(15);
  bannerText.getParagraphs()[0].getRange().getTextStyle().setBold(true).setForegroundColor(COLOR_GOLD);
  
  Logger.log('Presentatie "De Geboorte van de Moderne Wetenschap" succesvol gegenereerd!');
}

function createCard(slide, left, top, width, height, title, body) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUNDED_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#0f172a');
  shape.getBorder().getLineFill().setSolidFill('#1e293b');
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
  shape.getFill().setSolidFill('#0f172a');
  shape.getBorder().getLineFill().setSolidFill('#1e293b');
  shape.getBorder().setWeight(1);
  
  var text = shape.getText();
  text.setText(title + ': ' + body);
  
  var titleLength = (title + ': ').length;
  text.getRange(0, titleLength).getTextStyle().setForegroundColor('#fbbf24').setFontSize(14).setBold(true);
  text.getRange(titleLength, text.getLength()).getTextStyle().setForegroundColor('#cbd5e1').setFontSize(13);
}
