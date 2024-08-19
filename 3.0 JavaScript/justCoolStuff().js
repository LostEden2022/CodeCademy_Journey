const justCoolStuff = (coolStuff, myStuff) => coolStuff.filter(justCoolStuff => myStuff.includes(justCoolStuff))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(coolStuff, myStuff) {
      function isInmyStuff(item){
            for(let i = 0; i<myStuff.length; i++){
                  if (myStuff[i] === item){
                        return true
                  }
            }
            return false 
      }
      return coolStuff.filter(isInmyStuff)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
