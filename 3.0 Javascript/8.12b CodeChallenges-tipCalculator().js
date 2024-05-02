const tipCalculator = (quality,total) => {
    switch (quality) {
      case "bad":
        return total * 0.05;
      case "ok":
        return total * 0.15;
      case "good":
        return total * 0.20;
      case "excellent":
        return total * 0.30;
      default:
        return total * 0.18;
    }
  }
  
  
  // Uncomment to test:
  console.log(tipCalculator("good", 100)) 
  //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(tipCalculator("kinda", 100)) 
  