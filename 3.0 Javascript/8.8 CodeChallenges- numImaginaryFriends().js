const numImaginaryFriends = (claimedFriends) => 
   Math.ceil(claimedFriends * 0.25);

// Uncomment to test:
console.log(numImaginaryFriends(20));
// Should print 5

console.log(numImaginaryFriends(10));
// Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!
console.log(numImaginaryFriends(3));
