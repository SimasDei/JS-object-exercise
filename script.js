// ===> Function Constructor <===
/*
let dude = {
  name: 'Dude Bro',
  yearOfBirth: 2000,
  job: 'sloth'
};

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

dude = new Person('Dude', 2000, 'sloth');
let dudette = new Person('Dudette', 1999, 'designer');
let oldDude = new Person('Ancient Duder', 1966, 'retired');

dude.calculateAge();
dudette.calculateAge();
oldDude.calculateAge();

console.log(oldDude);
*/

// ===> Object.create <===

let personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

let dude = Object.create(personProto);
dude.name = 'Dude';
dude.yearOfBirth = 2000;
dude.job = 'sloth';

let dudette = Object.create(personProto, {
  name: { value: 'Dudette' },
  yearOfBirth: { value: 1999 },
  job: { value: 'designer' }
});
