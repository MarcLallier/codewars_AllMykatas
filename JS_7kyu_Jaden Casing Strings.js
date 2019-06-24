/*#_7kyu_#_Jaden Casing Strings*/



// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//reponse attendue dans codewar

String.prototype.toJadenCase = function () {
  return this.split("-").map(word =>{
   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  
}).join(" ")
};
//Split() permet de transformer la chaine en tableau avec le separateur espace, on boucle avec le map() sur le tableau,
//on choisit le caractere à l'index 0 avec chatAt() puis on applique un toUpperCase + on coupe la lettre à l'index 1 avec slice()
// qui est la premiere lettre originale en minuscule


//fonction es5

function toJadenCase (str) {
  return str.split(" " || "," || " ,").map(word =>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  
 }).join(" ")
};

console.log(toJadenCase('tttt ,uuiii'))

// //avec regex
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(word){ return word.toUpperCase(); });
};