 #_8kyu_#_Simple multiplication*/


 #This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


 def simple_multiplication(number) :
    if number % 2 == 0 :
        return(8 * number)
  
    else:
        return(9 * number)


       