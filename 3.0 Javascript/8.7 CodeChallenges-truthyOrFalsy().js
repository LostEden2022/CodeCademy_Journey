const truthyOrFalsy = (value) => {
    if (value) {
      return true;
    } else {
      return false;
    }
  };
  
  // Uncomment to test:
  console.log(truthyOrFalsy(0));
  // Should print false
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(truthyOrFalsy(null));
  console.log(truthyOrFalsy(undefined));
  console.log(truthyOrFalsy(false));
  console.log(truthyOrFalsy(NaN));
  console.log(truthyOrFalsy(0));
  console.log(truthyOrFalsy(-0));
  console.log(truthyOrFalsy(""));
  