# Les 3: Praktijkopdrachten – Persoonlijke Assistent, AI-Agenten & Betrouwbaarheid
**Cursus:** Aan de slag met AI (MM2704, School 7 Den Helder)  
**Docent:** Jan Martin Jansen  
**Vorm:** Zelfstandig of in tweetallen (kies 2 van de 4 opdrachten)  
**Apparaten:** Geschikt voor Windows laptop, MacBook én iPad/Tablet  
**Aanbevolen tools:** ChatGPT (gratis), Google Gemini (gratis), Microsoft Copilot of NotebookLM  

---

## 🧭 De Opbouw van Les 3
We beginnen de slotles feestelijk en praktisch:
1. **Deel 1 (Hoofdopdracht voor iedereen):** We bouwen zélf een werkende website over ons favoriete onderwerp en zetten hem binnen 5 seconden gratis online met **Netlify Drop**.
2. **Deel 2 (Verdieping & Assistenten):** We duiken in de wereld van **AI-Agenten** en kiezen daarna 1 of 2 verdiepende opdrachten uit het keuzemenu hieronder!

---

## 🌟 Hoofdopdracht (Deel 1): Jouw Eigen Website over je Favoriete Onderwerp (Live met Netlify Drop!)
**Doelgroep:** Iedereen in de zaal!  
**Doel:** Zelf ervaren hoe laagdrempelig webbouwen is geworden. Je kiest een onderwerp dat je leuk vindt (hobby, vakantie, recepten, stamboom, club), laat AI de code genereren en sleept hem naar Netlify Drop. Binnen 5 seconden ben je live op internet!

### Stap 1: Bedenk je onderwerp & Kopieer de Toverprompt
Bedenk een onderwerp dat je aanspreekt:
* 🌸 **Hobby / Passie:** Vogelspotten in de duinen, tuinieren, natuurfotografie, bridgen of schilderen.
* 🏖️ **Vakantie & Reizen:** Wandelen op Texel, herinneringen aan Italië, kamperen in Frankrijk.
* 🥧 **Recepten & Familie:** Het geheime appeltaart-recept van oma, een familiestamboom of feestpagina.
* ⛵ **Club of Vereniging:** Het buurtkoor, de bridgeclub of de wandelvereniging.

Plak deze prompt in **ChatGPT** of **Google Gemini**:

```text
Maak voor mij een moderne, sfeervolle en complete website in het Nederlands over [VERVANG DIT DOOR JOUW ONDERWERP, bijv: Vogelspotten in de Duinen van Den Helder / Mijn Vakantie op Texel / De Geheime Recepten van Oma / Mijn Tuinier-passie].

Zet ALLES (structuur, vormgeving en interactieve knoppen) in één enkel bestand genaamd index.html:
- Een uitnodigende kop met navigatiebalk.
- Een mooie banner met een pakkende titel en een korte inleiding.
- Drie informatieve kaartjes met leuke tips, verhalen of weetjes over dit onderwerp.
- Een knopje om direct contact op te nemen of een reactie achter te laten.
- Zorg voor een prachtig, rustig kleurenschema dat perfect past bij het onderwerp.
- Zorg dat de website automatisch schaalt voor zowel computers als smartphones (responsive).

Geef mij alleen de complete HTML-code in één codeblok zodat ik die direct kan kopiëren!
```

### Stap 2: Opslaan op je Computer & Lokaal Bewonderen
1. Klik in ChatGPT of Gemini rechtsboven in het codeblok op **"Kopieer code"** (Copy code).
2. Maak een nieuw mapje aan op je computer (bijv. op je Bureaublad of in Documenten) en noem het: **`mijn-website`**.
3. Open **Kladblok** (Windows) of **Teksteditor** (Mac), plak de gekopieerde code erin en sla op als: **`index.html`** *(Let op bij Windows: kies bij 'Opslaan als type' voor 'Alle bestanden (*.*)')*.
4. Dubbelklik op `index.html` in je mapje: je browser opent hem meteen! Werkt zelfs offline zonder internet.

> 📱 **Handige tip voor iPad- en tabletgebruikers:**  
> Werk je op een tablet en wil je niet eerst bestanden downloaden of opslaan? Voeg aan je prompt toe:  
> **"Open het resultaat in Canvas"** (bij ChatGPT of Gemini) of **"Maak een interactieve preview"**.  
> De AI toont je website dan direct interactief in een venster naast je chatvenster!

