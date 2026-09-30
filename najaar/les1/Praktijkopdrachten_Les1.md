# Les 1: Praktijkopdrachten – Aan de slag met Chatbots
**Cursus:** Aan de slag met AI (MM2704, School 7 Den Helder)  
**Docent:** Jan Martin Jansen  
**Vorm:** Zelfstandig of in tweetallen  
**Duur:** ca. 35 - 45 minuten  
**Tools:** ChatGPT, Google Gemini, Microsoft Copilot of Claude  

---

## 🎯 Het Keuzemenu: Kies wat bij jou past!
Tijdens dit praktijkgedeelte hoef je **niet alle opdrachten** te doen. Kies **minimaal 2 van de onderstaande 4 opdrachten** die het beste aansluiten bij jouw interesses of dagelijks werk:

* **Opdracht 1 (Correspondentie):** De RCTK-Formule – Van een emotionele/kale vraag naar een doeltreffende zakelijke brief.
* **Opdracht 2 (Data & Administratie):** Van Rommelige Notities naar Excel & Word – Ongeordende tekst omzetten naar een direct kopieerbare tabel.
* **Opdracht 3 (Schrijven & Redigeren):** De Doelgroep-Switcher – Een taaie ambtelijke tekst herschrijven naar B1-taalniveau en een korte WhatsApp-boodschap.
* **Opdracht 4 (Sparren & Meedenken):** De Kritische Sparringpartner – Laat de AI optreden als 'advocaat van de duivel' om blinde vlekken in een plan bloot te leggen.

---

## ✉️ Opdracht 1: De RCTK-Formule in Actie (A/B-Experiment)
**Doel:** Zelf ervaren hoe dramatisch het verschil is tussen een 'kale zoekvraag' en een gestructureerde prompt opgebouwd uit **Rol, Context, Taak en Kwaliteitseis**.

### Casus: De Onopgeloste CV-storing
Je huurt al drie jaar een appartement in Den Helder. Sinds twee weken vertoont de combiketel storing E04 (geen warm water en koude radiatoren). Je hebt al tweemaal telefonisch contact gehad met de servicelijn van de verhuurder; beide keren werd beloofd dat een monteur zou terugbellen, maar er is niets gebeurd.

### Stap A: De Vaste Valkuil (De kale prompt)
Typ in de chatbot:
```text
Schrijf een boze mail naar mijn verhuurder over mijn kapotte verwarming.
```
*Lees het resultaat kritisch:* Vaak is de toon overdreven theatraal, boos zonder juridische kracht, of doet het aannames die niet kloppen.

### Stap B: De RCTK-Meesterprompt
Typ nu (of pas aan):
```text
[ROL] Je bent een ervaren communicatie-adviseur en consumentenjurist.
[CONTEXT] Ik huur al drie jaar een appartement in Den Helder. Al twee weken vertoont de cv-ketel foutcode E04, waardoor er geen warm water en verwarming is. Ik heb op 16 september en 22 september telefonisch contact gehad met servicemedewerker Karin; beide keren werd een terugbelafspraak binnen 24 uur beloofd, maar er is niets gebeurd.
[TAAK] Schrijf een formele, vriendelijke maar besliste ingebrekestelling per e-mail aan de verhuurder.
[KWALITEITSEISEN] 
- Maximaal 200 woorden.
- Toon: zakelijk, redelijk maar standvastig (geen scheldwoorden).
- Geef een harde deadline van 3 werkdagen voor herstel.
- Noem de eerdere contactmomenten in een overzichtelijke opsomming.
- Sluit af met een constructieve oproep tot snelle actie.
```
*Reflectie:* Zie je hoe de AI direct een bruikbare, professionele tekst oplevert die je zo kunt versturen?

---

## 📊 Opdracht 2: Van Rommelige Notities naar Excel & Word (Tabellen)
**Doel:** Laat de chatbot ongeordende informatie uit een e-mail filteren, categoriseren en omzetten in een tabel die je direct in Excel, Google Sheets of Word kunt plakken.

