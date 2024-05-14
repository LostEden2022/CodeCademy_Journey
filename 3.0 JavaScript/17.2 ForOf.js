// Write a for...of loop that iterates through our pokemonList array.
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];
for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`); 
};