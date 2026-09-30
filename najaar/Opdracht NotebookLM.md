# Opdracht: Strijd der AI-Titanen – Visies op de Toekomst van AI

**Cursus:** Aan de slag met AI  
**Werkvorm:** Zelfstandig of in tweetallen  
**Tool:** [Google NotebookLM](https://notebooklm.google.com/)  
**Geschatte tijdsduur:** 60 - 90 minuten  

---

## 🎯 Leerdoelen
Na afronding van deze opdracht kun je:
1. Een eigen kennisbank (notebook) opzetten met externe bronnen in NotebookLM.
2. Begrijpen hoe brongestuurde AI (grounding / RAG) werkt en hoe je hallucinaties voorkomt.
3. De botsende visies van toonaangevende AI-leiders analyseren, vergelijken en kritisch beoordelen.
4. Inline bronverwijzingen controleren op feitelijkheid en nuance.

---

## 📚 De Bronnen
Je onderzoekt vijf spraakmakende essays en visiedocumenten van sleutelfiguren in de AI-wereld. Deze documenten zijn als kant-en-klare PDF's beschikbaar in de map `bronnen_notebooklm/` (of als één download: `bronnen_notebooklm_bundel.zip`):

1. **Dario Amodei (CEO Anthropic)** – *We Must Pace the Frontier* (september 2026)  
   📄 Bestand: `1_Dario_Amodei_We_Must_Pace_the_Frontier.pdf`  
   🔗 Origineel: [darioamodei.com](https://darioamodei.com/post/we-must-pace-the-frontier)  
   *Focus:* Verantwoord tempo, nationale veiligheid en gecontroleerde schaling.

2. **Bill Gates (Medeoprichter Microsoft / Filantroop)** – *A turbulent AI era and critical choices to make* (augustus 2026)  
   📄 Bestand: `2_Bill_Gates_A_Turbulent_AI_Era.pdf`  
   🔗 Origineel: [gatesnotes.com](https://www.gatesnotes.com/work/make-ai-work-for-everyone/reader/a-turbulent-ai-era-and-critical-choices-to-make)  
   *Focus:* Maatschappelijke impact, ongelijkheid, gezondheid en onderwijs.

3. **Jakub Pachocki (Chief Scientist OpenAI)** – *An Alien Mind* (september 2026)  
   📄 Bestand: `3_Jakub_Pachocki_An_Alien_Mind.pdf`  
   🔗 Origineel: [openai.com](https://openai.com/nl-NL/index/an-alien-mind/)  
   *Focus:* De aard van intelligentie, redeneren en hoe modellen 'denken'.

4. **Sam Altman & Jakub Pachocki (OpenAI)** – *Built to Benefit Everyone: Our Plan* (juni 2026)  
   📄 Bestand: `4_Sam_Altman_Jakub_Pachocki_Built_to_Benefit_Everyone.pdf`  
   🔗 Origineel: [openai.com](https://openai.com/nl-NL/index/built-to-benefit-everyone-our-plan/)  
   *Focus:* Het pad naar AGI, economische herverdeling en wereldwijde baten.

5. **Mark Zuckerberg (CEO Meta)** – *The Future is for Everyone* (augustus 2026)  
   📄 Bestand: `5_Mark_Zuckerberg_The_Future_is_for_Everyone.pdf`  
   🔗 Origineel: [meta.com](https://www.meta.com/thefutureisforeveryone/)  
   *Focus:* Open source als waarborg tegen monopolievorming en gesloten systemen.

---

## 🛠️ Stap 1: Je NotebookLM Kennisbank Opzetten
1. Ga naar [https://notebooklm.google.com/](https://notebooklm.google.com/) en log in met je Google-account.
2. Klik op **+ New Notebook** (Nieuw notitieblok) en geef het de titel: `Onderzoek AI-Titanen`.
3. Voeg de 5 documenten toe:
   * **Aanbevolen methode:** Sleep de 5 PDF-bestanden uit de map `bronnen_notebooklm/` direct in het venster (of klik op **Upload sources** -> **PDF** en selecteer ze). Dit werkt gegarandeerd en voorkomt foutmeldingen van webbeveiliging (Cloudflare).
   * *Alternatief:* Je kunt ook links plakken, maar websites zoals OpenAI en GatesNotes blokkeren automatische crawlers soms met een 403-fout. Gebruik daarom bij voorkeur de PDF's.
4. *Tip:* Hoewel de brondocumenten in het Engels zijn geschreven, kun je in NotebookLM al je vragen gewoon in het **Nederlands** stellen; NotebookLM antwoordt automatisch in vloeiend Nederlands!

---

## 🔍 Stap 2: Analyse & Vergelijking (Prompts)

Gebruik de onderstaande prompts om de documenten gezamenlijk te bevragen.

### Opdracht 2A: De Vergelijkingstabel
Voer de volgende prompt in NotebookLM:

```text
Maak een overzichtelijke markdown-tabel waarin je de visies van de auteurs vergelijkt op basis van:
1. De grootste belofte / kans van AI
2. Het grootste risico of gevaar
3. De aanpak van innovatie (bijv. open source vs. gesloten / versnellen vs. vertragen)
4. De rol van overheden en regulering
```

### Opdracht 2B: Botsende Filosofieën (Deep Dive)
Stel nu gerichte verdiepingsvragen:

* **Open vs. Gesloten:**
  > *"Zet de filosofie van Mark Zuckerberg (Meta) over open source lijnrecht tegenover de visie van Dario Amodei (Anthropic). Waar botsen hun argumenten het scherpst?"*

* **Tempo & Veiligheid:**
  > *"Wat bedoelt Dario Amodei met 'pacing the frontier' en hoe verschilt dit van de roadmap die OpenAI presenteert in 'Built to benefit everyone'?"*

* **De Aard van AI:**
  > *"Wat bedoelt Pachocki als hij AI omschrijft als een 'alien mind', en hoe sluit dat aan bij de pragmatische insteek van Bill Gates?"*

---

## 🕵️‍♂️ Stap 3: De Feiten- en Broncheck
NotebookLM plaatst achter beweringen kleine cijfers (voetnoten). 
1. Klik bij ten minste **twee antwoorden** op de voetnoot.
2. Lees het originele tekstfragment aan de linkerkant.
3. Beoordeel: Heeft NotebookLM de context en nuance van de auteur exact weergegeven, of is er sprake van vereenvoudiging?

---

## 🎧 Stap 4: Creatieve Synthese (Kies één)

Kies **één** van onderstaande werkvormen:

* **Optie 1 (Audio Overview):** Genereer rechtsboven via 'Audio Overview' een Engelse deep dive podcast. Luister naar de eerste 5 minuten en noteer hoe de twee AI-hosts de tegenstellingen samenvatten.
* **Optie 2 (Fictief Debat):** Vraag het notebook:  
  `"Schrijf een dialoog van een fictieve paneldiscussie waarin Sam Altman, Dario Amodei en Mark Zuckerberg met elkaar in debat gaan over de vraag: 'Moeten de krachtigste AI-modellen verplicht open source worden vrijgegeven?'"`

---

## 📝 Inleveren / Afronding
Beantwoord voor jezelf (of lever in via het cursusplatform):
1. **Jouw oordeel:** Met welke leider / organisatie ben je het na dit onderzoek het meest eens, en waarom?
2. **AI-reflectie:** Wat viel je op aan het werken met NotebookLM vergeleken met een standaard chatbot zoals ChatGPT of Claude?
