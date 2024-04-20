var getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 8;
      case "tuesday":
        return 8;
      case "wednesday":
        return 8;
      case "thursday":
        return 8;
      case "friday":
        return 8;
      case "saturday":
        return 8;
      case "sunday":
        return 8;
      default:
        console.log("Please input a day in the week.");
    }
  };
  //console.log(getSleepHours("monday"));
  
  //Get the total sleep hours that you actually slept:
  let getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  //console.log(getActualSleepHours());
  
  //Get the ideal sleep hours that you prefer:
  let getIdealSleepHours = () => {
    idealHours = 8;
    return idealHours * 7;
  };
  //console.log(getIdealSleepHours());
  
  //Calculate the sleep debt, if any:
  var calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("Awesome! You had the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You had slept ${actualSleepHours - idealSleepHours} hour/s more last week. Damn! Don't sleep too much!`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You had ${idealSleepHours - actualSleepHours} hour/s less sleep last week. You need more sleep!`); 
    } else {
      return "Error in the data you had inputted!";
    }
  };
  
  calculateSleepDebt();
  