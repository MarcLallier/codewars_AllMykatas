/*#_7kyu_#_Find the stray number*/


// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3







function stray(numbers) {
  
  let MaxNumber = Math.max(...numbers)
  let MinNumber = Math.min(...numbers)
  
  let arr = numbers.filter(number =>{ 
    return number === MaxNumber
  })
  
  let finalArray = arr.length == 1
  
    return  finalArray ? MaxNumber : MinNumber;
}