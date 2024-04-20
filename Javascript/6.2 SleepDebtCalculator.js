//Extra practice:
//Get the total sleep hours that you actually slept:
const getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 6;
//console.log(getActualSleepHours());

//Get the ideal sleep hours that you prefer:
const getIdealSleepHours = idealHours => idealHours *=7;
//console.log(getIdealSleepHours(8));

//Calculate the sleep debt, if any:
var calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
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

