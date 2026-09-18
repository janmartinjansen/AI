# Handleiding: Cursus Intake & Mail-automatisering

Deze handleiding legt uit hoe de intake-vragenlijst en het bijbehorende Google Apps Script werken voor de cursus **"MM2704 - Aan de slag met AI: ontdek de kracht van slimme tools"** (School 7).

---

## 📦 Wat is er klaargezet?

1. 📄 **[`intake.html`](file:///Users/janmartinjansen/Library/Mobile%20Documents/com~apple~CloudDocs/AI/2026%20najaar/intake.html)**  
   * De stijlvolle, mobielvriendelijke intake-webpagina voor op:  
     `https://janmartinjansen.github.io/AI/najaar/intake.html`
   * Begroet cursisten persoonlijk (*"Welkom Yvonne!"*), bevat de 6 afgestemde vragen en stuurt antwoorden direct door naar jouw Google Sheet.
2. ⚙️ **[`google_apps_script_cursus.js`](file:///Users/janmartinjansen/Library/Mobile%20Documents/com~apple~CloudDocs/AI/2026%20najaar/google_apps_script_cursus.js)**  
   * Het complete automatiseringsscript dat rechtstreeks in je Google Sheet draait.

---

## 🚀 Stappenplan: In 4 stappen alles werkend

### Stap 1: Plak het script in je Google Sheet
1. Open je Google Sheet **"Deelnemerslijst - Aan de slag met AI"** in je browser.
2. Klik in het bovenmenu op **Extensies** (Extensions) → **Apps Script**.
3. Selecteer eventuele standaardtekst in de editor, verwijder deze en plak de inhoud van [`google_apps_script_cursus.js`](file:///Users/janmartinjansen/Library/Mobile%20Documents/com~apple~CloudDocs/AI/2026%20najaar/google_apps_script_cursus.js) erin.
4. Klik op **Opslaan** (💾).

---

### Stap 2: Activeer de Web-app (Verbindt de website met jouw Sheet)
*Dit zorgt ervoor dat de antwoorden van de website direct in jouw Sheet belanden:*
1. Klik in het Apps Script-scherm rechtsboven op de blauwe knop **Implementeren** (Deploy) → **Nieuwe implementatie**.
2. Klik op het tandwieltje ⚙️ naast *Type selecteren* en kies: **Web-app**.
3. Vul in:
   * *Beschrijving:* `Intake Webhook`
   * *Uitvoeren als:* **Mijzelf** (`janmartinjansen@...`)
   * *Wie heeft toegang:* **Iedereen** (*Anyone* — zodat het webformulier antwoorden kan insturen).
4. Klik op **Implementeren** en geef eenmalig toestemming aan Google.
5. Kopieer de getoonde **Web-app URL** (begint met `https://script.google.com/macros/s/.../exec`).
6. Plak deze URL in `intake.html` op regel 624 bij:  
   `const APPS_SCRIPT_WEBAPP_URL = "JOUW_GEKOPIEERDE_URL";`
7. Sla `intake.html` op en commit & push naar GitHub (`janmartinjansen.github.io/AI/najaar/`).

---

### Stap 3: Test eerst met 1 testregel (Aanbevolen!)
1. Voeg in je Google Sheet op **rij 22** even een testregel toe:
   * *Inschrijfnummer:* `TEST-01`
   * *Deelnemer:* `Jansen, Jan Martin`
   * *Voornaam:* `Jan Martin`
   * *E-mailadres:* `jouw.eigen.email@gmail.com`
2. Klik op die rij 22 om hem te selecteren.
3. Klik in het bovenmenu op **`🤖 AI Cursus Menu`** → **`🧪 0. TEST: Maak Concept Mail voor Geselecteerde Rij`**.
4. Het script genereert alleen voor die testrij de link en zet direct een test-conceptmail klaar in jouw Gmail!
5. Open Gmail > Concepten, klik op de link, vul het formulier in op je site en klik op 'Verzenden'.
6. Controleer in je Google Sheet of het nieuwe tabblad **`"Intake Antwoorden"`** is aangemaakt en jouw testantwoorden netjes in de rij staan!

---

### Stap 4: Genereer alle links & concept-mails voor de cursisten
Als de test naar wens is verlopen (je kunt rij 22 nu verwijderen of laten staan):
1. Klik op **`🤖 AI Cursus Menu`** → **`🔗 1. Genereer Persoonlijke Links (Alles)`** (vult kolom F voor alle 13 cursisten).
2. Klik op **`🤖 AI Cursus Menu`** → **`✉️ 2. Zet Concept Mails klaar in Gmail (Alles)`**.
3. Open [Gmail](https://mail.google.com) onder **Concepten**.
4. Bekijk de 13 mails rustig na en klik op **Verzenden** wanneer je wilt!

---

## 📊 Resultaten bekijken
Zodra cursisten het formulier invullen:
* Maakt het script automatisch het tabblad **`"Intake Antwoorden"`** aan in jouw Google Sheet (of klik op menuoptie **`📊 4. Maak / Open Tab "Intake Antwoorden"`**).
* Hier komen alle antwoorden (welk apparaat, ervaring, wensen, motivatie) overzichtelijk per rij binnen!
