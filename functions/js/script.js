let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom? omdat er staat myStr en het staat tussen ""
let myInt = 3; //dit is een variabele van het datatype integer waarom? omdat er staat myInt en de waarde is een getal, en het staat niet tussen ""

//Waarom staat er let voor de variabelen? let declareert de variebele.

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen? 17.

    // vul in wat naam is: naam is de Parameter , je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde variebele de waarde noemen we een Argument , je hebt de eerste letter al gekregen

    alert(naam); //dit toont een melding op het scherm met de tekst van variebele naam deze tekst staan op regel 17 van de HTML .
}

function hideMe(){ //mag je de naam van de functie veranderen? nee 
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? deze functie verbergt een plaatje. en waar wordt deze in je HTML aangeroepen? regels 22 t/m 25.
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML? op regel 25.
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? het pakt het element met hetzelfde id. 
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? deze functie laat een plaatje weer zien. 
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen? regel 32. en wanneer wordt deze aangeroepen? nadat je hebt geklikt.

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan? van regel 2: let myInt. en waar komt de waarde van getal vandaan? van de HTML, regel 32 tussen de ().

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? querySelector slecteerd het eerst gevonden (juiste) element.  Wat is antwoord hier? een variabele. de som van myInt en getal.
    
    //wat gebeurt er in deze functie? myInt en getal worden samen opgeteld en geven een antwoord. 

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? het antwoord veranderd. 
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? - voor min en * voor keer.
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen? regel 38.

    element.style.color = kleur; //waar komt de waarde van element vandaan? van de HTML (?). en waar komt de waarde van kleur vandaan? van de HTML regel 38/44 aqua/orange. 
    element.style.fontSize = size; //waar komt de waarde van size vandaan? van de HTML, regel 44 30px. 

    //wat gebeurt er in deze functie? er word een kleur / letter grootte gegeven.
}

getName(myStr);
// wat gebeurd er hierboven? de functie getName word aangeroepen. en wanneer gebeurt dat? zodra de pagina is geladen. (tip ververs je pagina eens in je brouwser? 
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? de melding is veranderd. 