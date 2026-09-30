/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: AI PRESENTATIE GENERATOR (LES 1 - MET AFBEELDINGEN)
 * =========================================================================
 * Cursus: MM2704 - Aan de slag met AI: ontdek de kracht van slimme tools
 * Docent: Jan Martin Jansen • Locatie: School 7
 * 
 * AUTOMATISCHE AFBEELDINGEN KOPPELING:
 * Dit script haalt automatisch de diagrammen en illustraties op uit de map
 * "les1_afbeeldingen" in jouw Google Drive en plaatst ze op de juiste dia!
 * 
 * HOE TE GEBRUIKEN:
 * 1. Zorg dat de map "les1_afbeeldingen" in je Google Drive staat.
 * 2. Ga in je browser naar je Google Presentatie (of open een nieuwe via https://slides.new).
 * 3. Klik in het bovenmenu op "Extensies" (Extensions) > "Apps Script".
 * 4. Vervang alle code door onderstaande code.
 * 5. Klik op "Opslaan" (💾) en vervolgens op "Uitvoeren" (▶️ Run).
 * 6. Geef eenmalig toestemming (voor toegang tot Slides en Drive om de plaatjes in te voegen).
 * 7. Klaar! Alle 20 dia's worden direct gevuld met strakke teksten, kaarten én afbeeldingen!
 */

function createAILes1Presentation() {
  var presentation = SlidesApp.getActivePresentation();
  
  // Verwijder eventuele bestaande lege standaard dia's
  var existingSlides = presentation.getSlides();
  for (var i = 0; i < existingSlides.length; i++) {
    existingSlides[i].remove();
  }
  
  // Modern Dark-Slate kleurenpalet
  var COLOR_BG = '#0f172a';         // Slate 900 (Achtergrond)
  var COLOR_CYAN = '#38bdf8';       // Cyaan (Techniek)
  var COLOR_PURPLE = '#c084fc';     // Paars (Theorie)
  var COLOR_GREEN = '#34d399';      // Groen (Leren & Praktijk)
  var COLOR_AMBER = '#fbbf24';      // Goud/Amber (Waarschuwingen & Doorbraken)
  var COLOR_ROSE = '#fb7185';       // Zachtrood (Klassieke grenzen)

  // =========================================================================
  // DIA 1: Titelpagina
  // =========================================================================
  var slide1 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide1.getBackground().setSolidFill(COLOR_BG);
  createTag(slide1, 40, 45, 450, 25, '✨ AAN DE SLAG MET AI • LES 1 (DEEL 1)', COLOR_CYAN);
  createTitle(slide1, 40, 75, 640, 90, 'Artificiële Intelligentie', 44);
  createSubtitle(slide1, 40, 165, 640, 50, 'Wat is AI en hoe werkt het écht? • Van wiskundig fundament naar dagelijkse assistent');
  
  createCard(slide1, 40, 240, 200, 120, '🏛️ De Oorsprong', 'Hoe 70 jaar wiskunde leidde tot de huidige doorbraak.');
  createCard(slide1, 260, 240, 200, 120, '🧠 Hoe Werkt Het?', 'Neurale netwerken en grote taalmodellen ontrafeld.');
  createCard(slide1, 480, 240, 200, 120, '🚀 Naar de Praktijk', 'De 3 gouden regels voor effectief en betrouwbaar gebruik.');
  
  setNotes(slide1, 
    "WELKOM & OPENING:\n" +
    "- Welkom allemaal bij de eerste les van 'Aan de slag met AI'!\n" +
    "- De opzet van vandaag: de eerste helft (ca. 40 min) gebruiken we om het mysterie van AI te ontrafelen. Geen moeilijke wiskunde, maar heldere intuïtie over hoe deze technologie werkt.\n" +
    "- De tweede helft van de les gaan we zelf achter de knoppen zitten: hands-on prompten met ChatGPT, Copilot en Gemini.\n" +
    "- Vraag gerust tussendoor als iets onduidelijk is!"
  );

  // =========================================================================
  // DIA 2: Wie ben ik?
  // =========================================================================
  var slide2 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide2.getBackground().setSolidFill(COLOR_BG);
  createTag(slide2, 40, 30, 400, 25, '👨‍🏫 JE DOCENT', COLOR_CYAN);
  createTitle(slide2, 40, 55, 640, 50, 'Wie ben ik?', 34);
  
  createCard(slide2, 40, 115, 370, 115, '🎓 Opleiding & Achtergrond', 
    '• Studie Wiskunde en Natuurkunde (UvA)\n' +
    '• Promotie in de Informatica aan de Radboud Universiteit\n' +
    '• Passie voor complexe technologie vertalen naar de praktijk'
  );
  createCard(slide2, 40, 240, 370, 115, '💼 Werkervaring', 
    '• Philips Research & Hoger Onderwijs (NHL)\n' +
    '• Defensie Maritieme IT & Defensie Academie (NLDA)\n' +
    '• Bestuurslid & docent Helderse Volksuniversiteit'
  );
  insertSlideImage(slide2, 'dia02_jan_martin.jpg', 430, 115, 250, 240);
  
  setNotes(slide2, 
    "DOCENT INTRODUCTIE:\n" +
    "- Even kort iets over mijn eigen achtergrond: opgeleid in wiskunde, natuurkunde en gepromoveerd in informatica.\n" +
    "- Gewerkt bij Philips Research en jarenlang bij Defensie en het hoger onderwijs.\n" +
    "- Ik volg de ontwikkelingen rond AI al vanaf de academische begintijd in de jaren '80. Wat er de afgelopen twee à drie jaar gebeurt, is absoluut uniek."
  );

  // =========================================================================
  // DIA 3: Sciencefiction wordt Werkelijkheid
  // =========================================================================
  var slide3 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide3.getBackground().setSolidFill(COLOR_BG);
  createTag(slide3, 40, 30, 400, 25, '🚀 DE EEUWENOUDE DROOM', COLOR_PURPLE);
  createTitle(slide3, 40, 55, 640, 50, 'Fascinatie voor Denkende Machines', 34);
  
  createCard(slide3, 40, 115, 370, 140, '🏛️ Mythes & Verhalen', 
    '• Oude Grieken: Talos, de mechanische bronzen reus\n\n' +
    '• Archie de man van staal & pratende robots in vroege strips\n\n' +
    '• HAL 9000 (2001 Space Odyssey) & Star Trek boordcomputer'
  );
  createBanner(slide3, 40, 265, 370, 90, '💡 Vroeger toekomstmuziek, nu werkelijkheid', 
    'Wat decennialang pure sciencefiction leek, zit nu gewoon gratis als app in onze broekzak.');
  insertSlideImage(slide3, 'dia03_talos_hal.jpg', 430, 115, 250, 240);
  
  setNotes(slide3, 
    "DE DROOM VAN DE MENSHEID:\n" +
    "- De wens om menselijke intelligentie na te bootsen is niet nieuw; het zit al duizenden jaren in onze verhalen.\n" +
    "- Denk aan Talos uit de Griekse mythologie, of HAL 9000 uit Stanley Kubrick's meesterwerk.\n" +
    "- In Star Trek sprak Captain Kirk tegen de 'Computer', en die gaf direct zinnig antwoord. Nu praten we tegen Gemini of ChatGPT."
  );

  // =========================================================================
  // DIA 4: De Hype van Vandaag
  // =========================================================================
  var slide4 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide4.getBackground().setSolidFill(COLOR_BG);
  createTag(slide4, 40, 30, 400, 25, '⚡ EEN WERELD DIE VERANDERT', COLOR_AMBER);
  createTitle(slide4, 40, 55, 640, 50, 'Wat is er aan de hand?', 34);
  
  createListItem(slide4, 40, 115, 370, 65, '🔥 Explosie van tools', 'ChatGPT, Google Gemini, Copilot, Claude & Perplexity.');
  createListItem(slide4, 40, 190, 370, 65, '🗣️ Gewone mensentaal', 'Geen formules of code meer: typ of spreek gewoon Nederlands.');
  createBanner(slide4, 40, 265, 370, 90, '🤔 Hype of Revolutie?', 
    'Brieven schrijven, stukken samenvatten, beelden maken en vertalen. Hoe kan dit zomaar ineens?');
  insertSlideImage(slide4, 'dia04_ai_hype.jpg', 430, 115, 250, 240);
  
  setNotes(slide4, 
    "DE EXPLOSIE VAN DE LAATSTE JAREN:\n" +
    "- Waarom is AI ineens overal in het nieuws?\n" +
    "- Vroeger moest je programmeren om een computer iets nieuws te laten doen. Nu praat je gewoon tegen een model zoals je tegen een stagiair of collega zou praten.\n" +
    "- De vraag die iedereen bezighoudt: Hoe kan dit zomaar ineens?"
  );

  // =========================================================================
  // DIA 5: Wat is Intelligentie?
  // =========================================================================
  var slide5 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide5.getBackground().setSolidFill(COLOR_BG);
  createTag(slide5, 40, 30, 400, 25, '🧠 INTUÏTIE VS REKENKRACHT', COLOR_PURPLE);
  createTitle(slide5, 40, 55, 640, 50, 'Wat is Intelligentie eigenlijk?', 34);
  
  createCard(slide5, 40, 115, 370, 110, '🔢 Simpel voor pc, moeilijk voor mens', 
    '125.234 × 365.444 = 45.765.918.896\n\n' +
    'Een rekenmachine doet dit in 1 milliseconde foutloos. Mensen vinden dit zonder papier ondoenlijk.'
  );
  createCard(slide5, 40, 235, 370, 120, '🐶 Simpel voor mens, moeilijk voor pc', 
    'Is dit een kat of een hond?\n\n' +
    'Een peuter herkent dit moeiteloos in een fractie van een seconde. Voor traditionele computers was dit decennialang onmogelijk!'
  );
  insertSlideImage(slide5, 'dia05_kat_hond.jpg', 430, 115, 250, 240);
  
  setNotes(slide5, 
    "WAT IS INTELLIGENTIE?\n" +
    "- Vraag aan de zaal: wat vinden jullie moeilijker? Deze vermenigvuldiging uit het hoofd, of een kat herkennen op een korrelige foto?\n" +
    "- Dit heet in de informatica 'Moravec's Paradox': wat rationeel moeilijk lijkt is simpel voor computers, wat voor ons automatisch gaat vereist de zwaarste AI."
  );

  // =========================================================================
  // DIA 6: AI door de Tijdlijn
  // =========================================================================
  var slide6 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide6.getBackground().setSolidFill(COLOR_BG);
  createTag(slide6, 40, 30, 400, 25, '⏳ HISTORISCHE VOGELVLUCHT', COLOR_CYAN);
  createTitle(slide6, 40, 55, 640, 50, '70 Jaar AI in Twee Stromingen', 34);
  
  createCard(slide6, 40, 115, 370, 115, '🏛️ 1950 – 1990: Klassieke AI (Regels)', 
    '• Denken vangen in logische regels: ALS dit, DAN dat\n' +
    '• Schaakcomputers: Deep Blue verslaat Kasparov in 1997\n' +
    '• De bottleneck: Het systeem leert zélf helemaal niets!'
  );
  createCard(slide6, 40, 240, 370, 115, '🧬 Vanaf 1980 / 2000: Neurale AI (Leren)', 
    '• Nabootsing van biologische hersencellen\n' +
    '• Niet programmeren, maar laten leren uit voorbeelden\n' +
    '• Doorbraak vanaf 2012 dankzij snelle GPU-chips en big data'
  );
  insertSlideImage(slide6, 'dia06_kasparov.jpg', 430, 115, 250, 240);
  
  setNotes(slide6, 
    "DE GROTE STROMINGEN:\n" +
    "- Deep Blue rekende 200 miljoen stellingen per seconde uit. Maar alle schaakkennis was er door meesters ingestopt.\n" +
    "- De ommekeer kwam toen wetenschappers zeiden: laten we ophouden met regels verzinnen, laten we de computer zélf laten leren zoals een kind leert."
  );

  // =========================================================================
  // DIA 7: Hoe werken onze Hersenen?
  // =========================================================================
  var slide7 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide7.getBackground().setSolidFill(COLOR_BG);
  createTag(slide7, 40, 30, 400, 25, '🧬 BIOLOGISCHE INSPIRATIE', COLOR_GREEN);
  createTitle(slide7, 40, 55, 640, 50, 'Hoe leren onze Hersenen?', 34);
  
  createListItem(slide7, 40, 115, 370, 65, '🕸️ 86 Miljard Neuronen', 'Verbonden met onze zintuigen en intensief met elkaar.');
  createListItem(slide7, 40, 190, 370, 65, '⚡ Vuren van Impulsen', 'Boven een bepaalde drempel stuurt een neuron een elektrisch signaal door.');
  createBanner(slide7, 40, 265, 370, 90, '🌱 Plasticiteit & Synapsen', 
    'Leren = verbindingen tussen neuronen fysiek versterken of verzwakken door herhaling en ervaring.');
  insertSlideImage(slide7, 'dia07_hersenen.jpg', 430, 115, 250, 240);
  
  setNotes(slide7, 
    "DE BIOLOGISCHE ANALOGIE:\n" +
    "- Kijk hoe een kind leert praten en kijken. Niet uit een regelboek, maar door duizenden voorbeelden en feedback.\n" +
    "- Het brein past ongemerkt zijn interne verbindingen aan. Dát principe wilden we in software nabootsen."
  );

  // =========================================================================
  // DIA 8: Neurale Netwerken in Software
  // =========================================================================
  var slide8 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide8.getBackground().setSolidFill(COLOR_BG);
  createTag(slide8, 40, 30, 400, 25, '💻 MACHINE LEARNING', COLOR_CYAN);
  createTitle(slide8, 40, 55, 640, 50, 'Neurale Netwerken in Software', 34);
  
  createCard(slide8, 40, 115, 370, 130, '⚙️ De Drie Lagen', 
    '• Invoerlaag (Input): pixels van foto of geluidssignaal\n\n' +
    '• Verborgen lagen: ontdekken stap voor stap abstracte patronen\n\n' +
    '• Uitvoerlaag (Output): berekende kans op herkenning of keuze'
  );
  createBanner(slide8, 40, 255, 370, 100, '🔢 Gewichten (Weights): De ziel van het netwerk', 
    'Verbindingen tussen knooppunten hebben getallen (gewichten). Dit bepaalt de signaalsterkte. Het hele netwerk is 100% wiskunde in software!');
  insertSlideImage(slide8, 'dia08_neuraal_netwerk.jpg', 430, 115, 250, 240);
  
  setNotes(slide8, 
    "NEURAAL NETWERK IN SOFTWARE:\n" +
    "- Een neuraal netwerk is geen fysieke robotkop; het is zuivere software en wiskunde.\n" +
    "- Een knooppunt vermenigvuldigt binnenkomende getallen met hun gewichten, telt ze op en geeft het resultaat door.\n" +
    "- De kunst is: hoe krijgen we de júiste gewichten?"
  );

  // =========================================================================
  // DIA 9: Cijfers Herkennen met Regels (PTT)
  // =========================================================================
  var slide9 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide9.getBackground().setSolidFill(COLOR_BG);
  createTag(slide9, 40, 30, 400, 25, '🏛️ HET VERLEDEN (JAREN \'80)', COLOR_ROSE);
  createTitle(slide9, 40, 55, 640, 50, 'Cijfers Herkennen met Regels', 34);
  
  createCard(slide9, 40, 115, 370, 135, '🔍 Handmatig Kenmerken Bepalen', 
    'Het PTT & Postbank onderzoek naar postcodes:\n' +
    '• Eindpunten meten: zit er een punt boven of onder?\n' +
    '• Hol en bol: waar buigen de lijnen?\n' +
    '• Eilanden: gesloten lussen (bij 0 of 8)\n' +
    '• 5.280 kenmerken handmatig geprogrammeerd in tabellen'
  );
  createBanner(slide9, 40, 260, 370, 95, '⚠️ De Bottleneck van Regels', 
    'Schrijft iemand een afwijkende krul, of zit er een koffievlek op de envelop? Dan loopt het regelsysteem direct vast!');
  insertSlideImage(slide9, 'dia09_ptt_kenmerken.jpg', 430, 115, 250, 240);
  
  setNotes(slide9, 
    "HET PTT VOORBEELD:\n" +
    "- In de jaren '80 deed de PTT baanbrekend werk voor postcodes.\n" +
    "- 5.280 regels en kenmerken werden met de hand bedacht!\n" +
    "- Indrukwekkend monnikenwerk, maar vreselijk star: voor elke uitzondering moest er weer een regel bij."
  );

  // =========================================================================
  // DIA 10: Geen Regels, maar Zelf Leren (Neuraal Netwerk)
  // =========================================================================
  var slide10 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide10.getBackground().setSolidFill(COLOR_BG);
  createTag(slide10, 40, 30, 400, 25, '✨ DE MODERNE AANPAK', COLOR_GREEN);
  createTitle(slide10, 40, 55, 640, 50, 'Geen Regels, maar Zelf Leren', 34);
  
  createCard(slide10, 40, 115, 370, 135, '⚙️ De Neurale Aanpak', 
    '• Invoer: 28 × 28 pixels = 784 grijswaarden (getallen 0 t/m 1)\n\n' +
    '• 2 verborgen lagen = circa 13.000 wiskundige gewichten\n\n' +
    '• Uitvoer: 10 scores (voor de cijfers 0 t/m 9)\n\n' +
    '• NUL handmatige regels over lussen of lijnen geprogrammeerd!'
  );
  createBanner(slide10, 40, 260, 370, 95, '💡 Zelf Patronen Ontdekken', 
    'Het netwerk ontdekt door training zelfstandig welke combinaties van pixels bij een 8 of een 3 horen.');
  insertSlideImage(slide10, 'dia10_neuraal_cijfers.jpg', 430, 115, 250, 240);
  
  setNotes(slide10, 
    "DE NEURALE AANPAK:\n" +
    "- We programmeren géén regels over wat een rondje of lijn is.\n" +
    "- We stoppen er puur de 784 grijswaarden in.\n" +
    "- Aan de achterkant hebben we 10 uitgangen (voor 0 t/m 9).\n" +
    "- Hoe weet het netwerk welke uitgang moet oplichten? Dat gebeurt via training!"
  );

  // =========================================================================
  // DIA 11: Hoe leert het netwerk? (Backpropagation)
  // =========================================================================
  var slide11 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide11.getBackground().setSolidFill(COLOR_BG);
  createTag(slide11, 40, 30, 400, 25, '🔄 TRAINING & FEEDBACK', COLOR_CYAN);
  createTitle(slide11, 40, 55, 640, 50, 'Fouten Maken en Bijstellen', 34);
  
  createListItem(slide11, 40, 115, 640, 55, '1. Willekeurige start', 'Alle 13.000 gewichtjes beginnen met willekeurige getallen. Het netwerk gokt maar wat.');
  createListItem(slide11, 40, 175, 640, 55, '2. Voorbeeld aanbieden', 'We voeren een plaatje van een \'8\' in. Het netwerk rekent en voorspelt bijvoorbeeld een \'3\'.');
  createListItem(slide11, 40, 235, 640, 55, '3. Fout berekenen', 'We vergelijken de gok (\'3\') met het juiste antwoord (\'8\'). Er is een meetbaar verschil.');
  createListItem(slide11, 40, 295, 640, 55, '4. Backpropagation (bijstellen)', 'Wiskundig worden alle 13.000 gewichtjes een fractie bijgesteld om de fout te verkleinen. Herhaal tienduizenden keren!');
  
  setNotes(slide11, 
    "BACKPROPAGATION UITGELEGD:\n" +
    "- Dit is het magische recept: Backpropagation.\n" +
    "- Het netwerk begint dom en gokt.\n" +
    "- Elke keer dat het ernaast zit, rekenen we wiskundig uit welke gewichten bijgesteld moeten worden.\n" +
    "- Na tienduizenden voorbeelden herkent het netwerk handschriften feilloos."
  );

  // =========================================================================
  // DIA 12: De Evolutie: Van Cijfers naar Spraak (1990–2015)
  // =========================================================================
  var slide12 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide12.getBackground().setSolidFill(COLOR_BG);
  createTag(slide12, 40, 30, 400, 25, '📈 DE TUSSENSTAPPEN', COLOR_CYAN);
  createTitle(slide12, 40, 55, 640, 50, 'Grotere Modellen & Snellere Chips', 34);
  
  createCard(slide12, 40, 115, 370, 240, '📈 25 Jaar Vooruitgang', 
    '• Jaren \'90: Handschriftherkenning op post en cheques\n\n' +
    '• Jaren 2000: Kentekenherkenning (ANPR), gezichten in camera\'s, ziektes in gewassen\n\n' +
    '• Jaren 2010: Deep Learning (GPU-chips), vloeiende spraakherkenning (Siri, Alexa, Google Assistent)\n\n' +
    '• Maar menselijke taal écht begrijpen bleef een enorm obstakel...'
  );
  insertSlideImage(slide12, 'dia12_evolutie.jpg', 430, 115, 250, 240);
  
  setNotes(slide12, 
    "DE TUSSENSTAPPEN:\n" +
    "- Het principe van cijferherkennen werd op steeds grotere schaal toegepast.\n" +
    "- Eerst gezichten en kentekens, daarna gesproken geluid.\n" +
    "- Maar het échte begrijpen van complexe taal bleef een enorm struikelblok."
  );

  // =========================================================================
  // DIA 13: De Stap naar Menselijke Taal (Transformer)
  // =========================================================================
  var slide13 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide13.getBackground().setSolidFill(COLOR_BG);
  createTag(slide13, 40, 30, 400, 25, '🚀 DE GROTE DOORBRAAK (2017)', COLOR_PURPLE);
  createTitle(slide13, 40, 55, 640, 50, 'De Stap naar Menselijke Taal', 34);
  
  createCard(slide13, 40, 115, 370, 130, '🧩 Het Probleem van Context', 
    'Woorden veranderen van betekenis door hun omgeving:\n' +
    '• "Hij ging op de bank zitten." (meubel)\n' +
    '• "Hij zette zijn geld op de bank." (financieel)\n\n' +
    'Oude computers lazen woord voor woord en vergaten het begin van de zin.'
  );
  createBanner(slide13, 40, 255, 370, 100, '⚡ De Transformer (Google, 2017)', 
    'Bekijkt via een Aandachtsmechanisme (Self-Attention) alle woorden tegelijk. De motor achter ChatGPT, Gemini en Claude!');
  insertSlideImage(slide13, 'dia13_transformer.jpg', 430, 115, 250, 240);
  
  setNotes(slide13, 
    "DE REVOLUTIE VAN DE TRANSFORMER:\n" +
    "- Waarom kon vertaalsoftware vroeger zulke kromme zinnen maken, en nu ineens vloeiend Nederlands schrijven?\n" +
    "- Dat komt door de Transformer (Google, 2017).\n" +
    "- Het model kijkt niet woord voor woord, maar ziet het hele document in één keer en weegt alle relaties af."
  );

  // =========================================================================
  // DIA 14: Hoe traint een Groot Taalmodel?
  // =========================================================================
  var slide14 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide14.getBackground().setSolidFill(COLOR_BG);
  createTag(slide14, 40, 30, 400, 25, '📚 HET LEERPROCES', COLOR_CYAN);
  createTitle(slide14, 40, 55, 640, 50, 'Hoe traint een Groot Taalmodel?', 34);
  
  createCard(slide14, 40, 115, 370, 130, '🌐 Het Hele Internet & Next-Token', 
    '• Getraind op petabytes aan tekst: boeken, artikelen, Wikipedia\n\n' +
    '• Next-Token Prediction: geef 10 woorden, voorspel woord 11\n\n' +
    '• "De hoofdstad van Frankrijk is..." -> [Parijs]'
  );
  createBanner(slide14, 40, 255, 370, 100, '📐 Betekenis als Coördinaten (Vectoren)', 
    'Woorden worden getallenreeksen in een ruimte met duizenden dimensies. Verwante concepten clusteren wiskundig samen: Koning - Man + Vrouw ≈ Koningin.');
  insertSlideImage(slide14, 'dia14_training.jpg', 430, 115, 250, 240);
  
  setNotes(slide14, 
    "HOE EEN LLM WERKT:\n" +
    "- In de basis voorspelt een LLM het meest waarschijnlijke volgende woord.\n" +
    "- Omdat het getraind is op vrijwel alle kennis van het internet, levert dat verbluffend intelligente antwoorden op.\n" +
    "- Het leert betekenis via wiskundige vectoren."
  );

  // =========================================================================
  // DIA 15: Cruciaal Inzicht: AI is GÉÉN Database!
  // =========================================================================
  var slide15 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide15.getBackground().setSolidFill(COLOR_BG);
  createTag(slide15, 40, 30, 400, 25, '⚠️ HET BELANGRIJKSTE INZICHT', COLOR_AMBER);
  createTitle(slide15, 40, 55, 640, 50, 'AI is GÉÉN Database met Feiten!', 34);
  
  createCard(slide15, 40, 115, 370, 135, '❌ Geen Encyclopedie, maar Kansberekening', 
    '• AI zoekt NIET in een database met opgeslagen waarheden\n\n' +
    '• Het is een hyperkrachtige waarschijnlijkheidsmachine\n\n' +
    '• Het model genereert wat qua taalpatronen logisch klinkt'
  );
  createBanner(slide15, 40, 260, 370, 95, '🚨 Het gevaar van Hallucinaties', 
    'Weet de AI iets niet? Dan geeft het zelden toe dat het het niet weet. Het model verzint met vol zelfvertrouwen een overtuigend, maar onwaar antwoord!');
  insertSlideImage(slide15, 'dia15_vectoren.jpg', 430, 115, 250, 240);
  
  setNotes(slide15, 
    "HET BELANGRIJKSTE INZICHT VOOR DE CURSIST:\n" +
    "- AI zoekt niet in een archiefkast met feiten.\n" +
    "- Het weet niet wat waarheid is; het weet alleen wat taalkundig aannemelijk klinkt.\n" +
    "- Daarom hallucineert AI soms. Blijf belangrijke feiten altijd zelf verifiëren!"
  );

  // =========================================================================
  // DIA 16: Van Ruw Model naar Vriendelijke Assistent
  // =========================================================================
  var slide16 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide16.getBackground().setSolidFill(COLOR_BG);
  createTag(slide16, 40, 30, 400, 25, '🤝 OPVOEDING & VEILIGHEID', COLOR_GREEN);
  createTitle(slide16, 40, 55, 640, 50, 'Hoe GPT ChatGPT Werd', 34);
  
  createCard(slide16, 40, 115, 370, 240, '👨‍🏫 Twee Fasen van Training', 
    '• Stap 1: Pre-training (Het ruwe model)\n' +
    '  Heeft het hele internet gelezen. Kan zinnen afmaken, maar is onbehouwen, chaotisch of onbeleefd.\n\n' +
    '• Stap 2: Fine-Tuning met Mensen (RLHF)\n' +
    '  Menselijke trainers belonen behulpzame, beleefde en veilige antwoorden.\n\n' +
    '• Zo verandert een tekstvoorspeller in een prettige gesprekspartner: ChatGPT, Copilot of Gemini.'
  );
  insertSlideImage(slide16, 'dia16_rlhf.jpg', 430, 115, 250, 240);
  
  setNotes(slide16, 
    "DE OPVOEDING VAN DE AI (RLHF):\n" +
    "- Waarom praat ChatGPT zo vriendelijk tegen je?\n" +
    "- Dat komt door stap 2: Fine-Tuning met Reinforcement Learning from Human Feedback.\n" +
    "- Daarmee is het ruwe model 'opgevoed' tot een behulpzame assistent."
  );

  // =========================================================================
  // DIA 17: Moderne AI Vandaag: Kijken & Redeneren
  // =========================================================================
  var slide17 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide17.getBackground().setSolidFill(COLOR_BG);
  createTag(slide17, 40, 30, 400, 25, '⚡ DE NIEUWSTE ONTWIKKELINGEN', COLOR_CYAN);
  createTitle(slide17, 40, 55, 640, 50, 'Verder dan Alleen Woordjes Typen', 34);
  
  createCard(slide17, 40, 115, 370, 240, '👁️ Kijken, Luisteren & Redeneren', 
    '• Multimodaal (Vision & Audio)\n' +
    '  Tegelijk getraind op tekst, foto\'s, video en stemmen. Maak een foto van een meterkast en krijg direct mondeling advies.\n\n' +
    '• Redeneermodellen (Reasoning)\n' +
    '  Modellen zoals OpenAI o1 en DeepSeek-R1 typen niet direct, maar \'denken eerst na\' via interne tussenstappen (Chain-of-Thought) voor complexe logica.'
  );
  insertSlideImage(slide17, 'dia17_multimodaal.jpg', 430, 115, 250, 240);
  
  setNotes(slide17, 
    "MULTIMODAAL & REDENEREN:\n" +
    "- De ontwikkelingen staan niet stil.\n" +
    "- We kunnen nu foto's uploaden en live praten.\n" +
    "- En de allernieuwste modellen controleren eerst hun eigen tussenstappen voor wiskunde en logica."
  );

  // =========================================================================
  // DIA 18: Wetenschappelijke Mijlpalen
  // =========================================================================
  var slide18 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide18.getBackground().setSolidFill(COLOR_BG);
  createTag(slide18, 40, 30, 400, 25, '🏆 MEER DAN EEN CHATBOT', COLOR_AMBER);
  createTitle(slide18, 40, 55, 640, 50, 'Van Spelletjes naar Levensredders', 34);
  
  createCard(slide18, 40, 115, 370, 115, '♟️ AlphaGo & AlphaZero (DeepMind)', 
    '• Beheersten Go en schaken door puur tegen zichzelf te spelen\n' +
    '• Versloeg menselijke wereldkampioenen na slechts 4 uur trainen\n' +
    '• Garry Kasparov: "Buitenaards intuïtieve manier van schaken"'
  );
  createCard(slide18, 40, 240, 370, 115, '🧬 AlphaFold (Nobelprijs Scheikunde 2024)', 
    '• Loste het 50 jaar oude biologische "eiwitvouwraadsel" op\n' +
    '• Voorspelde de 3D-structuur van 200 miljoen eiwitten\n' +
    '• Essentieel voor medicijnontwikkeling tegen kanker en ziektes'
  );
  insertSlideImage(slide18, 'dia18_alphafold.jpg', 430, 115, 250, 240);
  
  setNotes(slide18, 
    "DE GROTE WETENSCHAPPELIJKE DOORBRAKEN:\n" +
    "- AI is meer dan een leuke chatbot.\n" +
    "- Met AlphaFold ontrafelde DeepMind een van de grootste mysteries uit de biologie.\n" +
    "- Wat wetenschappers decennia kostte, berekent AI nu in minuten. Terecht bekroond met de Nobelprijs in 2024!"
  );

  // =========================================================================
  // DIA 19: De 3 Gouden Regels voor de Praktijk
  // =========================================================================
  var slide19 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide19.getBackground().setSolidFill(COLOR_BG);
  createTag(slide19, 40, 30, 400, 25, '🎯 DE BRUG NAAR VANDAAG', COLOR_GREEN);
  createTitle(slide19, 40, 55, 640, 50, '3 Gouden Regels voor de Praktijk', 34);
  
  createCard(slide19, 40, 115, 200, 225, '1️⃣ Verifieer Altijd', 
    '• Vertrouw nooit blind op feiten of bronnen.\n\n' +
    '• AI is geen waarheidsmachine, maar een patroongenerator.\n\n' +
    '• Controleer jaartallen, namen en citaten altijd zelf.'
  );
  createCard(slide19, 260, 115, 200, 225, '2️⃣ Context is Koning', 
    '• Hoe vager de vraag, hoe saaier het antwoord.\n\n' +
    '• Geef een duidelijke rol mee (Persona: "Reageer als ervaren redacteur").\n\n' +
    '• Noem doelgroep, gewenste toon en randvoorwaarden.'
  );
  createCard(slide19, 480, 115, 200, 225, '3️⃣ Jij bent Regisseur', 
    '• AI levert denksnelheid, variaties en ruwe concepten.\n\n' +
    '• Jij bewaakt het eindresultaat, de menselijke toon en de verantwoordelijkheid.\n\n' +
    '• Zie AI als je supersnelle stagiair!'
  );
  
  setNotes(slide19, 
    "DE 3 GOUDEN REGELS:\n" +
    "- Hiermee slaan we de brug naar het praktische deel van vandaag.\n" +
    "- Regel 1: Controleer de feiten.\n" +
    "- Regel 2: Context is koning. Een goede prompt maakt het verschil tussen een standaardtekst en een meesterwerk.\n" +
    "- Regel 3: Jij bent en blijft de regisseur. AI doet het voorbereidende werk, jij hakt de knopen door."
  );

  // =========================================================================
  // DIA 20: Laptops Open: Aan de Slag!
  // =========================================================================
  var slide20 = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide20.getBackground().setSolidFill(COLOR_BG);
  createTag(slide20, 40, 30, 400, 25, '💻 DEEL 2 VAN DE LES', COLOR_CYAN);
  createTitle(slide20, 40, 55, 640, 50, 'Laptops Open: Aan de Slag!', 34);
  
  createListItem(slide20, 40, 115, 640, 60, '✍️ Slim Schrijven & Herschrijven', 'Een stroeve formele brief omzetten naar een vriendelijke, heldere e-mail in jouw eigen stijl.');
  createListItem(slide20, 40, 185, 640, 60, '📑 Informatie Temmen', 'Een taai rapport of lang artikel invoeren en in seconden een scherpe samenvatting van 3 punten krijgen.');
  createListItem(slide20, 40, 255, 640, 60, '🎯 Prompt-technieken in de Praktijk', 'Experimenteren met verschillende Persona\'s, context en vervolgvragen (doorvragen).');
  
  createBanner(slide20, 40, 325, 640, 55, '🚀 Start je favoriete AI-tool (ChatGPT, Copilot of Gemini)', 
    'Klap je laptop open, open je browser en laten we beginnen met de eerste oefening!');
  
  setNotes(slide20, 
    "OVERGANG NAAR HANDS-ON:\n" +
    "- Tijd om de theorie achter ons te laten en het zelf te gaan ervaren!\n" +
    "- Iedereen mag de laptop of tablet openklappen.\n" +
    "- Ga naar chatgpt.com, gemini.google.com of copilot.microsoft.com.\n" +
    "- We beginnen rustig met oefening 1 op het scherm."
  );

  Logger.log('AI Les 1 Presentatie (20 dia\'s) succesvol gegenereerd met teksten, afbeeldingen en notities!');
}

// =========================================================================
// GOOGLE DRIVE AFBEELDINGEN KOPPELING
// =========================================================================

var _driveFolderCache = null;

function getDriveFolder() {
  if (_driveFolderCache !== null) return _driveFolderCache;
  try {
    var folders = DriveApp.getFoldersByName('les1_afbeeldingen');
    if (folders.hasNext()) {
      _driveFolderCache = folders.next();
      Logger.log('Google Drive map "les1_afbeeldingen" succesvol gevonden!');
      return _driveFolderCache;
    }
    Logger.log('WAARSCHUWING: Map "les1_afbeeldingen" niet gevonden in Google Drive.');
  } catch (e) {
    Logger.log('Fout bij zoeken naar map "les1_afbeeldingen": ' + e);
  }
  _driveFolderCache = false;
  return null;
}

function insertSlideImage(slide, filename, left, top, width, height) {
  // 1. Maak een stijlvol donker kader voor de afbeelding
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
      // Probeer alternatief met .png als .jpg niet direct gevonden wordt
      var altName = filename.replace('.jpg', '.png');
      var files2 = folder.getFilesByName(altName);
      if (files2.hasNext()) file = files2.next();
    }
    
    if (file) {
      var blob = file.getBlob();
      var pad = 8;
      slide.insertImage(blob, left + pad, top + pad, width - (pad * 2), height - (pad * 2));
    } else {
      Logger.log('Afbeelding "' + filename + '" niet gevonden in map les1_afbeeldingen.');
    }
  } catch (e) {
    Logger.log('Kon afbeelding "' + filename + '" niet invoegen: ' + e);
  }
}

// =========================================================================
// HULPFUNCTIES VOOR OPMAAK
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
  sub.getText().getTextStyle().setForegroundColor('#94a3b8').setFontSize(14);
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

function createListItem(slide, left, top, width, height, title, body) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, width, height);
  shape.getFill().setSolidFill('#1e293b');
  shape.getBorder().getLineFill().setSolidFill('#334155');
  shape.getBorder().setWeight(1);
  
  var text = shape.getText();
  text.setText(title + ': ' + body);
  
  var titleLength = (title + ': ').length;
  text.getRange(0, titleLength).getTextStyle().setForegroundColor('#ffffff').setFontSize(13).setBold(true);
  text.getRange(titleLength, text.getLength()).getTextStyle().setForegroundColor('#cbd5e1').setFontSize(12);
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
