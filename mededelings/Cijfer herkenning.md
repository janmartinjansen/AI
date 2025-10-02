# Voorbeeld cijfer herkenning

De site [**3Blue1Brown**](https://www.3blue1brown.com/lessons/neural-networks)
 geeft een voobeeld van een minimaal neural netwerk voor het herkennen van enkele cijfers.
Scroll een stukje naar beneden om bij het voorbeeld te komen.
Je kunt zelf een cijfer tekenen in het vierkante vak (verwijder eventueel eerst het bestaande met Clear).
Nadat je een cijfer hebt getekend, gebeurt er eerst een Pre-process. Dit zorgt ervoor dat het cijfer keurig in het midden komt te staan 
en eventueel een beetje wordt geschaald. Daarna gaat het netwerk het cijfer proberen te herkennen. 
Aan de rechterkant licht nu het output cijfer op dat het best correspondeert met het getekende cijfer.
De Pre-processing is nodig omdat het netwerk erg klein is. Bij een groter netwerk zou dit niet nodig zijn.


## Opbouw van het netwerk
De input voor het netwerk is een plaatje van 28 bij 28 (totaal 784) pixels die een waarde tussen 0 en 1 hebben. 
Hierbij is 0 zwart en 1 wit en waardes ertussen zijn grijs. 
Er zijn in het netwerk 2 verborgen lagen met ieder 16 neuronen. 
2 lagen is echt het minimum voor serieuzere toepassingen. 16 neuronen is redelijke willekeurig, 
en (net aan) voldoende om een behoorlijk resultaat te krijgen. 
In de eerste verborgen laag zijn alle neuronen volledig verbonden met alle inputs. Dus er zijn 784 x 16 (12544) verbiningen.
In de tweede laag zijn ook alle neuronen volledig verbonden met alle neuronen uit de eerste laag: 16 x 16 (256) verbindingen.
Uiteindelijk zijn alle neuronen uit de tweede laag weer verbonden met alle 10 neuronen van de ouput laag: 16 x 10 (160) verbindingen.
Iedere verbinding heeft een gewicht (getal tussen -1 en 1). In feite bepaalt het gewicht hoe sterk de waarde van het neuron aan de andere
kant wordt doorgegeven (0 helemaal niet, 1 volledig en anders er tussenin, negatief betekent een tegengestelde invloed). 
Alle input waarden worden bij elkaar opgeteld (plus een bias). De verkregen waarde wordt daarna weer teruggeschaald naar een waarde 
tussen 0 en 1.  
Totaal zijn er: 12544 + 256 + 160 + 16 + 16 + 10 = 13002 gewichten en biasses. Praktisch gesproken is dit een zeer klein netwerk!

## Training van het netwerk
Aan het begin hebben alle gewichten en biasses een willekeurige waarde (bv 0.5). 
Daarna worden er 1 voor 1 plaatjes van cijfers aangeboden en berekent het netwerk de output waarden.
Deze zullen natuurlijk volkomen willekeurig zijn. We gaan nu de gewichten bijstellen op de manier waarop we dit ook deden 
met het kleine Perceptron voorbeeld. 
Dit doen we door de uitput waarden te vergelijken met de gewenste waarde (1 voor het correcte cijfer en 0 voor alle anderen).
Voor iedere waarde berekenen we de afwijking, kwadrateren die en tellen deze op. Hoe groter het getal, hoe erger de afwijking.
Nu wordt met een algoritme dat back-propagation heet de waarde van ieder gewicht een beetje bijgesteld zodat de afwijking iets 
kleiner worden. De bijstelling is proportioneel met de bijdragen van het gewicht aan het resultaat.
Dit bijstellen van de gewichten en biasses wordt leren genoemd (machine learning)!
Door dit steeds te herhalen voor nieuwe input voorbeelden krijgen de gewichten en biasses uiteindelijk de waarden die nodig zijn
om input goed te determineren. Het netwerk moet natuurlijk wel sterk genoeg zijn om dit te kunnen doen. 
Als er te weinig lagen, of te weinig neuronen per laag gaat dit niet lukken