let userChoice = "";
let computerChoice= "";
let playerScore = 0;  
let computerScore = 0;

const getUserChoice = () => {
  // alert("getUserChoice ran");
    let userInput = document.getElementById('userInput').value.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'SpiritBomb' ) {
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
     let randomNumber = Math.floor(Math.random() * 3);
     switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break
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
      if (userChoice === 'SpiritBomb') {
        playerScore += 1;
        return "You gathered everyones energy and won!"
      }

    };


    
document.getElementById('submit').addEventListener("click", getUserChoice);
