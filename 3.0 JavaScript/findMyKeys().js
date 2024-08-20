const findMyKeys = randomStuff => randomStuff.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(randomStuff) {
      let index = -1;
      for (let i = 0; i < randomStuff.length; i++) {
            if (randomStuff[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
