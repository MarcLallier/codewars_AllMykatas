/*#_7kyu_#_Vowel Count*/

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.



function getCount(str){
  let vowel_list = 'aeiouAEIOU';
  let total = 0;
  
  for(let i = 0; i < str.length ; i++){
    if (vowel_list.indexOf(str[i]) !== -1){
      total += 1;
    }
  }
  return total;
}
  