let input = "Try and try until you die!";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      console.log(`${i},${v}`);
    }
  }
}
