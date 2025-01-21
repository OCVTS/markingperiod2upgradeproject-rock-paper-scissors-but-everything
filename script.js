let userChoice = "";
let computerChoice= "";
let playerScore = 0;  
let computerScore = 0;

const getUserChoice = () => {
  // alert("getUserChoice ran");
    let userInput = document.getElementById('userInput').value.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'spiritbomb' || userInput === 'hammer' || userInput === 'soulpunisher' || userInput === 'kevinhart' || userInput === 'therock') {
    userChoice = userInput;
    // User and computer choice is displayed on the screen with selected choices.
    document.getElementById("userChoice").innerHTML = ("Player Selected: " + userChoice);
    computerChoice = getComputerChoice();
    document.getElementById("computerChoice").innerHTML = ("Computer Selected: " + computerChoice);
    // Displays the winner and calculates the score
    document.getElementById("winner").innerHTML = determineWinner();
    document.getElementById("playerScore").innerHTML = `Player score: ${playerScore}`; // displays the players score
    document.getElementById("computerScore").innerHTML = `Computer score: ${computerScore}`;
    } else {
      alert("You destroyed the website. congrats");
    }


    }
    const getComputerChoice = () => {
     let randomNumber = Math.floor(Math.random() * 6);
     switch (randomNumber) {
      case 0:
        return 'rock';
      break;
      case 1:
        return 'paper';
      break;
      case 2:
        return 'scissors';
      break;
      case 3:
        return 'hammer';
      break;
      case 4:
        return 'therock';
      break;
      case 5:
        return 'kevinhart';
      break;
     }
    };
    const determineWinner = () => {
      result = "";
      if (userChoice === computerChoice) {
        return 'TIE GAME!!!';
      } 
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          computerScore += 1;
          return "Aw dangit. Computer won!";
        }  else {
          playerScore += 1;
          return "WHOO HOO YOU WIN!";
        }
       
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          computerScore += 1;
          return "Aw dangit. Computer won!" 
        } else {
          playerScore += 1;
          return "WHOO HOO YOU WIN!";
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          computerScore += 1;
          return "Aw dangit. Computer won!"; 
        } else {
          playerScore += 1;
          return "WHOO HOO YOU WIN!";
        } 

      } 
      if (userChoice === 'hammer') {
        if (computerChoice === 'paper') {
          computerScore += 1;
          return "Aw dangit. Computer beat the hammer"
        } else {
          playerScore += 1;
          return "HAMMER!"
        }
      }
      if (userChoice === 'spiritbomb') {
        playerScore += 1;
        return "You gathered everyone's energy and won!"
      }
      if (userChoice === 'kevinhart') {
        if (computerChoice === 'therock') {
          computerScore += 1;
          return "ROCK BOTTOM TO KEVIN HART!!!" 
        } else {
          playerScore += 1;
          return "HOW DID KEVIN HART WIN?!";
        }
      }
      if (userChoice === 'soulpunisher') {
        playerScore += 1;
        return "The computers hardrive was cleansed. You win!";
      }
      if (userChoice === 'therock') {
        if (computerChoice === 'kevinhart') {
          computerScore += 1;
          return "Kevin Hart makes better movies";
        } else {
          playerScore += 1;
          return  "The Rock makes better movies"
        }
      }
    };

    const resetGame = () => {
    userChoice = "";
    computerChoice= "";
    playerScore = 0;  
    computerScore = 0;
    document.getElementById("userChoice").innerHTML = "Player Selected: ";
    document.getElementById("computerChoice").innerHTML = "Computer Selected: ";
    document.getElementById("winner").innerHTML = "Game RESET!";
    document.getElementById("playerScore").innerHTML = `Player score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `Computer score: ${computerScore}`;
    }
document.getElementById('submit').addEventListener("click", getUserChoice);
document.getElementById('reset').addEventListener("click", resetGame)
