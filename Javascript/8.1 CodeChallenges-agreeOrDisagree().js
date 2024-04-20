const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
      return "You agree!";
    } else if (string1 !== string2) {
      return "You disagree!";
    }
  };
  
/*
// Alternate solutions:

// As a function declaration:
   function agreeOrDisagree (string1, string2) {
      if string1 === string {
          return "You agree!";
      } else {
          return "You disagree!"
      }
   };

// Using a ternary:
const agreeOrDisagree = (string1, string2) => string1 === string2 ? "You agree!" : "You disagree!";
*/

console.log(agreeOrDisagree("yep", "yep"));
  