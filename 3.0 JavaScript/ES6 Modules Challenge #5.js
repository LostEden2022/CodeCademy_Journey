// In this module you will find two functions which have been declared for you, changeText() and changeToFunkyColor(). The website being rendered wants to make use of these functions but currently, they aren’t being exported.

// Using the default export syntax, export an object representing the module and containing the changeText() and changeToFunkyColor() functions.

// Note: Upon completing this challenge, the text will change to "You did it" and will be set to change color every 0.2 seconds.

function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// export the functions here

export default { 
  changeText: changeText,       
  changeToFunkyColor: changeToFunkyColor 
}

/* 
or...

const module = { 
  changeText: changeText,       
  changeToFunkyColor: changeToFunkyColor 
}
export { module as default }
*/
