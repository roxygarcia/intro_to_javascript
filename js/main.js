// else if statments

// const greeting = "hello";

// if(greeting === "hi") {
//     console.log('Yes, this matches to HI');
// } else if (greeting == "hello") {
//     console.log('Yes, this matched HELLO');
// } else if (greeting === 1) {
//     console.log('Yeah this matches an Integer of one');
// } else {
//     console.log('None of them matched.');
// }

// value is just a placeholder, until your real life value comes thru
// parameters inside functions will not be parameters you use later...so basically try not to label your parameter values the same as your variable names
// function changeToLowercase(value) {
//     return value.toLowerCase();
// }

// console.log(changeToLowercase('HI'));

// Extra tricks
// function getWeatherReport(day, time, temperature) {
//     const correctDayFormat = day.toUpperCase();
//     const correctTimeFormat = time.toLowerCase();
//     const correctTemperatureFormat = parseInt(temperature);
//     // comment out if using 3 last lines of this function
//     const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}.  The temperature is a rockin ${correctTemperatureFormat} degrees.`;
//     return summary;

//     //comment this out if using middle section
//     const getSummary = this.getWeatherSummary(correctDayFormat, correctTimeFormat, correctTemperatureFormat);
//     return getSummary;
// }

// function getWeatherSummary(day, time, temperature) {
//     const summary = `Today is ${day} and the time is ${time}. The temperature is a rockin ${temperature} degrees.`;
//     return summary;
// }

// console.log(getWeatherReport('wednesday', '6:00PM', '90'));

// In class example Array
// ARRAYS start with 0
let myArrayofRandomInfo = [
    'Toy Story',
    6,
    false,
    '2006'
];

// length gives you the total # of values in your array
console.log(myArrayofRandomInfo.length);
// this will give you the value in position #3 in your array
console.log(myArrayofRandomInfo[3]);
// will give you the first value of your array, arrays start with zero
console.log(myArrayofRandomInfo[0]); 
// how to check if my "array" is in fact an array
console.log(Array.isArray(myArrayofRandomInfo));

myArrayofRandomInfo.push('I like Volleyball!'); //adds onto the end of array
console.log(myArrayofRandomInfo.length); //checks length of array
console.log(myArrayofRandomInfo);
myArrayofRandomInfo.unshift('I am number one!'); //adds to the beginning of the array
console.log(myArrayofRandomInfo[0]);
myArrayofRandomInfo.pop(); //removes the LAST item in the array
console.log(myArrayofRandomInfo);
myArrayofRandomInfo.shift(); //removes the FIRST item in the array
console.log(myArrayofRandomInfo);

// myArrayofRandomInfo.splice(1, 1, 5);  //1st param: position, 2nd param: 1 - if you want to replace; 0 - if you want to add prior to position and not delete, 3rd param: content value
// console.log(myArrayofRandomInfo);


// let newArrayOfInfo = myArrayofRandomInfo.slice(1); //because slice creates a new array you must call it under a new var to express it
// console.log(newArrayOfInfo);

// let findPositionToRemove = newArrayOfInfo.indexOf('2006');
// console.log(newArrayOfInfo.indexOf('2006')); //give it a specific value that is in your array to get its position
// let refreshed = newArrayOfInfo.splice(findPositionToRemove, 1);
// console.log(refreshed);

// console.log(myArrayofRandomInfo.reverse());
// console.log(myArrayofRandomInfo.sort());

//In class excercise  - 5 arrays with fav movies & characters

let firstMovie = [
    'Nightmare Before Christmas',
    'Jack'
];

let secMovie = [
    'Max and Mary',
    'Max'
];

let thirdMovie = [
    'Shrek',
    'Donkey'
];

let fourthMovie = [
    'Caroline',
    'Caroline'
];

let fifthMovie = [
    'Toy Story',
    'Woody'
];

let allFavMovies = [
    firstMovie,
    secMovie,
    thirdMovie,
    fourthMovie,
    fifthMovie
];

console.log(allFavMovies);

// let titlesOfFavMovies = [];
// titlesOfFavMovies.push(allFavMovies[0][1], allFavMovies[1][1], allFavMovies[2][1]);


//LOOPS

//while loop, becareful with while loops it can crash your browser/computer...can go infinitely if you forget something...increments are outside
let x = 0;
while (x <= 10) {
    console.log(x);
    x++;
}

//For loop, do need to initialize a variable before, going to be within the pararentheses...going to go until a condition is met...increments, conditions are inside, one line
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for (let i = 20; i > 0; i--) {
//     console.log(i);
// }

for (let i = 0; i < 10; i++) {
    if (i == 4) {
        break;
    }
    console.log(i);
}

//will continue a for loop even if your condition is met or you use break to stop a certain part of a loop
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        continue;
    }
    console.log(i);
}

//DO WHILE, will run at least once even if the condition is not met...while loop will not run if condition isn't met

let i = 0;

do {
    console.log(i);
    i++;
} while(i < 10);

//  For Each
let arr3 = [1, 2, 3, 4];

arr3.forEach(function(x){
    console.log('I am ' + x);
});

// For of, 
let myString = "Hi, my name is Roxy";

for (i of myString) {
    console.log(i);
}

// For in

let people = [{
        firstName : 'Roxy',
        lastName : 'Garcia',
        age : 22
    },
    {
        firstName : 'Genesis',
        lastName : 'Garcia',
        age : 1
    }
];

for (person of people) {
    console.log(person.firstName);
}

// let people = {
//     firstName : 'Roxy',
//     lastName : 'Garcia',
//     age : 31
// };

//person is just a place holder, you can name it anything you want
// for (person in people) {
//     console.log(people[person]);
// }
