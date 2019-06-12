/*#_8kyu_#_Opposite number*/

// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


function opposite(number) {
  if (number > 0){
    return(-1 * number)
  }
  else if (number < 0) {
    return(number * -1)
  }
  else
    return 0
 }
