/*#_8kyu_#_Sum of positive*/


// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  
  let i = 0
  let result = 0
  let a = arr.filter(item =>{return item > 0})
 
  for (let i = 0; i < a.length;i++){
    result = result + a[i]
  }
    return result
}