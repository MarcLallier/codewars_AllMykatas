/*#_8kyu_#_Remove String Spaces*/

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){

  let regex = /\s/g
  
  return x.replace(regex, '')
  }