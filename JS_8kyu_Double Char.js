/*#_8kyu_#_Double Char*/

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "


function doubleChar(str) {
  let word = ''
  
  for (let i = 0; i < str.length; i++){
    word += str[i] + str[i];
  }
  return word
}