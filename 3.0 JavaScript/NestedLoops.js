const bobsFollowers = ["paul", "john", "george", "ringgo"];
const tinasFollowers = ["paul", "john", "yoko"];
let mutualFollowers = [];
for (let x = 0; x < bobsFollowers.length ; x++ ) {
  for (let y = 0; y < tinasFollowers.length; y++) {
    if (bobsFollowers[x] === tinasFollowers[y]) {
      mutualFollowers.push(tinasFollowers[y]);
    }
  }
}

//console.log(mutualFollowers);
