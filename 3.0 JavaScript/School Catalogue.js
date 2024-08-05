class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(val) {
    if (typeof val === 'number') {
      this._numberOfStudents = val;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const random = Math.floor(Math.random() * (substituteTeachers.length));
    return substituteTeachers[random];
  }
};

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
};

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
  }
};

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
    return (this._sportsTeams);
  }
};

const patrioticSchool = new PrimarySchool('Patriotic School', '360 students', 'Students have 30 minutes, after dismissal to leave the premise.');
patrioticSchool.quickFacts();
School.pickSubstituteTeacher(['Patirot 1', 'Patriot 2', 'Patriot 3']);
const jFK = new HighSchool('John F. Kennedy', 316, ['Shooting', 'Hiking', 'Camping']);
jFK.sportsTeams;
