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