### De Rommelige Casustekst
Kopieer onderstaand tekstfragment:
```text
Hoi Jan, hier even de stand van zaken rondom onze bijeenkomst van zaterdag 18 oktober in De Kampanje:
Kees heeft al € 45,- betaald voor de catering, maar hij eet vegetarisch. 
Anja declareert € 22,50 voor reiskosten met de auto (benzinebonnetje is aanwezig). 
Piet heeft € 120,- voorgeschoten voor de zaalhuur; de officiële factuur moeten we nog ontvangen van de beheerder. 
Karin kan alleen in de middag aansluiten, heeft geen dieetwensen en moet haar eigen bijdrage van € 15,- nog overmaken. 
Dan hebben we nog Henk: die heeft € 35,- betaald voor het drukwerk van de flyers. 
En let op: er staat nog een borgsom van € 50,- open die contant aan de zaalbeheerder voldaan moet worden bij vertrek.
```

### De Complete Prompt (meteen klaar voor gebruik)
Voer deze complete prompt in (de notities zitten er direct onder geplakt):
```text
Haal alle financiële en organisatorische gegevens uit onderstaande notities en presenteer ze in een overzichtelijke tabel met exact deze kolommen:
1. Naam / Betrokkene
2. Onderwerp / Taak
3. Bedrag (€)
4. Status (Betaald / Nog betalen / Declaratie / Borg)
5. Notities / Dieetwensen

Sorteer de tabel op Bedrag (van hoog naar laag). Bereken onderaan direct het totaalbedrag.

Notities:
Hoi Jan, hier even de stand van zaken rondom onze bijeenkomst van zaterdag 18 oktober in De Kampanje:
Kees heeft al € 45,- betaald voor de catering, maar hij eet vegetarisch. 
Anja declareert € 22,50 voor reiskosten met de auto (benzinebonnetje is aanwezig). 
Piet heeft € 120,- voorgeschoten voor de zaalhuur; de officiële factuur moeten we nog ontvangen van de beheerder. 
Karin kan alleen in de middag aansluiten, heeft geen dieetwensen en moet haar eigen bijdrage van € 15,- nog overmaken. 
Dan hebben we nog Henk: die heeft € 35,- betaald voor het drukwerk van de flyers. 
En let op: er staat nog een borgsom van € 50,- open die contant aan de zaalbeheerder voldaan moet worden bij vertrek.
```

> **💡 Praktijktip voor de les:** Door de instructie én de rommelige notities in één bericht te versturen, voorkom je dat cursisten tussendoor hoeven te knippen en plakken. De AI weet direct wat hij moet doen.

### De Praktijkhandeling: Importeren in Excel of Word
1. **Kopieer de tabel:**
   * In **ChatGPT:** Klik op het 'Kopieer'-icoontje onder het bericht, of selecteer met je muis/vinger de hele tabel en kies Kopiëren.
   * In **Gemini:** Klik rechts onder de tabel direct op de knop **"Exporteren naar Spreadsheets"** (Google Sheets opent vanzelf met alle kolommen!), of kopieer de tabel.
2. **Plakken in Excel / Google Sheets:** Open een leeg rekenblad en druk op `Ctrl+V` (Windows) of `Cmd+V` (Mac). De getallen en teksten komen automatisch in keurige rijen en kolommen te staan!
3. **Plakken in Word:** Plak de selectie in een Word-document; Word herkent automatisch de tabelstructuur en maakt er een opgemaakte Word-tabel van.

---

## 🗣️ Opdracht 3: De Doelgroep- & Toon-Switcher
**Doel:** Ervaren hoe een taalmodel in één seconde kan switchen tussen verschillende registers: van formele beleidstaal naar begrijpelijk Nederlands (taalniveau B1) en een informele chat.

### De Formele Beleidstekst
Kopieer onderstaande tekst (afkomstig uit een gemeentelijk beleidsbesluit):
```text
In het kader van het gemeentelijk Verduurzamings- en Mobiliteitsplan 2026-2030 heeft het college van B&W besloten tot grootschalige sanering en infrastructurele herinrichting van de openbare ruimte in de woonwijk De Schooten. Teneinde de aanleg van een geavanceerd collectief warmtenetwerk te faciliteren, alsmede infiltratiekratten ten behoeve van klimaatadaptieve hemelwaterberging te implementeren, zal gedurende een tijdvak van vier aaneengesloten maanden een algeheel parkeer- en doorgangsverbod van kracht zijn voor gemotoriseerd verkeer. Daarnaast noopt de ondergrondse kabeldichtheid tot het kappen van een zestal volwassen kastanjebomen, hetgeen conform vigerend kapbeleid via een 1-op-1 herplantingsplicht in het daaropvolgende plantseizoen zal worden gecompenseerd.
```

