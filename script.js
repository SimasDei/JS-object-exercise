/////////////////////////////////
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
/*
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
*/

////////////////////////
// Primitives vs Objects
let a = 23;
let b = a;
a = 46;

let obj1 = {
  name: 'John',
  age: 28
};

let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);

////////////
// Functions
let age = 30;
let obj = {
  name: 'Dude',
  city: 'Vilnius'
};

function change(a, b) {
  a = 35;
  b.city = 'Chicago';
}

change(age, obj);

let years = [1999, 2000, 1942, 2012, 2019];

function calcArray(arr, fn) {
  let resArray = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    resArray.push(fn(element));
  }
  return resArray;
}

function calculateAge(el) {
  result = 2019 - el;
  if (result < 0) {
    return 'Who cares about the future.';
  }
  return result;
}

function isLegal(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

let ages = calcArray(years, calculateAge);
let legal = calcArray(ages, isLegal);
let rates = calcArray(ages, maxHeartRate);
console.log(ages);
console.log(legal);
console.log(rates);

///////////////////////////////
// Functions Returning Functions
function interviewQuestion(job) {
  switch (job) {
    case 'designer':
      return function(name) {
        console.log(name + " A Designer? It's a Job you say? Coool...");
      };
      break;
    case 'teacher':
      return function(name) {
        console.log(name + ' Can you teach someone to become a Jedi?');
      };

    default:
      return function(name) {
        console.log('Ahoy there o/' + name);
      };
      break;
  }
}

let teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Dude');

let designerQuestion = interviewQuestion('designer');

designerQuestion('Dudette');

interviewQuestion('teacher')('Russel Crow');

////////////////////////////////////////////////
// Immediately Invoked Function Expressions IIFE
function game() {
  let score = Math.random() * 16;
  console.log(score >= 5);
}

game();

(function(goodLuck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(2);

////////////
//  Closures
function retirement(retirementAge) {
  let a = ' years left until retirement';
  return function(yearOfBirth) {
    let age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

let retirementUs = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementUs(1990);
retirementIceland(1990);

// retirement(65)(1989);

function retByCountry(country) {
  switch (country) {
    case 'US':
      retirementAge = 66;
      break;
    case 'DE':
      retirementAge = 67;
      break;
    case 'IC':
      retirementAge = 65;
      break;
    default:
      break;
  }
  let a = ' years left until retirement';
  return function(yearOfBirth) {
    let age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

let retUS = retByCountry('US');
retUS(1970);

retByCountry('DE')(1988);

////////////////////////////////
// Function Bind, Call and Apply
let greg = {
  name: 'Old Greg',
  age: 99,
  job: 'SwampThing',
  presentation: function(style, timeOfDay) {
    switch (style) {
      case 'formal':
        console.log(
          `Good ${timeOfDay} fellow Fellows of the Fellowship. My name is: ${
            this.name
          }, and I'm a ${this.job}. I have been on this planet for ${
            this.age
          } years.`
        );
        break;
      case 'friendly':
        console.log(
          ` Sup y'all it's me, it's ya boy ${
            this.name
          }, it's the perfect ${timeOfDay} to be drinking Baileys from a shoe.`
        );
      default:
        break;
    }
  }
};

greg.presentation('friendly', 'evening');

let layla = {
  name: 'Layla',
  age: 22,
  job: 'designer'
};

greg.presentation.call(layla, 'formal', 'morning');

// greg.presentation.apply(emily, ['friendly', 'afternoon']);

let gregFriendly = greg.presentation.bind(greg, 'friendly');

gregFriendly('afternoon');

laylaFriendly = greg.presentation.bind(layla, 'friendly');

laylaFriendly('evening');

function legalAge(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arrRes.push(fn(element));
  }
  return arrRes;
}

function calcYears(arr, fn) {}
