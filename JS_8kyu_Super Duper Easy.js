/*#_8kyu_#_Super Duper Easy*/

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.




function problem(x){

  if (typeof x === 'number'){
  return x * 50 + 6
  } else return "Error"
  
  }