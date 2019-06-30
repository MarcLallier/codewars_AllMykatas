/*#_7kyu_#_Mumbling*/

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
  return s.split("").map( (letter , index ) => {
 
    let CapitalChar = letter.charAt(0).toUpperCase()  

    for (let i = 0; i < index; i++) {
      CapitalChar += CapitalChar[i].toLowerCase() 
    }
     
     return CapitalChar
     }
  ).join("-")

};

//###___________________ou

function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}