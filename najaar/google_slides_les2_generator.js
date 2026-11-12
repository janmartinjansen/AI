/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: AI PRESENTATIE GENERATOR (LES 2)
 * =========================================================================
 * Cursus: MM2704 - Aan de slag met AI: ontdek de kracht van slimme tools
 * Les 2: Van Gesprek naar Notulen met AI
 * Docent: Jan Martin Jansen • Locatie: School 7
 * 
 * HOE TE GEBRUIKEN:
 * 1. Ga in je browser naar https://slides.new (opent een nieuwe lege Google Presentatie).
 * 2. Klik in het menu op "Extensies" (Extensions) > "Apps Script".
 * 3. Plak onderstaande code in de editor (vervang alle bestaande tekst).
 * 4. Klik op "Opslaan" (💾) en vervolgens op "Uitvoeren" (▶️ Run) bij functie `createAILes2Presentation`.
 * 5. Geef eenmalig toestemming (toegang tot Slides).
 * 6. Ga terug naar je Google Presentatie: alle 8 professionele slides zijn direct gegenereerd!
 */

function createAILes2Presentation() {
  var presentation = SlidesApp.getActivePresentation();
  
  // Verwijder eventuele bestaande lege standaard dia's
  var existingSlides = presentation.getSlides();
  for (var i = 0; i < existingSlides.length; i++) {
    existingSlides[i].remove();
  }
  
  // Modern Dark-Slate kleurenpalet (identiek aan Les 1)
  var COLOR_BG = '#0f172a';         // Slate 900 (Achtergrond)
  var COLOR_CARD = '#1e293b';       // Slate 800 (Cards)
  var COLOR_CYAN = '#38bdf8';       // Cyaan (Techniek & Prompting)
  var COLOR_PURPLE = '#c084fc';     // Paars (Theorie & Afwegingen)
  var COLOR_GREEN = '#34d399';      // Groen (Praktijk, Wel doen & Veiligheid)
  var COLOR_AMBER = '#fbbf24';      // Goud/Amber (Aandachtspunten & Regels)
  var COLOR_ROSE = '#fb7185';       // Zachtrood (Niet doen / Valkuilen)
  var COLOR_BORDER = '#334155';     // Slate 700

  // =========================================================================
  // DIA 1: Titel & Introductie
  // =========================================================================
  var slide1 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide1.getBackground().setSolidFill(COLOR_BG);
  createTag(slide1, 40, 35, 450, 25, '✨ AAN DE SLAG MET AI • LES 2', COLOR_CYAN);
  createTitle(slide1, 40, 65, 640, 85, 'Gespreksnotities & Vergaderingen\nSlim Notuleren met AI', 34);
  createSubtitle(slide1, 40, 155, 640, 30, 'Balans tussen efficiëntie, kwaliteit en privacy');
  
  createCard(slide1, 40, 195, 200, 175, '🎯 Het Doel', 
    'Leer hoe je verantwoord en AVG-veilig ruwe gespreksnotities en audio-opnames omzet in bruikbare notulen en actielijsten.',
    COLOR_BORDER
  );
  createCard(slide1, 260, 195, 200, 175, '⚖️ De Balans', 
    'Maximale tijdwinst behalen zonder controle te verliezen over feiten, toezeggingen en gevoelige gegevens.',
    COLOR_BORDER
  );
  createCard(slide1, 480, 195, 200, 175, '🧠 De Kernvraag', 
    'Hoe voorkom je dat AI gaat "hallucineren" over afspraken, en hoe ga je slim en integer om met opnames?',
    COLOR_CYAN
  );
  
  setNotes(slide1, 
    "WELKOM BIJ LES 2:\n" +
    "- Welkom allemaal bij de tweede les van 'Aan de slag met AI'!\n" +
    "- Vorige les hebben we de basis van AI, taalmodellen en prompten verkend.\n" +
    "- Vandaag pakken we een van de meest gewilde use-cases aan: van gesprek naar notulen en actielijsten.\n" +
    "- We kijken naar de hele keten: opnemen (wel/niet), veilig transcriberen, slimme prompts en menselijke controle."
  );

  // =========================================================================
  // DIA 2: De Drie Routes voor Invoer
  // =========================================================================
  var slide2 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide2.getBackground().setSolidFill(COLOR_BG);
  createTag(slide2, 40, 25, 400, 25, '🧭 INVOERSTRATEGIEËN', COLOR_CYAN);
  createTitle(slide2, 40, 50, 640, 45, 'De Drie Routes voor Invoer', 30);
  createSubtitle(slide2, 40, 95, 640, 25, 'Kies de juiste route afhankelijk van tijd, detailniveau en vertrouwelijkheid');
  
  createCard(slide2, 40, 130, 200, 195, '⚡ Route 1: Steekwoorden\n(De snelle route)', 
    '• Direct na afloop trefwoorden en halve zinnen invoeren.\n\n' +
    '• Snelst in de praktijk.\n\n' +
    '• Geen opname-overhead.\n\n' +
    '• 100% privacy-proof & AVG-veilig.',
    COLOR_GREEN
  );
  createCard(slide2, 260, 130, 200, 195, '🎙️ Route 2: Transcriptie\n(De inhoudelijke route)', 
    '• Audio omzetten naar tekst via tools zoals Whisper.\n\n' +
    '• Maximale details en letterlijke citaten beschikbaar.\n\n' +
    '• Ideaal bij complexe data & vaktermen.',
    COLOR_CYAN
  );
  createCard(slide2, 480, 130, 200, 195, '🤖 Route 3: Meeting-Bots\n(De automatische route)', 
    '• Koppeling in Teams/Zoom (Copilot, Fireflies, Otter).\n\n' +
    '• Volledig hands-free tijdens het overleg.\n\n' +
    '• Vraagt strakke afspraken & organisatiebeleid.',
    COLOR_PURPLE
  );

  createBanner(slide2, 40, 335, 640, 45, '💡 Vuistregel', 
    'Hoe gevoeliger het gesprek, hoe sneller je kiest voor Route 1 of lokale transcriptie.');

  setNotes(slide2, 
    "DE DRIE INVOERROUTES:\n" +
    "- Route 1 is zwaar onderschat: 5 minuten direct na de meeting steekwoorden dumpen levert met AI al fantastische notulen op!\n" +
    "- Route 2 geeft de hoogste precisie en laat je letterlijk terugzoeken.\n" +
    "- Route 3 is heel comfortabel in zakelijke omgevingen, maar vereist dat organisaties cloud-opnames formeel toestaan."
  );

  // =========================================================================
  // DIA 3: Opnemen: Wel of Niet Doen?
  // =========================================================================
  var slide3 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide3.getBackground().setSolidFill(COLOR_BG);
  createTag(slide3, 40, 25, 400, 25, '⚖️ ETHISCH & PRAKTISCH AFWEGEN', COLOR_PURPLE);
  createTitle(slide3, 40, 50, 640, 45, 'Opnemen: Wel of Niet Doen?', 30);
  createSubtitle(slide3, 40, 95, 640, 25, 'Niet elk gesprek leent zich voor een microfoon op tafel');
  
  createCard(slide3, 40, 130, 310, 175, '✅ Wél Opnemen', 
    '• Formele vergaderingen (bestuur, ALV, verantwoording)\n\n' +
    '• Complexe inhoud vol cijfers, specificaties en vaktermen\n\n' +
    '• Wanneer de notulist zelf actief deelneemt aan de discussie',
    COLOR_GREEN
  );
  createCard(slide3, 370, 130, 310, 175, '❌ Niet Opnemen', 
    '• Brainstorms (het "microfooneffect" remt spontaniteit)\n\n' +
    '• Gevoelige gesprekken (HR, conflicten, persoonlijke zaken)\n\n' +
    '• Korte operationele check-ins (overhead weegt niet op)',
    COLOR_ROSE
  );

  createBanner(slide3, 40, 315, 640, 65, '🏆 De Gouden Regel (AVG)', 
    'Vraag ALTIJD vooraf expliciet toestemming aan álle aanwezigen.\nEén "nee" of aarzeling = direct de recorder uit en ouderwets met de hand typen!');

  setNotes(slide3, 
    "ETHIEK & HET MICROFOONEFFECT:\n" +
    "- Wijs op het psychologische effect: zodra de rode opnameknop oplicht, praten mensen voorzichtiger.\n" +
    "- Bij formele bestuursvergaderingen is opnemen een zegen voor de notulist.\n" +
    "- AVG-aspect: audio is een persoonsgegeven! Expliciete toestemming is verplicht."
  );

  // =========================================================================
  // DIA 4: De 'Hybride Methode' (Best Practice)
  // =========================================================================
  var slide4 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide4.getBackground().setSolidFill(COLOR_BG);
  createTag(slide4, 40, 25, 400, 25, '🏆 BEST PRACTICE VOOR PROFESSIONALS', COLOR_GREEN);
  createTitle(slide4, 40, 50, 640, 45, 'De "Hybride Methode"', 30);
  createSubtitle(slide4, 40, 95, 640, 25, 'De perfecte synergie tussen menselijke alertheid en AI-verwerkingskracht');
  
  createCard(slide4, 40, 130, 200, 175, '⏱️ 1. Tijdens het Overleg', 
    '• Schrijf louter tijdstempels en kernkeuzes op (de "markers").\n\n' +
    '• Blijf gefocust meeluisteren in plaats van koortsachtig meepennen.',
    COLOR_BORDER
  );
  createCard(slide4, 260, 130, 200, 175, '🤖 2. Na Afloop met AI', 
    '• Laat het model het transcript structuren en ordenen.\n\n' +
    '• Geef een strak format mee (besluiten, actiepunten, context).',
    COLOR_BORDER
  );
  createCard(slide4, 480, 130, 200, 175, '🔍 3. Gerichte Check', 
    '• Luister met behulp van je markers alleen twijfelpunten terug.\n\n' +
    '• 90% tijdwinst mét 100% inhoudelijke controle.',
    COLOR_CYAN
  );

  createBanner(slide4, 40, 315, 640, 65, '⚠️ Cruciaal uitgangspunt', 
    'Vertrouw nooit blind op een 100% automatisch gegenereerd verslag zonder menselijke naloop.\nJij bent en blijft de eindredacteur!');

  setNotes(slide4, 
    "DE HYBRIDE AANPAK:\n" +
    "- Vroeger was een notulist doodmoe na 2 uur non-stop typen.\n" +
    "- Met de hybride methode ben je aanwezig als volwaardig gesprekspartner en noteer je alleen tijdstempels: bv. [14:22] Akkoord op budget €5.000.\n" +
    "- AI doet vervolgens het zware ordeningswerk."
  );

  // =========================================================================
  // DIA 5: Veilig & Lokaal Transcriberen (Zonder Cloud)
  // =========================================================================
  var slide5 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide5.getBackground().setSolidFill(COLOR_BG);
  createTag(slide5, 40, 25, 400, 25, '🛡️ PRIVACY & OPEN SOURCE', COLOR_CYAN);
  createTitle(slide5, 40, 50, 640, 45, 'Veilig & Lokaal Transcriberen', 30);
  createSubtitle(slide5, 40, 95, 640, 25, 'Audio vertrouwelijk verwerken zonder data naar externe cloudservers te sturen');
  
  createCard(slide5, 40, 130, 200, 175, '🔒 Waarom Lokaal?', 
    '• Audio verlaat je computer nooit.\n\n' +
    '• 100% AVG-compliant & geen risico op datalekken.\n\n' +
    '• De gouden standaard: Whisper (OpenAI opensource model).',
    COLOR_GREEN
  );
  createCard(slide5, 260, 130, 200, 175, '💻 Tools voor Cursisten', 
    '• Mac: MacWhisper (ultrasnel via Apple Silicon / CoreML).\n\n' +
    '• Windows/Linux: Buzz (gratis desktop-app met interface).\n\n' +
    '• Gevorderden: whisper.cpp (lichtgewicht C/C++, geen Python).',
    COLOR_CYAN
  );
  createCard(slide5, 480, 130, 200, 175, '⚖️ Modelgrootte (NL)', 
    '• small: Razendsnel, prima voor heldere alledaagse dialogen.\n\n' +
    '• medium: De ideale sweet spot voor Nederlands; herkent dialecten, vaktermen en nuances.',
    COLOR_AMBER
  );

  createBanner(slide5, 40, 315, 640, 65, '💡 Tip voor de les', 
    'Met lokale transcriptietools kunnen ook gevoelige management- of medische gesprekken veilig worden omgezet naar tekst.');

  setNotes(slide5, 
    "LOKAAL DRAAIEN MET WHISPER:\n" +
    "- Whisper is ontwikkeld door OpenAI maar volledig open-source vrijgegeven.\n" +
    "- Demonstratie MacWhisper of Buzz: sleep een mp3/m4a erin en zie de tekst verschijnen.\n" +
    "- Verschil tussen 'small' en 'medium': leg uit dat 'small' soms struikelt over specifieke Nederlandse jargonwoorden, 'medium' is verbluffend nauwkeurig."
  );

  // =========================================================================
  // DIA 6: Prompting: Vraag om Structuur, Niet om een Samenvatting!
  // =========================================================================
  var slide6 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide6.getBackground().setSolidFill(COLOR_BG);
  createTag(slide6, 40, 25, 400, 25, '✍️ EFFECTIEVE PROMPTS', COLOR_AMBER);
  createTitle(slide6, 40, 50, 640, 45, 'Prompting: Vraag om Structuur!', 30);
  createSubtitle(slide6, 40, 95, 640, 25, 'Voorkom wollige teksten en stuur direct op actiegerichte output');
  
  createCard(slide6, 40, 130, 200, 175, '⚠️ De Valkuil', 
    '"Vat dit transcript samen"\n\n' +
    '❌ Leidt tot vage teksten.\n' +
    '❌ Mist concrete toezeggingen.\n' +
    '❌ Verhoogt de kans op hallucinaties bij onduidelijke passages.',
    COLOR_ROSE
  );
  createCard(slide6, 260, 130, 420, 175, '📋 De 4 Vaste Categorieën in je Prompt', 
    '1. Kern & Doel: Maximaal 3 zinnen over de strekking van het overleg.\n\n' +
    '2. Besluitenlijst: Uitsluitend punten waar expliciet akkoord op is gegeven.\n\n' +
    '3. Actiepunten: Tabel met [Wat] • [Wie] • [Wanneer / Deadline].\n\n' +
    '4. Openstaande Vragen: Onopgeloste kwesties en parkeervak.',
    COLOR_CYAN
  );

  createBanner(slide6, 40, 315, 640, 65, '🛡️ Essentiële Veiligheidsinstructie in je Prompt', 
    '"Verzin geen ontbrekende details of aannames; zet bij onbekende actiehouders of deadlines strikt \'N.t.b.\'."');

  setNotes(slide6, 
    "PROMPT STRUCTUUR:\n" +
    "- Benadruk het verschil tussen een samenvatting (narratief) en notulen (functioneel/juridisch).\n" +
    "- Notulen draaien om BESLUITEN en ACTIES.\n" +
    "- De toevoeging van de veiligheidsinstructie ('Verzin geen details...') voorkomt 95% van alle hallucinaties."
  );

  // =========================================================================
  // DIA 7: De 3 Naloop-Controles (Menselijke Regie)
  // =========================================================================
  var slide7 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide7.getBackground().setSolidFill(COLOR_BG);
  createTag(slide7, 40, 25, 400, 25, '👁️ MENSELIJKE REGIE', COLOR_PURPLE);
  createTitle(slide7, 40, 50, 640, 45, 'De 3 Naloop-Controles', 30);
  createSubtitle(slide7, 40, 95, 640, 25, 'De drie kritieke checks vóórdat je het verslag verstuurt');
  
  createCard(slide7, 40, 130, 200, 175, '📌 1. Besluit vs. Idee', 
    '• Zag de AI een losse brainstorm-suggestie per abuis aan voor een formeel besluit?\n\n' +
    '• Was er daadwerkelijk consensus of slechts instemming van één persoon?',
    COLOR_BORDER
  );
  createCard(slide7, 260, 130, 200, 175, '👤 2. Actiehouder & Tijd', 
    '• Is de taak aan de juiste spreker gekoppeld?\n\n' +
    '• Is de deadline letterlijk uitgesproken of heeft het model zelf een datum bedacht?',
    COLOR_BORDER
  );
  createCard(slide7, 480, 130, 200, 175, '🔐 3. Privacy & Context', 
    '• Verwijder gevoelige namen, privégegevens of irrelevante context.\n\n' +
    '• Schoon het document op vóór opslag of bredere distributie.',
    COLOR_GREEN
  );

  createBanner(slide7, 40, 315, 640, 65, '💡 De stelregel', 
    'AI is een fantastische eerste concept-schrijver, maar een slechte eindverantwoordelijke.\nBlijf altijd zélf de kapitein op het schip.');

  setNotes(slide7, 
    "DE DRIE NALOOP-CONTROLES:\n" +
    "- Loop deze 3 stappen altijd stapsgewijs langs.\n" +
    "- Vooral controle 1 is cruciaal: als iemand zei 'Misschien moeten we het dak renoveren', maakt AI er snel van: 'Besluit: Het dak wordt gerenoveerd.'\n" +
    "- Wijs cursisten erop dat dit de professionele geloofwaardigheid bewaakt."
  );

  // =========================================================================
  // DIA 8: Praktijkopdracht (Hands-on)
  // =========================================================================
  var slide8 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide8.getBackground().setSolidFill(COLOR_BG);
  createTag(slide8, 40, 25, 400, 25, '🛠️ ZELF AAN DE SLAG', COLOR_GREEN);
  createTitle(slide8, 40, 50, 640, 45, 'Praktijkopdracht: Hands-on Notuleren', 30);
  createSubtitle(slide8, 40, 95, 640, 25, 'Doorloop de volledige keten van ruwe invoer naar betrouwbare notulen');
  
  createBanner(slide8, 40, 130, 640, 50, '🎯 De Opdracht', 
    'Neem een kort audiofragment van 2 minuten op (of gebruik de verstrekte oefen-audio / eigen ruwe krabbels).');
  
  createCard(slide8, 40, 190, 200, 180, '🎙️ Stap 1: Transcribeer', 
    '• Haal het audiofragment door MacWhisper, Buzz of whisper.cpp.\n\n' +
    '• Of zet je ruwe steekwoorden klaar in een tekstbestand.',
    COLOR_BORDER
  );
  createCard(slide8, 260, 190, 200, 180, '⚡ Stap 2: Pas Prompt Toe', 
    '• Voer het transcript in een LLM (ChatGPT / Claude / Gemini).\n\n' +
    '• Gebruik het gestructureerde prompt-sjabloon met de 4 categorieën.',
    COLOR_CYAN
  );
  createCard(slide8, 480, 190, 200, 180, '🔍 Stap 3: Verifieer & Fix', 
    '• Voer de 3 Naloop-Controles uit.\n\n' +
    '• Vergelijk met eigen markers en corrigeer eventuele hallucinaties.',
    COLOR_GREEN
  );

  setNotes(slide8, 
    "PRAKTIJKOPDRACHT BEGELEIDING:\n" +
    "- Tijd voor de cursisten: ca. 20 tot 25 minuten.\n" +
    "- Cursisten mogen in tweetallen overleggen of individueel oefenen.\n" +
    "- Loop rond en help met transcriptiesoftware of het aanscherpen van de prompt.\n" +
    "- Plenair afsluiten: vraag wie er een hallucinatie heeft ontdekt en hoe die gecorrigeerd is."
  );
}

