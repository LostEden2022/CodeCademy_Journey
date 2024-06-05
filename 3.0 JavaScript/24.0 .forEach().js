const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate using function;
fruits.forEach(function(fruitItem) {
  console.log('I want to eat a ' + fruitItem + '.')
});

//or itirate using an arrow function:
fruits.forEach(fruitItem  => {
  console.log('I want to eat a ' + fruitItem + '.')
});

//or itirate as a callback function:
function printFruit(fruitItem){
  console.log('I want to eat a '+ fruitItem + '.');
}
fruits.forEach(printFruit);

