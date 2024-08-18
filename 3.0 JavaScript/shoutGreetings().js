const shoutGreetings = greetings => greetings.map(word => word.toUpperCase() + '!');

/*
// As a function declaration AND using a loop:
function shoutGreetings(greetings) {
    let shoutArray = []
    for(let i = 0; i<greetings.length; i++){
        shoutArray.push(greetings[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

console.log(shoutGreetings(greetings))