// =========================================================================
// HULPFUNCTIES VOOR OPMAAK (Dark-Slate Thema)
// =========================================================================

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

function createCard(slide, left, top, width, height, title, body, borderColor) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#1e293b');
  shape.getBorder().getLineFill().setSolidFill(borderColor || '#334155');
  shape.getBorder().setWeight(1.5);
  
  var text = shape.getText();
  text.setText(title + '\n\n' + body);
  
  var paragraphs = text.getParagraphs();
  if (paragraphs.length > 0) {
    paragraphs[0].getRange().getTextStyle().setForegroundColor('#ffffff').setFontSize(12).setBold(true);
  }
  if (paragraphs.length > 1) {
    var bodyRange = text.getRange(paragraphs[0].getRange().getEndIndex(), text.getLength());
    bodyRange.getTextStyle().setForegroundColor('#cbd5e1').setFontSize(10.5).setBold(false);
  }
}

function createBanner(slide, left, top, width, height, title, body) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#1e293b');
  shape.getBorder().getLineFill().setSolidFill('#38bdf8');
  shape.getBorder().setWeight(1.5);
  
  var text = shape.getText();
  text.setText(title + ': ' + body);
  
  var titleLength = (title + ': ').length;
  text.getRange(0, titleLength).getTextStyle().setForegroundColor('#38bdf8').setFontSize(11.5).setBold(true);
  text.getRange(titleLength, text.getLength()).getTextStyle().setForegroundColor('#cbd5e1').setFontSize(10.5);
}

function setNotes(slide, notesText) {
  try {
    slide.getNotesPage().getSpeakerNotesShape().getText().setText(notesText);
  } catch (e) {
    Logger.log('Kon sprekersnotitie niet instellen: ' + e);
  }
}