### Stap 1: Naar Begrijpelijk Nederlands (B1 voor een wijkkrant)
Typ onderstaande complete prompt in de chatbot (de beleidstekst staat er al direct onder geplakt):
```text
Herschrijf onderstaande ambtelijke tekst naar een begrijpelijke mededeling voor de lokale wijkkrant op taalniveau B1.
Eisen:
- Gebruik korte, actieve zinnen.
- Geef in maximaal 3 opsommingstekens de belangrijkste gevolgen voor buurtbewoners.
- Vermijd ambtelijk jargon (geen termen als 'implementeren', 'infiltratiekratten' of 'tijdvak').

Tekst:
In het kader van het gemeentelijk Verduurzamings- en Mobiliteitsplan 2026-2030 heeft het college van B&W besloten tot grootschalige sanering en infrastructurele herinrichting van de openbare ruimte in de woonwijk De Schooten. Teneinde de aanleg van een geavanceerd collectief warmtenetwerk te faciliteren, alsmede infiltratiekratten ten behoeve van klimaatadaptieve hemelwaterberging te implementeren, zal gedurende een tijdvak van vier aaneengesloten maanden een algeheel parkeer- en doorgangsverbod van kracht zijn voor gemotoriseerd verkeer. Daarnaast noopt de ondergrondse kabeldichtheid tot het kappen van een zestal volwassen kastanjebomen, hetgeen conform vigerend kapbeleid via een 1-op-1 herplantingsplicht in het daaropvolgende plantseizoen zal worden gecompenseerd.
```

### Stap 2: Naar de Buurtpreventie-WhatsApp
> **💡 Gouden AI-regel (Contextgeheugen):** Blijf in **ditzelfde chatgesprek**! Je hoeft de tekst **niet opnieuw** te plakken; de chatbot onthoudt wat je net besproken hebt.

Typ simpelweg als vervolgvraag:
```text
Herschrijf deze kernboodschap nu voor de buurt-WhatsAppgroep:
- Maximaal 4 regels.
- Informele, vriendelijke en waarschuwende toon.
- Gebruik 2 passende emoji's.
- Zorg dat direct duidelijk is: wanneer start het, wat betekent dit voor parkeren en wat gebeurt er met de bomen?
```

---

## 🧠 Opdracht 4: De Kritische Sparringpartner (Advocaat van de Duivel)
**Doel:** Voorkom dat de AI een 'ja-knikker' is en gebruik het model om blinde vlekken, valkuilen en bezwaren in een plan te ontdekken.

### De Casus (Kies een eigen idee of onderstaand verenigingsvoorstel):
*Voorstel:*  
> *"Ons bestuur overweegt om per 1 januari de papieren verenigingsgids en het clubblad volledig af te schaffen. Alle communicatie, aanmeldingen voor activiteiten en de bardiensten gaan voortaan uitsluitend via een smartphone-app. Dit bespaart ons € 1.800,- per jaar aan druk- en verzendkosten."*

### De Complete Prompt (meteen klaar voor gebruik)
Voer deze prompt in (het voorstel zit er al direct in verwerkt):
```text
Ik leg je een beleidsvoorstel voor van een lokale vereniging met ca. 180 leden (gemiddelde leeftijd 58 jaar):

Voorstel:
Ons verenigingsbestuur overweegt om per 1 januari het papieren clubblad en de papieren contributiebrieven volledig af te schaffen. Alle communicatie, aanmeldingen voor bardiensten en nieuwsberichten verlopen voortaan verplicht en uitsluitend via een mobiele smartphone-app. Dit bespaart ons jaarlijks € 1.800,- aan druk- en portokosten.

Kruip in de huid van een kritisch lid dat hecht aan sociale cohesie en toegankelijkheid voor minder digitaal vaardige leden. 
1. Geef de 3 sterkste inhoudelijke bezwaren tegen dit voorstel. Waar gaat het in de praktijk gegarandeerd mis?
2. Doe vervolgens 2 constructieve concessie-voorstellen waarmee we wél geld besparen, maar zonder leden buiten te sluiten.
```

*Reflectie:* Hoe helpt deze feedback je om je plan vooraf sterker en evenwichtiger te maken?

---

## 🏆 Afronding van het Praktijkgedeelte
Klaar met je twee gekozen opdrachten?
1. Wissel met je buurman/buurvrouw van gedachten: Welke chatbot (ChatGPT, Gemini, Copilot) heeft volgens jou het beste resultaat gegeven?
2. Bewaar een geslaagde prompt in een notitiebestand op je laptop of tablet: dit is het begin van je eigen **persoonlijke prompt-bibliotheek**!
