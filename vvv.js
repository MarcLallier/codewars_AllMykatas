let a = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]


function findOdd(a) { 
  
  let count = 0
  let mapping = a.length
  let i = 0
  
  while ( i < mapping ){
  
    if(a[i] == a[i++]){
      count +=1
     }
     


}  
if(count % 2 == 0){
  count = 0
 }
 return a[i]
}  
//      
//      if (count % 2 !=0){
//        return count
//      }

//     }
 
//   }
 
//  }




// function findOdd(a) { 
  
//   let count = 0
//   let mapping = a.length
//   let i = 0
  
//   for (; i < mapping; i++){
  
//     while(i < mapping){
    
//       if(a[i] == a[i]++){
//          count = +1
//      }
//      if (count % 2 !=0){
//        return count
//      }

//     }
 
//   }
 
//  }