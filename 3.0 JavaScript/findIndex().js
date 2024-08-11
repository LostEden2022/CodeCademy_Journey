const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(foundAnimal => foundAnimal === "elephant");
console.log(foundAnimal);

const startsWithS = animals.findIndex(startsWithS => startsWithS[0] === "s" ? true : false);
console.log(startsWithS);
