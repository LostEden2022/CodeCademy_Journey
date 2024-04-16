// My current age:
var myAge = 41;

// A dog's early years:
let earlyYears = 2;
earlyYears *= 10.5;

// A dog's later years:
let laterYears = myAge - 2;
laterYears *= 4;

// Uncomment if you want to check your work at this point
console.log(
  `A dog's early years before 2 years old is equal to ${earlyYears} dog years.`
);
console.log(
  `A dog's later years after 2 years old is equal to ${laterYears} dog years.`
);

// Add early years and later years to determine a dog's actual age:
var myAgeInDogYears = earlyYears + laterYears;

// Prints my age in dog years:
var myName = "Ryan".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`
);
