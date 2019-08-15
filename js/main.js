// var firstName = 'Roxy';
// var age = 31;

//example of const
//how to check length of string
// const firstName = 'Roxy';
// console.log(firstName.length);
// firstName = 'Roxana';

//old way
// console.log('My name is ' + firstName + ' and my age is ' + age);

//better way....use this in class....add back ticks when you introduce variables
// console.log(`My name is ${firstName} and my age is ${age}`);

// alert(`Hello, I am ${firstName}!`);

// const birthday = '06/06/1988';
// let fixDate = new Date(birthday);
// console.log(fixDate);

// let hello = new String('Hello, there.');
// alert(hello);

// const topThreeMovies = ['Lion King', 'A Star is Born', 'Ratatouille'];
// console.log(topThreeMovies);
// console.log(`my second top movie is: ${topThreeMovies[1]}`);


// Take home - Day 2

const questionFirst = prompt('What is your first name?');
const questionLast = prompt('What is your last name?');

console.log(`Your first name is ${questionFirst}.`);
alert(`Your last name is ${questionLast}.`);

const questionBday = prompt('When is your birthday?');
confirm(`Is your birthday ${questionBday}?`);

alert(`Thank you for confirming. Your birthday is ${new Date (questionBday)}.`);

