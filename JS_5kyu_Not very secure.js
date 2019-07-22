/*#_5kyu_#_Not very secure*/



// In this example you have to validate if a user input string is alphanumeric. The given string is not nil, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces/underscore







function alphanumeric(str){
  var regex1 = /\w/g
  var regex2 = /[^a-zA-Z0-9]/g
    if (str.match(regex2)){
      return false
    } 
     else  return regex1.test(str)
  
  
  }