const finalGrade = (midterm, final, homework) => {
    if (
      midterm < 0 ||
      midterm > 100 ||
      final < 0 ||
      final > 100 ||
      homework < 0 ||
      homework > 100
    ) {
      return "You have entered an invalid grade.";
    }
    let average = (midterm + final + homework) / 3;
    if (average <= 59) {
      return "F";
    } else if (average <= 69) {
      return "D";
    } else if (average <= 79) {
      return "C";
    } else if (average <= 89) {
      return "B";
    } else if (average <= 100) {
      return "A";
    }
  };
  
  // Uncomment to test:
  console.log(finalGrade(75, 85, 95)); 
  // Should print "B"
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(finalGrade(70, 70, 70)); 
  
