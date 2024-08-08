// You are building a simple webpage that makes use of the module module.js. This module declares and exports two functions whose signatures are listed below:

// changeText(domElement, newText): changes the text of the provided domElement to the provided newText.
// changeToFunkyColor(domElement): changes the color of the provided domElement to a random color.
// You will be editing the file main.js. Complete the tasks below:

// Import changeText and changeToFunkyColor from ./module.js using the named import syntax.
// Call changeText() to change the text of the element stored in the header variable to "I did it!".
// Within the callback passed to setInterval, call changeToFunkyColor() passing in the element stored in the header variable.
// Note: Upon completing this challenge, the text will change to “I did it!” and will be set to change color every 0.2 seconds.

/* main.js */

// import the functions here, then uncomment the code below

const header = document.getElementById("header");

// call changeText here

setInterval(()=> {
  
  // call changeToFunkyColor() here

}, 200);
