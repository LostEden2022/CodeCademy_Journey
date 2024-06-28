// Write your code here:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

aliens.forEach(function(alienGreeting){
  console.log(`Oh powerful ` +  alienGreeting +`, we humans offer our unconditional surrender!`)
});

const greetAliens = arr => {
  for (let i=0; i < arr.length; i++) {
console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
  }
}

// When you're ready to test your code, uncomment the below and run:
//greetAliens(aliens);