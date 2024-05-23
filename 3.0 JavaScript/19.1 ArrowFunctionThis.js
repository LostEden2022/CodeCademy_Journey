const robot = {
    energyLevel: 100,
    checkEnergy() {
      return `Energy is currently at ${this.energyLevel}%.`;
    }
  };
  console.log(robot.checkEnergy());