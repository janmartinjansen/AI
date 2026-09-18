# Les 1 (Deel 1): Wat is AI écht?
### Geschiedenis, werking van neurale netwerken & grote taalmodellen (LLM's)
**Docent:** Jan Martin Jansen  
**Doel:** Een toegankelijke, inspirerende introductie van 15 à 20 minuten aan de start van de cursus. Het ontkracht de mythe van 'magie' en legt het fundament voor effectief prompten en kritisch gebruik.

---

## 🎯 De Rode Draad & Kernboodschap

> ### De Kernstelling:
> **AI is geen toverdoos of bewuste machine, maar de wiskundige evolutie van ideeën die al in de jaren '50 ontstonden.**  
> Het fundamentele verschil met traditionele computers: **AI wordt niet geprogrammeerd met menselijke regels, maar leert zelf patronen herkennen uit gigantische hoeveelheden data.**

```
[ Jaren '50 - '90 ]        [ Jaren '80 - 2012 ]        [ 2017 - 2023 ]             [ 2024 - 2026 ]
  Klassieke AI               Neurale Netwerken           De LLM Revolutie            Redeneren & Multimodaal
  (Regels & Grammatica)      (Leren van Data)            (Transformers & GPT)        (o1, DeepSeek, Nobelprijzen)
```

---

## 🏛️ Hoofdstuk 1: De Illusie van de Regels (Klassieke AI, 1950–1990)

### 1.1 Het oorspronkelijke idee: Alles in regels vangen
* Rond de geboorte van de computer (Alan Turing, Dartmouth-conferentie 1956) dachten wetenschappers dat menselijk denken gelijkstond aan formele logica.
* De gedachte was: *"Als we alle grammaticaregels en feiten van de wereld in een programma uitschrijven (`ALS... DAN...`), hebben we binnen tien jaar een denkende machine."*

### 1.2 Het succes bij gesloten systemen (Bordspellen)
* Bij spellen met harde, vaste regels werkte dit fantastisch:
  * Boter-kaas-en-eieren, dammen en schaken (het *Minimax-algoritme*).
  * In **1997** versloeg de computer **IBM Deep Blue** de regerend wereldkampioen Garry Kasparov door 200 miljoen stellingen per seconde vooruit te rekenen.
* **De bottleneck:** Deep Blue was nog steeds een pure rekenmachine. Alle schaakkennis en waarderingsfuncties waren er door menselijke schaakgrootmeesters en programmeurs expliciet in gestopt. Het systeem kon niet zélf leren.

