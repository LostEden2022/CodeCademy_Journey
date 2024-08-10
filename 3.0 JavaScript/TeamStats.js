const team = {
    _players: [
      { firstname: "Michael", lastname: "Jordan", age: 50 },
      { firstname: "Kobe", lastname: "Bryant", age: 30 },
      { firstname: "Dennis", lastname: "Rodman", age: 40 },
    ],
  
    _games: [
      { opponent: "Lakers", teamPoints: 100, opponentPoints: 60 },
      { opponent: "Bulls", teamPoints: 80, opponentPoints: 70 },
      { opponent: "Kings", teamPoints: 90, opponentPoints: 80 },
    ],
  
    //Getter method:
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    // Adding data:
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstname: newFirstName,
        lastname: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
  
    addPoints(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoins: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      team.addGame.push(games);
    },
  };
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players);
  team.addPlayer("Titans", 100, 98);
  console.log(team.games);
  
