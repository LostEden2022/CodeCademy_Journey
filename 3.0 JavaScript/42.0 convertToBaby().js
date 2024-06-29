// Write your code here:
const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

function convertToBaby(animals) {
  const babyArray = [];
  for (let i = 0; i < animals.length; i++) {
    babyArray.push("baby " + animals[i]);
  }
  return babyArray;
}

// When you're ready to test your code, uncomment the below and run:
console.log(convertToBaby(animals));
