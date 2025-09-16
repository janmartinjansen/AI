# Push Down Automaten
Voor eindige automaten geldt dat we een niet-deterministische automaat kunnen omzetten naar een deterministische.
Hoe zit dit bij Push Down automaten (PDA)? Hier is de situatie anders! Dat is goed te zien aan de hand van het volgende voorbeeld.

We maken een niet deterministische PDA om palindromen (strings die omgekeerd hetzelfde zijn) van even lengte te herkennen. 
Dit kan door eerst de helft van de string op de stack te plaatsen en daarna de tweede helft te matchen met wat op de stack staat.
Het niet-deterministische zit in het feit dat we moeten gokken wanneer we op de helft zijn (en naar toestand 2 gaan).

![Plaatje](./mededelingen/palindroom.svg)

We kunnen deze PDA onmogelijk deterministisch maken. Dit betekent dat niet deterministische PDA's een grotere set talen
beschrijven dan deterministische.

Hoe werk je in de praktijk met een niet deterministisch PDA? In eerste instantie lijken ze niet erg nuttig. 
Je moet immers ergens een keuze maken en dan maar hopen dat deze goed was. 
Maar in feite moet je bij ieder keuze moment alle mogelijkheden die je hebt gelijktijdig gaan proberen (of onthouden en later eventueel uitvoeren). 
Op deze manier bekijk je alle alternatieven. Pas als er geen alternatief is dat  **Accept** oplevert, keur je de invoer af.

Het proces van terugkeren naar een keuzemoment en een alternatief uitproberen komt vaak voor bij het oplossen van problemen 
(Sudoko maken, uitweg zoeken in doolhof, etc). 
We noemen dit proces backtracking.

