/*#_8kyu_#_Count of positives / sum of negatives*/


// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if(input == null || input.length == 0) {
    return [];
  }

  let result = [0, 0];

  for (let i = 0; i < input.length; i++){
    if (input[i] > 0){
      result[0] += 1
    }
    else {
      result[1] += input[i]
    }
  }
  return result
}