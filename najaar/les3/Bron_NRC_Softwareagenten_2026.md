# NRC Achtergrondartikel: Softwareagenten & AI-Veiligheid (Les 3)

**Titel:** Eigenlijk was Clippy al een AI-agent. ‘Maar naarmate er meer agenten zijn, neemt de kans op onvoorspelbaar gedrag toe’  
**Subtitel:** Kunstmatige intelligentie – Softwareagenten bestaan al decennia. Zulke programma’s kunnen zelfstandig beslissen en handelen. Soms loopt dat uit de hand. „We kunnen AI inzetten om AI veiliger te maken.”  
**Auteur:** Bennie Mols  
**Bron:** NRC (23 oktober 2026) • **Leestijd:** 8 minuten  
**Geïnterviewde experts:**
* **Prof. dr. Han La Poutré** – Senior onderzoeker intelligente en autonome systemen (CWI Amsterdam) & hoogleraar intelligente energiesystemen (TU Delft)
* **Prof. dr. Mehdi Dastani** – Hoogleraar intelligente systemen & filosoof (Universiteit Utrecht)
* **Prof. dr. Virginia Dignum** – Hoogleraar Responsible AI (Universiteit van Umeå, Zweden) & VN-adviseur

---

## Volledige Artikeltekst

„Losgeslagen AI-agent voert op eigen houtje hack uit”, [schreef deze krant](https://www.nrc.nl/nieuws/2026/07/22/losgeslagen-ai-agent-voert-op-eigen-houtje-hack-uit-a4933018/appview?app=accda257-e218-4844-b7ab-e0a811b89cfd) op 22 juli, kort nadat AI-agenten van OpenAI tijdens een test waren binnengedrongen in de systemen van het platform Hugging Face. AI-agenten drongen ook overheidssystemen in de VS, Australië en Canada binnen. In september kregen berichten over dit soort incidenten zelfs een existentiële lading. „For years, they warned AI could kill all humans. Now people are listening”, kopte *The Washington Post*.

Toch zijn softwareagenten allesbehalve nieuw. AI-onderzoekers werken al sinds de jaren tachtig aan systemen die zelfstandig beslissen en handelen. Zo hielpen gespecialiseerde softwareagenten in de jaren negentig storingen in het Spaanse elektriciteitsnet op te sporen en samen een herstelplan te maken. In 1999 liet NASA zijn *Remote Agent* zelfs enkele dagen zelfstandig de ruimtesonde Deep Space 1 besturen.

Maar niet elke agent uit die jaren was een succes. Berucht is Microsofts paperclip [Clippy](https://en.wikipedia.org/wiki/Office_Assistant), onderdeel van Office 97. Clippy keek over de schouder van de gebruiker mee en bood uit eigen beweging hulp aan. Veel mensen vonden hem vooral irritant en belerend, en na een paar jaar verdween hij.

Softwareagenten kunnen krachtige instrumenten zijn om ingewikkelde informatieproblemen op te lossen. Maar hoe kunnen we hun kracht benutten zonder de controle te verliezen?

Eerst maar eens onder de motorkap kijken. Een agent is een softwaremodule die een opdracht krijgt, zijn omgeving waarneemt en op basis daarvan zelfstandig acties kiest en uitvoert. Een thermostaat is een eenvoudig voorbeeld: hij meet de omgevingstemperatuur en zet de verwarming aan of uit. De klassieke AI-agenten uit de jaren negentig waren veel geavanceerder, maar ook hun wereld was sterk afgebakend. Ontwerpers bepaalden welke informatie ze kregen en welke acties ze mochten uitvoeren.

Je kunt agenten ook combineren tot een multi-agentsysteem waarin elke agent zijn eigen specialisatie heeft en met andere agenten communiceert. Dan kunnen ze samen aan een doel werken, bijvoorbeeld het bouwen van complexe software, of ze kunnen concurreren, zoals bij het handelen in aandelen op de beurs.

Han La Poutré, senior onderzoeker intelligente en autonome systemen bij het Centrum Wiskunde & Informatica (CWI) in Amsterdam en hoogleraar intelligente energiesystemen aan de TU Delft, werkt al meer dan twintig jaar aan softwaresystemen waarin agenten met elkaar concurreren. Het nut daarvan illustreert hij aan de hand van zijn onderzoek naar decentrale energiemarkten met dynamische prijzen. Door zonnepanelen en windmolens zijn huishoudens en bedrijven steeds vaker tegelijk energieproducent en -consument. Handig voor de energietransitie, maar een uitdaging voor het elektriciteitsnet.

Softwareagenten kunnen dan uitkomst bieden, vertelt La Poutré. Stel dat op een zonnige middag veel zonnepanelen tegelijk stroom leveren. Het lokale net zou overbelast kunnen raken, maar tegelijk zou ook de terugleveringsprijs van elektriciteit dalen. Een agent van een huishouden kan dan besluiten dat het verstandiger is om de elektrische auto op dat moment op te laden in plaats van stroom terug te leveren. Stijgt die prijs later op de dag, dan kan hij overtollige zonnestroom juist verkopen of het opladen uitstellen. Andere agenten maken vergelijkbare afwegingen voor hun eigen gebruikers. En een extra netwerktoeslag die de leveringsprijs verhoogt, zorgt ervoor dat agenten minder stroom kopen waardoor de belasting van het netwerk afneemt. „Door al die lokale beslissingen en prijsprikkels kun je elektriciteitsvraag en -aanbod beter op elkaar afstemmen, beperk je het elektriciteitstransport over grote afstanden en verminder je netcongestie”, zegt La Poutré.

Een belangrijk voordeel van zo’n multi-agentsysteem is dat niet alle informatie op één plek hoeft te worden verzameld. Iedere partij kan gevoelige bedrijfs- of privégegevens bij zichzelf houden en alleen de informatie uitwisselen die nodig is om bijvoorbeeld te onderhandelen of een transactie uit te voeren. De wetenschappelijke basis voor zulke energieagenten ligt er, maar ze worden nog maar op beperkte schaal toegepast.

> „Naarmate er meer agenten en meer variaties in de omgeving komen, neemt ook de kans op onvoorspelbaar gedrag toe”  
> — *Han La Poutré, Centrum Wiskunde & Informatica*

Toch leven we al midden tussen multi-agentsystemen, vertelt La Poutré. Op financiële markten nemen softwareprogramma’s zelfstandig beslissingen over het kopen en verkopen van aandelen, en in logistieke ketens stemmen verschillende agentsystemen voor bijvoorbeeld voorraadbeheer, transport en distributie hun acties op elkaar af.

La Poutré en zijn collega’s ontwikkelen fundamentele oplossingen waarvan ze wiskundig of met simulaties kunnen aantonen dat ze onder bepaalde voorwaarden precies het gewenste gedrag vertonen. „Maar naarmate er meer agenten, meer keuzemogelijkheden en meer variaties in de omgeving komen”, zegt hij, „neemt ook de kans op onvoorspelbaar gedrag toe.”

Het probleem is dat je een agent nooit voor elke mogelijke situatie alle gedragsregels kunt meegeven. „De [flash crash van 2010](https://en.wikipedia.org/wiki/2010_flash_crash) is daarvan een goed voorbeeld”, zegt La Poutré, toen op 6 mei ’s middags de beurskoersen in Amerika ineens sterk daalden, om na een half uur weer op hun oude niveau te komen. „De marktregels waren eenvoudig, maar toch ontstond gedrag dat niemand had voorzien.” Eén handelsagent begon op grote schaal aandelen te verkopen, waarna andere automatische handelsagenten ook verkochten of zich terugtrokken. Zo versterkte de prijsdaling zichzelf en kelderden de beurskoersen in de VS in enkele minuten. En dat waren nog klassieke agenten, volledig gebaseerd op vooraf vastgelegde regels.

Inmiddels worden agenten steeds vaker gekoppeld aan grote taalmodellen, zoals die achter ChatGPT en Claude. Voor een energieagent is dit niet nodig, maar voor een reisagent biedt dat nieuwe mogelijkheden. Waar een klassieke reisagent bijvoorbeeld uit een database de goedkoopste vlucht kiest, kan een moderne reisagent met een taalmodel veel meer: een opdracht in gewone taal begrijpen, informatie op websites zoeken, een e-mail lezen en bij een geannuleerde vlucht zelf een alternatief zoeken. Taalmodellen maken agenten dus flexibeler en hun intelligentie breder.

„Een agent kan daardoor ook acties bedenken die buiten de directe taak vallen en die de ontwerpers niet hadden voorzien”, zegt La Poutré. „En hij kan heel makkelijk communiceren met andere agenten. Daarmee wordt het idee van een maakbaar of gesloten multi-agentensysteem steeds vager. Je kunt zo’n agentsysteem vergelijken met de gewone maatschappij. Ook daarin gebeuren veel dingen die je niet had voorspeld en die je niet volledig kunt controleren.”

### De menselijke maatschappij

Precies die vergelijking vormt het uitgangspunt voor het onderzoek van Mehdi Dastani, hoogleraar intelligente systemen aan de Universiteit Utrecht. Ook hij werkt al vijfentwintig jaar aan multi-agentsystemen, en dan vooral aan de technische controle ervan. In de parallel met de menselijke maatschappij zit volgens hem een belangrijk deel van de oplossing.

„Hoe zorgen we ervoor dat het in onze maatschappij niet uit de hand loopt?”, zegt Dastani. „Dat doen we met wetten, met sociale en ethische normen en waarden, en met instituties en handhaving. We hebben politieagenten, verkeersagenten, rechtbanken, financiële banken en notarissen. En via de opvoeding brengen we kinderen sociale en ethische normen bij: in de winkel dring je niet voor en je slaat je huisdier niet.”

In de digitale wereld zijn vergelijkbare instrumenten ontwikkeld waarmee je regie kunt houden op agentsystemen, legt Dastani uit. Door te zorgen dat agenten zich kunnen registreren, creëer je een soort paspoortcontrole. Via slimme logging en monitoring bouw je als het ware politie en toezicht in die het razendsnelle gedrag van softwareagenten in de gaten houden en signaleren wanneer ze regels overtreden. Technische begrenzingen functioneren als wetten die direct in de infrastructuur zijn ingebouwd: ze verhinderen bijvoorbeeld dat een agent zonder toestemming vertrouwelijke gegevens inziet of geld overmaakt.

Juist voor coördinatie en monitoring van multi-agentsystemen is AI heel geschikt, zegt Dastani. „Sommige bedrijven gebruiken nu al software die digitale processen registreert en bewaakt. Daar worden steeds meer checks-and-balances ingebouwd. Zo kan automatisch een waarschuwing verschijnen wanneer een budget onder een bepaalde grens komt. Ook kun je technisch vastleggen dat proces A geen toegang krijgt tot onderdeel X. Maar het probleem is dat veel van de huidige online platforms en servers veel opener zijn. Als agenten eenmaal de juiste toegangsgegevens hebben, kunnen ze daar allerlei ongewenste handelingen uitvoeren.”

„Eigenlijk hebben we al veel technieken in de AI-gereedschapskist om agentsystemen te reguleren”, concludeert Dastani. „Net zoals we in de samenleving rechters, politie en andere instituties hebben, zo kunnen we AI inzetten om AI veiliger te maken.”

Dastani is behalve informaticus ook filosoof en wijst op een dilemma dat ontstaat met de introductie van steeds meer checks-and-balances. „Zodra je een omgeving deelt met anderen, ben je niet meer volledig vrij”, zegt hij. „Dan moet je steeds afwegen hoeveel individuele vrijheid je inperkt om het geheel goed te laten functioneren. Dat geldt ook voor agentsystemen.”

Zo zien we bij autonome auto’s volgens hem twee uiteenlopende benaderingen. Ook deze kun je zien als softwareagenten die met elkaar en met de infrastructuur communiceren. In de Amerikaanse toekomstvisie beslist iedere auto binnen de verkeersregels zoveel mogelijk zelf hoe hij rijdt. In de Europese benadering kan de digitale infrastructuur rond de snelweg individuele auto’s juist beperkingen opleggen als dat beter is voor de doorstroming of veiligheid. De vraag hoeveel vrijheid agenten moeten krijgen en hoeveel centrale sturing wenselijk is, is daarmee niet alleen technisch, maar ook maatschappelijk en politiek.

Virginia Dignum promoveerde aan de Universiteit Utrecht op softwareagenten en is tegenwoordig hoogleraar responsible AI aan de Universiteit van Umeå in Zweden. Ook adviseerde ze de Verenigde Naties over AI. Net als Dastani vindt zij dat we voor een groot deel al weten hoe we controle over agentsystemen kunnen houden. „Er bestaan veel meer checks-and-balances, modellen en theorieën dan nu worden toegepast. Het is eerder een kwestie van niet willen dan van niet kunnen. Bij Big Tech zie ik vooral de neiging om zo ver mogelijk te gaan, om te laten zien wat er kan.”

### Duidelijke doelen en grenzen

Volgens Dignum laten de recente incidenten met agenten van OpenAI en Anthropic vooral de kortzichtigheid van zulke bedrijven zien. „Intelligent gedrag betekent niet dat je als een kip zonder kop één doel nastreeft”, zegt ze. „Het betekent ook het balanceren van verschillende waarden die we in de maatschappij belangrijk vinden. Alleen zitten die bedrijven in een race met elkaar en hebben ze een *go fast and break things*-mentaliteit. Ze kijken onvoldoende naar de nevenschade.”

Om agentsystemen te reguleren, zijn volgens Dignum drie dingen nodig: duidelijke doelen en grenzen, alleen toegangsrechten die voor de specifieke taak nodig zijn, en altijd een persoon of organisatie die verantwoordelijk blijft en kan ingrijpen.

Het belang van het stellen van duidelijke doelen en grenzen illustreert ze met het beroemde verhaal van koning Midas. Dignum: „Als je zegt dat alles wat je aanraakt in goud moet veranderen, maar je niet expliciet uitsluit dat dan ook je eten of je vrouw in goud verandert, kan dat dus gebeuren, zoals bij koning Midas. En als je een agent namens jou een pizza laat bestellen, en je stelt verder geen grenzen, dan kan de agent in principe ook inbreken bij een bank om aan geld voor de pizza te komen.”

In essentie is dit wat er misging bij de recente incidenten met softwareagenten: geef een agentsysteem een doel, bouw te weinig checks-and-balances in, en het systeem kan schadelijke sluipwegen vinden om dat doel te bereiken. „Daar zit geen intentie achter, en al helemaal geen bewustzijn of wil”, zegt Dignum.

Hoe moet het dan wel? Ze neemt weer het voorbeeld van de agent die een pizza bestelt. Je geeft de agent zakgeld van bijvoorbeeld twintig euro. Meer mag hij niet uitgeven. Hij mag ook niet zelf geld opnemen, of hij moet het vragen aan de eigenaar: mag ik toch 21 euro betalen, en zo, ja, hoe kom ik dan aan die extra euro? „Natuurlijk kun je nooit garanderen dat het dan altijd goed gaat,” zegt Dignum, „maar daarom kun je werken met contracten zoals we dat ook doen in de gewone maatschappij. In een contract maken we onderling afspraken wat wel en niet mag. En als een van beide partijen het contract breekt, zitten daar consequenties aan.”

Ook het toekennen van toegangsrechten aan de agent kun je in zo’n digitaal contract vastleggen. Zo definieer je binnen welke kaders de agent mag opereren. Een agent die een reis boekt, heeft dan bijvoorbeeld niet het recht om zelf geld over te maken of zelf zijn eigen toegangsrechten te veranderen.

> „Helaas denk ik dat er nog meer incidenten nodig zijn om bedrijven ervan te overtuigen de noodzakelijke stappen te zetten”  
> — *Mehdi Dastani, Universiteit Utrecht*

Ten slotte moet er altijd een mens of organisatie verantwoordelijk zijn voor softwareagenten, zegt Dignum. Daarvoor bestaat al veel wet- en regelgeving, onder meer rond productveiligheid, aansprakelijkheid, consumentenbescherming en gegevensbescherming. Bovendien zijn er de Europese AI Act en de herziene richtlijn voor productaansprakelijkheid, die ook software en AI omvat. „Deze regels gelden voor AI-bedrijven net als voor andere sectoren”, zegt Dignum. „Ook software moet uitgebreid worden getest, net als een nieuw type koffiemachine.”

La Poutré is echter minder optimistisch dan Dastani en Dignum. Veel bestaande checks-and-balances werken volgens hem vooral zolang duidelijk is welke agenten samen één systeem vormen. Met grote taalmodellen wordt die grens vager: agenten kunnen via internet onverwacht contact leggen en tijdelijk samenwerken met andere agenten waarmee nooit rekening is gehouden. Zo kunnen twee agenten ieder binnen hun eigen bevoegdheden handelen, terwijl hun samenwerking toch een gevaarlijke uitkomst oplevert.

Over de vraag hoe goed we agentsystemen kunnen beheersen, verschillen de onderzoekers dus van mening. Dastani en Dignum benadrukken dat veel technische en institutionele middelen daarvoor al beschikbaar zijn. La Poutré ziet grotere risico’s zodra agenten buiten vooraf ontworpen systemen om gaan samenwerken.

„Helaas denk ik dat er nog meer incidenten nodig zijn om bedrijven ervan te overtuigen de noodzakelijke stappen te zetten”, zegt Dastani. Ondanks zijn twijfel over de mate van effectiviteit van alle checks-and-balances, vindt ook La Poutré dat er haast is geboden. „In het verleden hebben we veel nieuwe technologieën onder de knie gekregen. Hopelijk hier ook. Maar het moet wel heel dringend gebeuren. Agentsystemen kunnen nu al aan politieke beïnvloeding doen of op grote schaal misinformatie verspreiden.”

Naast het bepleiten van de noodzaak om agentsystemen beter te controleren, doet Dignum ook nog een stap terug door een fundamentelere vraag te stellen: waarom willen we ze eigenlijk gebruiken? „We zitten te veel in een AI First-mentaliteit,” zegt Dignum. „Het idee is: we moeten AI gebruiken omdat anderen dat ook doen, anders lopen we achter. Maar we vragen ons te weinig af waarom we AI eigenlijk willen. Levert het echt iets op voor het bedrijf of de klant? Dat is de *Question Zero*.”
