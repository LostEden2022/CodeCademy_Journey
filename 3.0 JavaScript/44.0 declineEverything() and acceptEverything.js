const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = veggies => {
  veggies.forEach(politelyDecline)
}

/*
// As a function declaration:
function declineEverything(veggies) {
      veggies.forEach(politelyDecline)
}
*/


// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = veggies => {
  veggies.forEach(veggieItem => {
    console.log(`Ok, I guess I will eat some ${veggieItem}.`)
  })
}

/*
// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = veggies => {
      veggies.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<veggies.length; i++){
    console.log(`Ok, I guess I will eat some ${veggies[i]}.`)
 }
}
*/