### Stap 3: Binnen 5 Seconden Gratis Live met Netlify Drop
1. Surf in je browser naar: **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Pak het mapje **`mijn-website`** vast met de muis en sleep het in het grote gestippelde vak op het scherm: *"Drag and drop your site folder here"*.
3. Laat los! Binnen 3 tot 5 seconden verschijnt er een groen vinkje en jouw officiële weblink (bijv. `https://sunny-tulip-a482b.netlify.app` of een hernoemde link zoals `https://janmartinhypo.netlify.app`).
4. Klik op de link: jouw website staat nu écht live op internet! Stuur de link via WhatsApp of mail naar jezelf of je naasten.

### ⭐ Extra Uitdaging A: Maak er een 2-Pagina Website van!
Wil je een echte website met meerdere pagina's? Laat AI twee gekoppelde pagina's maken (`index.html` en `rekenaar.html`) die in hetzelfde mapje staan en via knoppen over en weer linken:

```text
Ik wil een kleine website maken van 2 pagina's in hetzelfde mapje:

1. index.html: de startpagina over [vul hier je onderwerp in] met een warme introductie, 2 fotokaarten en een duidelijke knop naar de tweede pagina: <a href="rekenaar.html">Naar de Rekentool →</a>.
2. rekenaar.html: de tweede pagina met een handig interactief hulpmiddel en een duidelijke knop terug: <a href="index.html">← Terug naar Home</a>.

Zorg voor een rustige moderne opmaak met CSS. Schrijf voor beide pagina's de complete code in twee aparte codeblokken zodat ik ze als losse bestandjes in hetzelfde mapje kan opslaan!
```

### ⚡ Extra Uitdaging B: JavaScript Annuïteiten Hypotheek Berekenaar
Ervaar de rekenkracht van JavaScript zónder server! Deze interactieve tool berekent op basis van een leenbedrag en rentepercentage direct de maandlasten én bouwt een **dynamische aflostabel voor jaar 1 t/m 30**:

