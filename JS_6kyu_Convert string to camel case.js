/*#_6kyu_#_Convert string to camel case*/





// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(str){
 
  if(!str) {
     
     return ''
   }
   else {
    
    let splitString = str.split(/[ ,_-]/g)
     var joinSplit = [splitString[0]] // scope de var plus grand que let
     
       for(var i = 1; i < splitString.length; i++){
         
        joinSplit.push(splitString[i].substring(0,1).toUpperCase() + splitString[i].substring(1).toLowerCase())
       }
   }
 
   return joinSplit.join('')
 }
 
 