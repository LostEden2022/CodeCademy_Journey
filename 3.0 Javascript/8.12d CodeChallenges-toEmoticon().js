const toEmoticon = (feeling) => {
    switch (feeling) {
      case "shrug":
        return '|_{"}_|';
      case "smiley face":
        return ":)";
      case "frowny face":
        return ":(";
      case "winky face":
        return ";)";
      case "heart":
        return "<3";
      default:
        return "|_(* ~ *)_|";
    }
  };
  
  // Uncomment to test:
  console.log(toEmoticon("whatever"));
  // Should print  '|_(* ~ *)_|'
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(toEmoticon("shrug"));
  console.log(toEmoticon("heart"));
  