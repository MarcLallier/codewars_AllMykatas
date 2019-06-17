/*#_6kyu_#_Valid Phone Number?*/


// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses) 

// Examples:

// validPhoneNumber("(123) 456-7890")  =>  returns true
// validPhoneNumber("(1111)555 2345")  => returns false
// validPhoneNumber("(098) 123 4567")  => returns false

function validPhoneNumber(phoneNumber){
  return /^\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}$/.test(phoneNumber)
  }
  
  /* 
  legende
  ^ : debut chaine
  \ : echapper un metacaractere
  [0-9] : tous les chiffres de 0 à 9
  {3} : nombre max de caracteres acceptes
  \s : Trouve un caractère blanc
  $ : fin de chaine 
  RegExp.prototype.test() : La méthode test() vérifie s'il y a une correspondance entre un texte 
  et une expression rationnelle. 
  Elle retourne true en cas de succès et false dans le cas contraire.
  
  */ 