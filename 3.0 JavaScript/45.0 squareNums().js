const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = numbers => numbers.map(toSquare) 

/*
// Using an anonymous function:
const squareNums = numbers => numbers.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(numbers) {
    return numbers.map(toSquare)
}
*/