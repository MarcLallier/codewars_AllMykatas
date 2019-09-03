/*#_5kyu_#_String incrementer*/

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (str) {
  var regex = /[0-9]$/
  var justNumber = str.replace(new RegExp("[^(0-9)]", "g"), '')
  var justLetter = str.replace(new RegExp("[^(a-zA-Z)]", "g"), '')
  var zero = ''
  var number = parseInt(justNumber)+1
  var strNumber =  number.toString()
  
    if (/[0-9]$/.test(str)==false){
      return str + 1
    }
    else {
   
      if(justNumber.length > strNumber.length) {
        for(let i = 0; i < justNumber.length; i++) {
          zero += '0'
        }
      return justLetter + (zero + number).slice(-justNumber.length)
      }
      else {
        return justLetter + strNumber
      }
    }
  }