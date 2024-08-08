let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  //Write your code:
  spaceship.color = "glorious gold";
  spaceship.numEngines = 6;
  delete spaceship["Secret Mission"];
  
  //Uncomment to test:
  //console.log(spaceship);
