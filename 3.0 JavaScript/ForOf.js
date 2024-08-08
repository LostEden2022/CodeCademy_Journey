//Let’s write a program to help us improve our spelling skills.
const spellingWord = 'hippopotamus';
for (const char of spellingWord) {
  console.log(char);
}

// Write a for...of loop that iterates through our pokemonList array.
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];
for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`); 
};