```text
Maak voor mij in één enkel HTML-bestand (met ingesloten CSS en JavaScript) een moderne en overzichtelijke Annuïteiten Hypotheek Berekenaar in het Nederlands:

1. Invoervelden:
   - Hypotheekbedrag in euro's (bijv. standaard ingevuld € 250.000).
   - Rentepercentage per jaar (bijv. standaard ingevuld 3.8%).
   - Looptijd in jaren (standaard 30 jaar).

2. Knoppen & Resultaat:
   - Een duidelijke knop 'Bereken Lasten & Aflosschema'.
   - Een samenvatting bovenaan met de bruto maandlast en een indicatieve netto maandlast.

3. Dynamische Tabel (Jaar 1 t/m 30):
   - Toon een tabel met voor elk van de 30 jaren: Jaar, Jaarlijkse Rente, Jaarlijkse Aflossing en Resterende Restschuld aan het eind van het jaar.
   - Zorg voor mooie styling (groene accenten, afwisselende rijkleuren, nette valuta-opmaak met € en komma's).

Zet alles in één enkel compleet codeblok zodat ik het direct kan opslaan als rekenaar.html of index.html!
```
*Tip:* Sla dit bestandje op als `rekenaar.html` in hetzelfde mapje als je `index.html`. Sleep het hele mapje naar Netlify Drop: beide pagina's en de rekentool werken direct live op internet!  
👉 **Bekijk de live website van de docent:** [janmartinhypo.netlify.app](https://janmartinhypo.netlify.app)

> 📱 **Tablet-tip voor de Hypotheekcalculator:**  
> Laat cursisten op een iPad aan hun prompt toevoegen: **"Open het resultaat in Canvas"** (bij ChatGPT of Gemini) of **"Maak een interactieve preview"**.  
> Dan hoef je helemaal niets te downloaden of op te slaan: de interactieve calculator verschijnt direct naast het chatvenster en je kunt meteen met de getallen en sliders spelen!

#### 🚀 Al snel klaar? 3 Leuke Bonus Uitbreidingen (Differentiatie)
Heb je de basisrekenaar al werkend op internet? Je hoeft **niet opnieuw te beginnen**! Plak een van deze vervolgprompts gewoon in **hetzelfde chatgesprek** met je AI:

1. **📊 Bonus 1: Grafiekje toevoegen (Gestapelde Staaf per Jaar)**
```text
Pas mijn hypotheekcalculator aan en voeg een visueel staafgrafiekje toe:
- Voeg in de tabel voor elk van de 30 jaren een extra kolom toe: 'Verhouding Rente / Aflossing'.
- Toon in die kolom een mooie gestapelde horizontale balk (HTML/CSS balk):
  * Het linker deel (oranje) stelt het rente-aandeel van dat jaar voor.
  * Het rechter deel (groen) stelt het aflossingsdeel voor.
- Zorg dat direct opvalt hoe de balk over 30 jaar verschuift van vooral rente naar vrijwel puur aflossing!
Geef de volledige aangepaste HTML/CSS/JS code in één blok.
```

2. **💰 Bonus 2: Extra Aflossen & Looptijdverkorting Berekenen**
```text
Breid mijn hypotheekcalculator uit met de mogelijkheid tot extra aflossen:
1. Voeg een extra invoerveld toe: 'Jaarlijkse extra aflossing (€)' (standaard bijv. € 1.200 of € 0).
2. Bereken en toon direct bovenaan:
   - Hoeveel jaar en maanden de totale looptijd korter wordt (bijv. 'Hypotheek 4 jaar en 3 maanden eerder afgelost!').
   - De totale rentebesparing in euro's (in een opvallend groen blokje).
3. Laat de tabel dynamisch stoppen zodra de restschuld € 0 bereikt.
Geef de volledige aangepaste code in één codeblok.
```

3. **📅 Bonus 3: Toggle Schakelaar tussen Jaar- en Maandoverzicht**
```text
Voeg boven de tabel van mijn hypotheekcalculator een schakelaar (toggle-knoppen) toe:
- Knop 1: [📅 Jaaroverzicht (30 rijen)] (standaard geselecteerd).
- Knop 2: [📆 Maandoverzicht (360 rijen)].
- Als de bezoeker op Maandoverzicht klikt, toont JavaScript direct alle 360 maanden met maandnummer, maandrente, maandaflossing en restschuld.
- Als er op Jaaroverzicht wordt geklikt, schakelt de tabel direct terug naar de jaartotalen.
- Zorg voor een soepele wissel zonder de pagina te herladen.
Geef de volledige aangepaste code in één codeblok.
```

---

## 🗺️ Keuze 1: De Autonome Dagschema- & Reisplanner
**Doelgroep in de zaal:** Iedereen die houdt van dagjes uit, vakanties of strakke planningen (o.a. Leon, Yvonne, Sjaan, Elly).  
**Doel:** Ervaren hoe een AI-assistent niet zomaar een lijstje geeft, maar een realistisch tijdschema opbouwt inclusief afstanden, openingstijden en budget — én direct het hele schema omgooit als er iets tegenzit!

### Stap A: De Opstartprompt (Geef doel én kaders mee!)
Kopieer deze prompt in **ChatGPT** of **Google Gemini**:

```text
Je bent mijn persoonlijke reisassistent. Ik wil een ontspannen dagje uit plannen naar Utrecht met mijn partner. 
Houd rekening met de volgende wensen en kaders:
- We komen om 10:00 uur aan op Utrecht Centraal en vertrekken weer om 17:30 uur.
- We verplaatsen ons uitsluitend te voet vanaf het station.
- We houden van historische monumenten, rustige hofjes en een leuk museum (bijv. Museum Catharijneconvent of Speelklok).
- We willen tussen de middag een gezellige, betaalbare lunchplek (geen fastfood).
- Ons totale budget voor de lunch en drankjes is maximaal € 50 samen.

Maak een overzichtelijk uurschema (van 10:00 tot 17:30 uur) met wandeltijden, bezienswaardigheden en tips. 
Stel mij eerst nog maximaal 2 korte verduidelijkende vragen als je nog iets wilt weten, of geef direct je beste voorstel!
```

### Stap B: De Dynamische Bijsturing (Als de werkelijkheid verandert)
Typ in hetzelfde scherm direct deze vervolgopdracht:

```text
Help, we kijken net op de buienradar: om 13:30 uur gaat het hevig regenen voor minstens anderhalf uur! 
Bovendien blijkt één museum gesloten wegens een verbouwing. 
Pas het uurschema direct aan: zorg dat we tijdens de regenbui overdekt binnen zijn en stel een leuk overdekt alternatief voor, zonder dat het schema in de soep loopt.
```

---

## 🔍 Opdracht 2: De Diepgaande Onderzoeker (Deep Research & Consumententest)
**Doelgroep in de zaal:** Iedereen die betrouwbare informatie zoekt en niet urenlang wil googelen (o.a. Ben, Hilda, Annelies, Kees, Lennard).  
**Doel:** De AI niet één simpele vraag stellen, maar zelfstandig over meerdere actuele bronnen laten zoeken, specificaties laten vergelijken en een overzichtelijke keuzetabel laten bouwen.

### Stap A: De Consumentenvergelijking
Kopieer deze prompt in **ChatGPT** of **Google Gemini**:

```text
Je bent een onafhankelijke consumentenonderzoeker. Ik oriënteer mij op de aankoop van een elektrische stadsfiets (lage instap) voor dagelijks gebruik en tochtjes door de duinen en polder (Noord-Holland).
Vergelijk voor mij 3 populaire, goed verkrijgbare modellen van bekende merken (zoals Gazelle, Batavus of Sparta).

Maak een duidelijke vergelijkingstabel met daarin:
1. Merk en model
2. Type motor (middenmotor) en motorkracht (Nm)
3. Accucapaciteit en realistische actieradius
4. Gewicht van de fiets
5. Richtprijs (inclusief standaard accu)
6. Het grootste voordeel én het belangrijkste minpunt volgens recente fietstesten (zoals ANWB of Consumentenbond)

Sluit af met een kort en eerlijk koopadvies: welk model past het beste bij iemand die comfort en stabiliteit belangrijker vindt dan topsnelheid?
```

### Stap B: De Kritische Factcheck (Betrouwbaarheid!)
Typ daarna:

```text
Op welke bronnen of recente tests heb je deze minpunten en prijzen gebaseerd? Geef 3 concrete tips waar ik bij de proefrit bij de lokale fietsenmaker zelf met mijn eigen ogen op moet letten.
```

---

## 🗣️ Opdracht 3: De Interactieve Taalcoach & Rollenspel-Partner
**Doelgroep in de zaal:** Reisliefhebbers (o.a. Cees, Leon, Elly, Sjaan, Yvonne).  
**Extra leuk op de iPad/Tablet:** Gebruik de **spraakknop (koptelefoontje / microfoontje)** in de app om echt te praten!  
**Doel:** Ervaren hoe een AI-agent in een interactieve rol stapt, geduldig reageert, je uitdaagt en vriendelijk verbetert.

### Stap A: De Franse of Italiaanse Ober
Kopieer deze prompt in **ChatGPT** of **Google Gemini** (kies zelf Frans of Italiaans):

```text
Je bent een vriendelijke, geduldige ober in een gezellige bistro in Frankrijk. Ik ben een Nederlandse toerist en wil in het Frans een tafeltje voor twee vragen, een drankje bestellen en vragen naar de dagschotel.

Spelregels voor ons rollenspel:
1. Reageer steeds in eenvoudig, alledaags Frans met maximaal 2 korte zinnen tegelijk.
2. Wacht na elke zin op mijn reactie.
3. Als ik een taalfout maak, verbeter mij dan heel vriendelijk en kort tussen haakjes in het Nederlands [zoals dit], en speel daarna direct weer verder als de ober.
4. Begin nu: heet mij welkom in je restaurant en vraag waarmee je me van dienst kunt zijn!
```

*(Tip: type of spreek gewoon in je beste steenkolen-Frans terug: "Bonjour monsieur, avez-vous une table pour deux personnes s'il vous plaît?")*

---

## 📚 Opdracht 4: NotebookLM – Jouw Eigen Document-Agent
**Doelgroep in de zaal:** Bestuursleden, verenigingsmensen en iedereen met stapels pdf's of verslagen (o.a. Kees, Ben, Yvonne, Elly).  
**Doel:** Ontdekken hoe je een AI-agent 100% vastpint op je eigen documenten (zonder dat hij fantaseert!), en luisteren naar de verbazingwekkende **AI Audio Podcast**.

### Stap A: Gratis inloggen op NotebookLM
1. Open in je browser: **[notebooklm.google.com](https://notebooklm.google.com)**
2. Log in met je gratis Google-account.
3. Klik op **"Nieuw notitieblok"** (New Notebook).

### Stap B: Een bron toevoegen
* Upload een PDF (bijvoorbeeld een verenigingsverslag, een huurcontract of een artikel), óf plak een link naar een website.
* *(Tip: upload een eigen PDF of document, of gebruik een achtergrondartikel zoals het NRC-artikel van 23 oktober 2026 over softwareagenten)*

### Stap C: Vragen stellen zonder hallucinaties
Typ in het vragenbalkje onderin:
```text
Wat zijn volgens de hoogleraren in deze tekst de 3 grootste risico's van losgeslagen softwareagenten, en welke oplossing stelt Virginia Dignum voor met haar pizza-voorbeeld?
```
*Zie hoe NotebookLM direct citeert met aanklikbare nummertjes die exact naar de juiste alinea in jouw bron springen!*

### Stap D: De Twee-Stemmen Audio Podcast ('Deep Dive')
* Klik rechtsboven in NotebookLM bij *Audio Overview* op **"Generate"** (Genereren).
* De AI-agent maakt nu binnen 2 minuten een natuurlijke Engelse/Nederlandse podcast waarin twee AI-presentatoren jouw document levendig met elkaar bespreken!

---

## 🏛️ Opdracht 5: Bestuur & Vereniging – Subsidie-/Sponsorbrief mét Excel-Begroting
**Doelgroep in de zaal:** Bestuursleden, verenigingsmensen en cijferaars (o.a. Kees, Ben, Yvonne & Elly).  
**Doel:** AI inzetten voor een formele aanvraag met strakke kaders, én direct een tabel genereren die **met 1 klik foutloos in Microsoft Excel of Word** geplakt kan worden (zonder verspringende regels!).

### Stap A: De Sponsor- / Subsidieprompt
Kopieer deze prompt in **ChatGPT** of **Google Gemini**:

```text
Je bent een ervaren fondsenwerver en adviseur voor verenigingen. Onze lokale vereniging in Noord-Holland bestaat binnenkort 50 jaar en wij willen een duurzaam jubileumproject organiseren (bijv. zonnepanelen op het clubgebouw of een opknapbeurt van het buitenterras met nieuw meubilair).

Schrijf voor ons:
1. Een overtuigende, professionele en warme aanvraagbrief (maximaal 1 A4) gericht aan een lokaal fonds of sponsor.
2. Een overzichtelijke begrotingstabel in Markdown-formaat met 4 kolommen: 
   - Post / Omschrijving
   - Aantal / Eenheid
   - Geschatte kosten (€ incl. btw)
   - Toelichting / Prioriteit
Zorg dat de totale begroting uitkomt op exact € 4.500 en sluit af met een totaalrij.

BELANGRIJK: Maak de tabel zo schoon en strak opgemaakt dat ik deze direct kan selecteren en 1-op-1 kan plakken in Microsoft Excel of Google Sheets.
```

---

## 🌐 Opdracht 6: Arie's Vraag – Laat AI een Werkend Interactief Hulpmiddel Bouwen
**Doelgroep in de zaal:** Nieuwsgierigen die willen zien hoe AI niet alleen tekst schrijft, maar complete hulpmiddelen bouwt (o.a. Arie, Lennard, Cees).  
**Doel:** Ervaren hoe een AI-agent in 10 seconden een interactieve webpagina of quizje bouwt met werkende knoppen en scoretelling!

### Stap A: De Interactieve Quiz-prompt
Kopieer deze prompt in **ChatGPT** of **Google Gemini**:

```text
Je bent een interactieve webbouwer. Maak voor mij een leuke, vrolijke 'Noordkop & Den Helder Kennisquiz' van 3 multiplechoicevragen (over bijv. De Lange Jaap, Willemsoord en Texel).

Bouw dit als een complete, zelfstandige interactieve webpagina in HTML en CSS:
- Mooie grote knoppen waar je op kunt klikken.
- Direct feedback als je op een antwoord klikt (groen voor goed, rood voor fout).
- Een automatische scoreteller ("Je hebt 3 van de 3 vragen goed!").
- Een knop "Opnieuw spelen".

Zet alle code in één enkel blok zodat ik het direct kan kopiëren en in een browser kan bekijken!
```

---

## 🏆 Keuzewijzer: Wat kies jij vandaag?
* Ben je gek op reizen en vakantieplanning? 👉 **Kies Opdracht 1**.
* Wil je kritisch consumentenonderzoek doen en feiten vergelijken? 👉 **Kies Opdracht 2**.
* Wil je handsfree talen oefenen met de microfoon? 👉 **Kies Opdracht 3**.
* Wil je documenten analyseren zonder dat de AI fantaseert? 👉 **Kies Opdracht 4**.
* Doe je bestuurswerk of wil je nette tabellen voor Excel? 👉 **Kies Opdracht 5**.
* Wil je zien hoe AI met één klik een werkende interactieve webpagina bouwt? 👉 **Kies Opdracht 6**.
