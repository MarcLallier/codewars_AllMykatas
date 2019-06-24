/*#_6kyu_#_Split Strings*/

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']



function solution(str){
  return (str + "_").match(/../g)
}


// #########_______________ou
  
 function solution(str){
   array = [];
   for(let i = 0; i < str.length; i += 2){
     pair = str[i+1] || '_';
     arr.push(str[i] + pair);
   }
   return array;
 }