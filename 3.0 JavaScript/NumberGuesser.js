let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Start here:

const generateTarget = () => {
  const targetNumber = Math.floor(Math.random() * 10);
  return `Target Number: ${targetNumber}`;
};
//console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess === computerGuess) {
    return true;
  } else if (
    Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber)
  ) {
    return true;
  } else if (
    Math.abs(humanGuess - targetNumber) > Math.abs(computerGuess - targetNumber)
  ) {
    return false;
  } else {
    return "Invalid!";
  }
};
//console.log(compareGuesses(2,3,5));

const updateScore = (winner) => {
  if (winner === "human") {
    return (humanScore += 1);
  } else if (winner === "computer") {
    return (computerScore += 1);
  }
};
//console.log(updateScore());

const advanceRound = () => {
  currentRoundNumber += 1;
};
//console.log(advanceRound());
