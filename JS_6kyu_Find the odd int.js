/*#_6kyu_#_Find the odd int*/


//Given an array, find the int that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.



function findOdd(a) {
 let count = 0
 let number = 0
   a =a.sort()
   
   for (let i = 0; i<a.length;i++){
    if (a[i] === a[i+1]) {
      number ++
    }
    
    else {
      number++
        if (number % 2 !=0){
          count = a[i]
          break
        }
    }
}
return count

}