// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.


/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.


const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function getNumbersAbove8(grades) {
    const numbersAbove8 = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            numbersAbove8.push(grades[i]);
        }
    }

    return numbersAbove8;
}

const result = getNumbersAbove8(grades);
console.log('De resultaten boven of gelijk aan 8 zijn: ' + result);

// ---- Verwachte uitkomst: 6
console.log('Het aantal leerlingen die cum laude geslaagd is: ' + result.length);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:

// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




const cumLaude = [6, 4, 5];
function otherNumbersAbove8(cumLaude) {
    const numbersAboveEight = [];

    for (let i = 0; i < cumLaude.length; i++) {
        if (cumLaude[i] >= 8) {
            numbersAboveEight.push(cumLaude[i]);
        }
    }

    return numbersAboveEight;
}

const result2 = otherNumbersAbove8(cumLaude);
console.log('Het aantal leerlingen die cum laude geslaagd is: ' + result2.length);

// Dit werkt als je de array hierboven veranderd


/* Opdracht  2: Gemiddeld cijfer */



function total() {
    const totally = sum / totalNumberOfGrades;
    return Math.round(totally);
}
const grades2 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const totalNumberOfGrades = grades2.length;
const sum = grades2.reduce((total, grade) => total + grade, 0);

console.log("Total number of grades:", totalNumberOfGrades);
console.log("Sum of all grades:", sum);
console.log("Average of grades:", + total());

const wholeMember = Math.round(total);
console.log(wholeMember);

// VRAAG:
//Als ik een heel getal wil hebben kan ik op de retrun een Math.round zetten. Dit werkt. maar lukt dit via de console log later.
// Ik heb nu nog een const gemaakt en daar wilde ik ook de Math.round opzetten, maar dan komt NaN uit.
//


/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143





/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function total1() {
    const totally1 = sum1 / totalNumberOfGrades1;
    return Math.round(totally1);
}
const grades3 = [8, 9, 4, 6, 10];
const totalNumberOfGrades1 = grades3.length;
const sum1 = grades3.reduce((total, grade) => total + grade, 0);

console.log("Total number of grades:", totalNumberOfGrades1);
console.log("Sum of all grades:", sum1);
console.log("Average of grades:", + total1());



// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!




/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */

function iterateHighGrades(highGrade) {
    for (let i = 0; i < highGrade.length; i++) {
        const grade = highGrade[i];
        console.log(`Grade at index ${i}: ${grade}`);
    }
}
const highGrade = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

iterateHighGrades(highGrade);


function HighestNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let highest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }

    return highest;
}

const numbers = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const highestNumber = HighestNumber(numbers);

console.log("Het hoogste nummer is:", highestNumber);

// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
