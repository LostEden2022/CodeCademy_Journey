//Rules:
//Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//If there’s a tie, then the game ends in a draw.
//Any user that uses a bomb during the match wins, unless selected by both user and computer.

//The user chooses rock, paper, or scissors when the game starts.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(
      "Invalid input! Please choose either rock, paper, or scissors."
    );
  }
};
//console.log(getUserChoice("Rock"));
//console.log(getUserChoice("fork"));

//The computer makes a random choice of rock, paper, or scissors when the game starts.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  } else if (randomNumber === 3) {
    return "bomb";
  }
};
//console.log(getComputerChoice());

//How to determine the winner:
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb" && computerChoice === "bomb") {
    return "Kaboom!You both died!";
  }

  if (userChoice === "bomb") {
    return "Kaboom!You win!";
  }

  if (computerChoice === "bomb") {
    return "Kaboom!You lose!";
  }

  if (userChoice === computerChoice) {
    return "Tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lose!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lose!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lose!";
    } else {
      return "You won!";
    }
  }
};

//console.log(determineWinner("rock", "scissors"));
//console.log(determineWinner("rock", "paper"));

//Playing and logging the results of the game:
const playGame = () => {
  const userChoice = getUserChoice("rock");
  //input any valid userInput
  const computerChoice = getComputerChoice();

  console.log(`You chose ${userChoice}.`);
  console.log(`Computer chose ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
