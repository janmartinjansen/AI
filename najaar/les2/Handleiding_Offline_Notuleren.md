# Handleiding: Slim Notuleren met Offline AI & Meerdere Tools
**Verdiepingsopdracht voor de Liefhebber • Les 2**  
**Cursus:** Aan de slag met AI (MM2704, School 7 Den Helder)  
**Docent:** Jan Martin Jansen  

---

## 🧠 Waarom werken met meerdere tools? ("Voorbij de Chatbot")
Bij een vertrouwelijk **intakegesprek** of een **bestuursvergadering** wil je een geluidsopname liever niet zomaar naar een cloudserver sturen. In deze werkwijze combineer je daarom twee gratis tools:
1. **Tool 1 (100% Offline op je eigen laptop):** Een programma op basis van **Whisper** zet het geluidsbestand op je eigen computer om in tekst — zonder internetverbinding en 100% AVG-veilig.
2. **Tool 2 (De Chatbot):** Je plakt de uitgetikte tekst (zonder gevoelige achternamen) in ChatGPT, Gemini of Copilot met de **4-delige structuurprompt**.

---

## 🛠️ Stap 1: Installeren van het Offline Transcriptie-programma

### 💻 Voor Windows Laptops (Aanbevolen: 'Vibe')
1. **Downloaden:** Ga naar [https://thewh1teagle.github.io/vibe/](https://thewh1teagle.github.io/vibe/) en klik op **Download for Windows**.
2. **Installeren:** Dubbelklik op het gedownloade bestand in je map *Downloads*.
   * *Tip bij de blauwe Windows-melding ("Windows heeft uw pc beschermd"):* Klik op **'Meer informatie'** en daarna op **'Toch uitvoeren'**.
3. **Model kiezen (eenmalig):** Kies bij het opstarten het model **Small** (snel op elke laptop) of **Medium** (extra nauwkeurig voor Nederlandse vaktermen).
4. **Taal instellen:** Zet de taal bij de instellingen op **Dutch / Nederlands**.
5. **Gebruiken:** Klik op **Select File / Bestand kiezen**, selecteer het oefen-audiobestand `oefen_overleg_jubileum.m4a` en klik op **Transcriberen**.
   * *Alternatief voor Windows:* [Buzz](https://github.com/chidiwilliams/buzz/releases).

### 🍏 Voor Apple MacBook ('MacWhisper')
1. Zoek **MacWhisper** in de Mac App Store of download de gratis versie via [https://goodsnooze.gumroad.com/l/macwhisper](https://goodsnooze.gumroad.com/l/macwhisper) (vul `0` in bij het bedrag).
2. Kies eenmalig het model **Small** of **Medium** en zet de taal op **Dutch (Nederlands)**.
3. Sleep het geluidsbestand midden in het venster.

### 📱 Voor Apple iPad ('Speech to Text: Whisper AI')
1. Open de **App Store** op je iPad en zoek naar **'Speech to Text: Whisper AI'**.
2. Download de app gratis op je iPad.
3. Je kunt in de app direct een gesprek live opnemen, óf een audiobestand (zoals `oefen_overleg_jubileum.m4a`) importeren vanuit je bestanden.
4. Laat de app de audio uittikken en kopieer de tekst naar je klembord om in ChatGPT of Gemini te plakken!
   * *Snelle route of Android:* Gebruik direct de kant-en-klare tekst uit `oefen_transcript_jubileum.txt` en ga meteen door naar Stap 2.

---

## ✍️ Stap 2: De 4-Delige Notuleerprompt (met Veiligheidsregel)
Plak de uitgetikte tekst in ChatGPT, Google Gemini of Microsoft Copilot met dit sjabloon:

```text
Je bent een nauwkeurige notulist. Maak van mijn onderstaande gespreksnotities / transcript een overzichtelijk verslag met deze 4 vaste kopjes:
1. KERN & DOEL (Max. 3 zinnen).
2. BESLUITENLIJST (Alleen punten met expliciet akkoord; laat afgewezen proefballonnetjes weg).
3. ACTIEPUNTEN (Tabel met kolommen: Wat | Wie | Deadline).
4. OPENSTAANDE VRAGEN (Wat moet nog worden uitgezocht?).

VEILIGHEIDSREGEL: Verzin geen ontbrekende details; zet bij onbekende actiehouders of datums strikt 'N.t.b.'.

[PLAK HIER JE UITGETIKTE TEKST]
```

---

## 🔍 Stap 3: De 3 Naloop-Controles
Loop het AI-verslag altijd zelf na op deze 3 punten:
1. **Besluit vs. Los Idee:** Is een afgewezen suggestie (zoals het *draaiorgel van € 400,-* in het oefengesprek) niet per ongeluk als besluit genoteerd?
2. **Wie & Wanneer:** Klopt de naam bij het actiepunt en staat bij onbekende actiehouders (zoals de *beamer en microfoon*) netjes **N.t.b.**?
3. **Privacy-check:** Verwijder gevoelige persoonsgegevens vóórdat je het verslag opslaat of verstuurt.
