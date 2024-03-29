/*#_7kyu_#_JavaScript Array Filter*/

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). 
// Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// Just filter odd numbers


function getEvenNumbers(numbersArray){
  return numbersArray.filter((number)=> { 
    return number % 2 == 0
    }
  )
}