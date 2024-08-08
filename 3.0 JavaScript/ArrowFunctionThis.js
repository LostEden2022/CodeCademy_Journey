const robot = {
    energyLevel: 100,
    checkEnergy() {
      return `Energy is currently at ${this.energyLevel}%.`;
    }
  };
  console.log(robot.checkEnergy());

//or 

const robot = {
    energyLevel: 100,
    checkEnergy: function() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  };
  
  robot.checkEnergy();
