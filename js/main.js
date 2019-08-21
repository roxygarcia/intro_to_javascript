// const exampleString = 'I am string.';
// const exampleObjectString = new String('1');
// const anotherString = 'I am a string.';
const h1 = document.getElementById('greeting');

// console.log(h1);

// function checkExamples() {
//     // if (exampleString == exampleObjectString) {
//     //     console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosly equal.`);
//     if (exampleString !== anotherString) {
//             console.log(`Yes, ${exampleString} and ${anotherString} are not equal.`);
//     } else {
//         console.log(`Sorry, they are equal.`);
//     }
// }

// checkExamples();

const luckyNumber = '3';

// if(luckyNumber > 5 || luckyNumber < 1) {
//     console.log('Sorry, your number is not lucky to me.');
// } else {
//     console.log(`Hey your lucky number ${luckyNumber}`);
// }

// if(luckyNumber === 5 || luckyNumber ==='3') {
//     console.log(`Hey your lucky number ${luckyNumber}`);
// } else {
//     console.log('Sorry, your number is not lucky to me.');
// }

// Try it out, in class practice
// const stringOne = 'I am string.';
// const stringTwo = new String('I am string.');

// if(stringOne == stringTwo) {
//     console.log(`Yes, ${stringOne} and ${stringTwo} are strictly equal.`);
// } else {
//     console.log(`${stringOne} and ${stringTwo} are not equal.`);
// }

// let a = 10;
// let b = 2;

// let result = 0;
// result++;
// console.log(result += a);

// let a = '5.99';
// let b = 2;
// let transformMe = parseInt(a);
// let transformMe = parseFloat(a, 2);
// let result = transformMe += b;
// console.log(`Before: ${a}, after: ${transformMe}`, typeof(a), typeof(transformMe));
// console.log(result);


// let hello = 'Hello ';
// let there = 'there!';
// let sentence = hello += there;
// console.log(sentence);

// let valueNan = 'I am indeed NaN';
// let testNan = isNaN(valueNan);

// if(testNan === true ? console.log('This is true.') : console.log('This is false.'));

// do not need if statement for simple true or false, ternaries
// testNan ? console.log('This is true.') : console.log('This is false.');

// if(testNan === true) {
//     let result = 'Yup, this is true.';
//     console.log('Yup, this is true.');
//     h1.innerHTML = result;
// } else {
//     let result = 'Nope, this is false.';
//     console.log('Nope, this is false.');
//     h1.innerHTML = result;
// }

// const askColor = prompt('Pick one of the following colors: red, blue, or orange. Await the following response...');

// switch(askColor) {
//     case 'red':
//         h1.innerHTML = `You chose ${askColor}.. which reminds me of that song. Lady In Red.. IS DANCING WITH ME...`;
//     break;
//     case 'blue':
//         h1.innerHTML = `You chose ${askColor}.. which reminds me of that song. Blue Ain't Your Color..`;
//     break;
//     case 'orange':
//         h1.innerHTML = `You chose ${askColor} - only thing that comes to mind is Halloween`;
//     break;
//     default:
//         h1.innerHTML = 'You did not follow the rules fam';
// }

// const askAge = prompt('Are you over 18?');

// console.log(`${askAge}`);

// switch(askAge) {
//     case 'No':
//         alert('You are not old enough to proceed.');
//     break;
//     case 'Yes':
//         alert('You may proceed.');
//     break;
// }

// const askOver80 = prompt('Are you under 80?');

// if (askOver80 == 'Yes') {
//     prompt('Do you like Star Wars?');
// } else {
//     prompt('Do you like prunes?');
// }


// Take Home Day 3

const yourName = prompt('What is your name?');

const favoriteColor = prompt('From the list provided, what is your favorite color? Red, Blue, Yellow, Green, Orange, Purple, Pink, Brown, Grey, or Black?');

switch(favoriteColor) {
    case 'Red':
        alert(`${yourName}, you chose ${favoriteColor}. Watch Orange is the New Black to find out about one of our favorite russians, RED!`);
    break;
    case 'Blue':
        alert(`${yourName}, you chose ${favoriteColor}. If you find yourself in Vegas make sure to watch the BLUE man group! You'll be in for a show!`);
    break;
    case 'Yellow':
        alert(`${yourName}, you chose ${favoriteColor}... Papoy, Bello, Para Tu, Me Want Banana.... If you're wondering where this words come from, make sure to checkout the YELLOW little guys from Despicable Me! Minions!!!!!`);
    break;
    case 'Green':
        alert(`${yourName}, you chose ${favoriteColor}. Now you made me crave green eggs and Ham! Dr. Suess here I come...`);
    break;
    case 'Orange':
        alert(`${yourName}, you chose ${favoriteColor}. Orange you glad I didn't say banana...`);
    break;
    case 'Purple':
        alert(`${yourName}, you chose ${favoriteColor}. The only thing comes to mind is Barney...I love you, you love me. We're a happy family....`);
    break;
    case 'Pink':
        alert(`${yourName}, you chose ${favoriteColor}. Who am I? I'm PINK, super skinny, tall, long face/snout...PINK Panther!`);
    break;
    case 'Brown':
        alert(`${yourName}, you chose ${favoriteColor}. YES, let's go get some of the best BROWN sweet gooey CHOCOLATE money can buy.`);
    break;
    case 'Grey':
        alert(`${yourName}, you chose ${favoriteColor}. Grey skies are just clouds passing over.`);
    break;
    case 'Black':
        alert(`${yourName}, you chose ${favoriteColor}.`);
    break;
}