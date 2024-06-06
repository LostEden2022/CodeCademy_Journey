// Create the secretMessage array below
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animals => animals[0]);
console.log(secretMessage.join(''));

// Create the smallNumbers array below
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumbers => bigNumbers/100);
console.log(smallNumbers);