### 1.3 Waarom de regel-aanpak strandde bij taal en waarneming
* In de jaren '80 en '90 probeerden techbedrijven (zoals het bekende *Philips Rosetta*-vertaalproject) talen te vertalen met enorme digitale woordenboeken en ontleedgrammatica's.
* **Waarom dit faalde:**
  * **Ambiguïteit:** Woorden en zinnen hebben meerdere betekenissen afhankelijk van context:
    * *"De man lichtte de bank op."* (Financiële fraude of een meubelstuk optillen?)
    * *"Zij zagen het meisje met de kijker."* (Wie heeft de verrekijker vast?)
  * **Eindeloze uitzonderingen:** Taal en beelden laten zich niet vangen in een sluitend regelsysteem. Voor elke grammaticaregel (zoals *'t kofschip*) zijn er tientallen uitzonderingen en contextuele nuances.

---

## 🧬 Hoofdstuk 2: De Biologische Ommekeer – Leren van Data

### 2.1 Hoe leert een mens?
* Een klein kind leert een hond of kat niet herkennen aan de hand van een biologisch regelboek met oordimensies en pootlengtes.
* Een kind leert doordat ouders duizenden keren voorbeelden aanwijzen: *"Kijk, een poes!"* of *"Nee, dat is een hondje."* Het brein past onbewust zijn interne verbindingen aan.

### 2.2 Het Wiskundig Neuraal Netwerk
* Geïnspireerd op biologische hersencellen (**neuronen**):
  * Een neuraal netwerk bestaat uit lagen van wiskundige knooppunten die met elkaar zijn verbonden via **gewichten** (getallen).
  * **Het leerproces (Training):**
    1. **Blanco start:** Het netwerk begint met willekeurige gewichten (het gokt maar wat).
    2. **Voorbeeld invoeren:** We voeren een afbeelding in (bv. een handgeschreven cijfer '8' van $28 \times 28$ pixels).
    3. **Fout berekenen:** Het netwerk voorspelt een '3'. We vergelijken dit met het juiste label ('8').
    4. **Backpropagation:** Via wiskundige optimalisatie (*de kettingregel, mede ontwikkeld door Geoffrey Hinton in 1986*) worden alle miljoenen gewichtjes een fractie bijgesteld zodat de fout kleiner wordt.
    5. **Herhaling:** Na miljoenen voorbeelden 'herkent' het netwerk zelfstandig de essentie van een '8', een kat of een handschrift, zónder dat iemand de regels heeft geprogrammeerd.

---

## 🚀 Hoofdstuk 3: De Grote Sprong – Transformers & LLM's (2017–2023)

### 3.1 Waarom lukte de grote doorbraak pas recent?
De explosie van AI rond 2022/2023 werd mogelijk door de samenloop van drie factoren:
1. **Gigantische Data:** Het volledige gedigitaliseerde internet (Wikipedia, boeken, wetenschappelijke papers, nieuws, fora).
2. **Rekenkracht (GPU's & TPU's):** Serverparken die miljarden matrixvermenigvuldigingen tegelijkertijd uitvoeren.
3. **De Transformer-architectuur (Google Brain, 2017 – *"Attention Is All You Need"*):**  
   Oude netwerken lazen tekst woord voor woord en vergaten het begin van de zin. De *Transformer* kan via een **aandachtsmechanisme (Self-Attention)** verbanden leggen tussen alle woorden in een document tegelijk.

### 3.2 Hoe werkt een Large Language Model (LLM) echt?
* **Next-Token Prediction (Het meest waarschijnlijke volgende woord voorspellen):**  
  In de basis doet een taalmodel één ding extreem goed: op basis van alle voorafgaande tekst voorspellen wat de meest logische volgende lettergreep/woord is.
* **Betekenis als Coördinaten (Embeddings):**  
  Woorden worden omgezet in getallenreeksen (vectoren) in een ruimte met duizenden dimensies. 
  * Zoals de filosoof **Ludwig Wittgenstein** al schreef: *"De betekenis van een woord is het gebruik ervan in de taal."*
  * Concepten die bij elkaar horen clusteren wiskundig samen. Zo geldt letterlijk: $\text{Koning} - \text{Man} + \text{Vrouw} \approx \text{Koningin}$.

### 3.3 De Twee Trainingsfasen (Cruciaal voor de cursist)
```
[ Fase 1: Pre-training ]                          [ Fase 2: Fine-Tuning & RLHF ]
Ruwe tekst van het hele internet        --->      Menselijke instructies & dialoog
Leert taal, grammatica & feitenkennis            Leert behulpzaam, beleefd & veilig antwoorden
(Kosten: tientallen miljoenen euro's)             (Maakt er ChatGPT/Gemini/Copilot van)
```
1. **Pre-training:** Het model leest onbewaakt petabytes aan ruwe tekst. Het leert hoe taal in elkaar zit, maar is nog onbehouwen (het maakt zinnen gewoon af zoals het internet dat zou doen).
2. **Fine-tuning & RLHF (Reinforcement Learning from Human Feedback):** Menselijke trainers beoordelen antwoorden en sturen het model bij om een behulpzame, empathische en veilige gesprekspartner te worden.

---

## ⚡ Hoofdstuk 4: De Nieuwste Ontwikkelingen (2024–2026)

### 4.1 Van alleen tekst naar Multimodaliteit (GPT-4o, Gemini)
* Taalmodellen zijn niet langer beperkt tot letters. Ze worden vanaf de basis getraind op **tekst, spraak, foto's en video tegelijk**. Hierdoor kunnen ze een foto van een meterkast 'zien' en direct mondeling uitleggen welke schakelaar om moet.

### 4.2 Redeneermodellen: Eerst 'denken', dan antwoorden (OpenAI o1/o3 & DeepSeek-R1)
* Waar klassieke LLM's direct beginnen te typen, gebruiken de nieuwste *redeneermodellen* **Chain-of-Thought**:
  * Het model voert intern een reeks logische tussenstappen uit voordat het antwoord geeft.
  * Hierdoor kunnen ze complexe wiskundige bewijzen leveren, programmeren op expertniveau en diepe logica ontrafelen.

### 4.3 De Nobelprijzen van 2024: De ultieme erkenning
* **Nobelprijs voor de Natuurkunde:** Toegewezen aan **Geoffrey Hinton** en **John Hopfield** voor het leggen van de fundamenten van neurale netwerken en machine learning.
* **Nobelprijs voor de Scheikunde:** Toegewezen aan **Demis Hassabis** en **John Jumper** van Google DeepMind voor **AlphaFold** (het AI-systeem dat de 3D-vouwstructuur van vrijwel alle 200 miljoen bekende eiwitten oploste — een biologisch mysterie van 50 jaar).

### 4.4 Efficiëntie en Distillatie (o.a. DeepSeek)
* Modellen hoeven niet meer per se honderden miljoenen euro's aan stroom te kosten. Door slimmere architecturen en *Knowledge Distillation* (kleinere modellen die doelgericht leren van grotere modellen) wordt topklasse AI steeds sneller, goedkoper en lokaal bruikbaar.

---

## 🌉 De Praktische Brug naar de Les (Waarom moet de cursist dit weten?)

Sluit de introductie af met deze **3 vuistregels** die cursisten direct meenemen naar de oefeningen:

| Inzicht uit de theorie | Gevolg in de praktijk voor de cursist |
|---|---|
| **1. AI is géén database met vaste feiten** | AI zoekt niet in een tabel met 'waarheden', maar berekent wat statistisch waarschijnlijk is. Vraag je naar obscure details, dan verzint het een aannemelijk klinkend sprookje (**hallucinatie**). Verifieer feiten altijd! |
| **2. Context bepaalt alles (Prompting)** | Omdat het model reageert op voorgaande tokens, stuurt jouw prompt het model naar het juiste 'kennisdomein'. Geef je context en een rol (*Persona: "Reageer als senior redacteur"*), dan activeer je die specifieke stijl in het netwerk. |
| **3. Menselijke regie blijft noodzakelijk** | AI levert ongekende creativiteit, denksnelheid en samenvatkracht. De mens levert het doel, het oordeel en de eindverantwoordelijkheid. |

---

## 📋 Samenvattend Slide-schema (voor de latere presentatie)

Als we dit omzetten naar slides voor Les 1, is dit de optimale verdeling van 6 slides:

1. **Slide 1: De Mythe vs. De Werkelijkheid** — AI is geen magie, maar leren van data (1950 vs. nu).
2. **Slide 2: Klassieke AI (Regels)** — Schaakcomputers (Deep Blue) vs. waarom taal en beelden vastliepen (ambiguïteit).
3. **Slide 3: Neurale Netwerken** — Hoe hersencellen en gewichten leren door duizenden voorbeelden en feedback (backpropagation).
4. **Slide 4: De LLM & Transformer Revolutie** — Next-token prediction, taal begrijpen als wiskundige coördinaten (Wittgenstein) en pre-training vs fine-tuning.
5. **Slide 5: De Stand van Zaken Vandaag** — Multimodaal (kijken & luisteren), redeneermodellen (*o1, DeepSeek-R1*) en de Nobelprijzen 2024 (AlphaFold & Hinton).
6. **Slide 6: De 3 Gouden Lessen voor Vandaag** — Niet blind vertrouwen (hallucinaties), context meegeven (prompting) en jij houdt de regie!
