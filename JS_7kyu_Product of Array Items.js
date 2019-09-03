/*#_7kyu_#_Product of Array Items*/


// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */

 function product(values) {

  if (values != null && values.length > 0){
    const reducer = (accumulator, currentValue) => accumulator * currentValue
      return values.reduce(reducer)}
  
  else if(values === null || values.length === 0 ){
    return null
  }
       
}

/*ou*/

function product(values) {
  return values && values.length ? values.reduce((a,b)=> a * b) : null
}