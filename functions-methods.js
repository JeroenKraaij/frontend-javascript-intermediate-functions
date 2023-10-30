// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat


function getEmailDommain (email) {
  const parts = email.split (`@`);
  console.log(`parts: `, parts)

  if (parts.length >= 2) {
      return parts [parts.length -1]
  } else {
      return email;
  }
}
console.log(getEmailDommain(`t.mellink@novi.nl`));


function getEmailDommain2 (email2) {
    const parts2 = email2.split (`@`);
    console.log(`parts: `, parts2)

    if (parts2.length >= 2) {
        return parts2 [parts2.length -3]
    } else {
        return email2;
    }

}
console.log(getEmailDommain2(`a.wiersma@outlook.com@test.com`));
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
function typeOfEmail (email) {
    const typeEmailAdress = email.split(`@`);
    if (typeEmailAdress[1] === `novi-education.nl`) {
        return `Student`;
    }  else if (typeEmailAdress[1] === `novi.nl`) {
        return `Medewerker`;
    }  else if (typeEmailAdress[1] === `outlook.com`) {
        return `Extern`;
    }  else {return `Onbekend emailadres`;
    }

}

const emailInput = ("n.eeken@novi.nl")
console.log(typeOfEmail(emailInput))

// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
function checkEmailValidity(email) {
    if (email.includes('@') && email.indexOf('@') < email.length - 1) {
        if (!email.includes(',') && !email.endsWith('.')) {
            return true;
        }
    }
    return false;
}

// Example usage:
const emailadress = 'n.eeken@novi.nl';

console.log(checkEmailValidity(emailadress));