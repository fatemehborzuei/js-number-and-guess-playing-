function sum(a, b) {
    const answer = a + b;
    return answer;
  }
  
  console.log(sum(20, 15));
  const x = sum(20, 15);
  console.log(x);

  
 
  

  const systemNumber = Math.floor(Math.random() * 100) + 1;
  let health = 10;
  
  function getUserGuess() {
    const userGuess = Number(prompt("Enter your guess (1 to 100):"));
    
    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Invalid number. Enter an integer between 1 and 100.");
      return null;
    }
    return userGuess;
  }
  
  while (health > 0) {
    const userGuess = getUserGuess();
  
    if (userGuess === null) {
      continue;
    }
  
    if (userGuess === systemNumber) {
      alert("You win!");
      break;
    } else if (userGuess > systemNumber) {
      alert("Your number is bigger.");
    } else {
      alert("Your number is smaller.");
    }
  
    health--;
  
    if (health > 0) {
      alert(`You have ${health} guesses left.`);
    }
  }
  
  if (health === 0) {
    alert(`Game over. The correct number was ${systemNumber}.`);
  }

  //function hosting 


  //types of functions:
  //1.function declarattion=function(){}
  //2.function expression=save a function inside a variable(){}=const getuserguess=function(){}
  //3.arrow function
  //4.factory function
  //5.consstructor function

  


