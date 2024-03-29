/*#_7kyu_#_The Park Ranger's Umbrella*/




// Joe is a park ranger and he walks around outside all day. He does not know when it will rain, so when he wakes up every morning he puts his umbrella in his backpack before he goes to work. His day is divided into three sections the morning, afternoon, and evening. When it rains he takes his umbrella out of his backpack and when it stops raining he puts it back. Every day starts with his umbrella in his backpack, so when it rains in the morning he takes it out of his backpack. How many times does Joe take his umbrella out of his backpack? You will receive an array of weather conditions.

// Possible weather conditions are sunny, cloudy, rainy and thunderstorm and Joe uses needs his umbrella when it rains, or there is a thunderstorm.

// Description clarification. Each day is made up of morning, afternoon, and evening, so every three values in the array is a full day. Joe starts each day with his umbrella in his backpack regardless of the weather the previous evening. When it rains or there is a thunderstorm he takes his umbrella out of his backpack and when it stops raining he puts it back. How many times does Joe take his umbrella out of his backpack?

// [rainy, rainy, thunderstorm, rainy, rainy, cloudy] = 2 [rainy, cloudy, thunderstorm, rainy, cloudy, cloudy] = 3


let weather = ["rainy", "rainy", "thunderstorm", "rainy", "rainy", "cloudy"]

function umbrella(weather) {
  
  let daysNb = weather.length / 3
  let i = 0
  let a = 0
  let answer = 0
  while (a < daysNb) {
    while (i < 3) {
        if (((weather[0] == "rainy") || (weather[0] ==  "thunderstorm")) && (i == 0)) {
          answer += 1
        } 
        else if 
        (((weather[0] != "rainy") && (weather[0] != "thunderstorm")) && ((weather[i] == "rainy") || (weather[i] == "thunderstorm")) && (i == 1)) {
          answer += 1
        } 
        else if 
        (((weather[1] != "rainy") && (weather[1] != "thunderstorm")) && ((weather[i] == "rainy") || (weather[i] == "thunderstorm")) && (i == 2)) {
          answer += 1
        }
        i++
      }
      i = 0
      weather.splice(0,3)
      a++
    }
    return answer
 }


  




  

  console.log(umbrella(weather))