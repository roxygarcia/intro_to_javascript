//Anonymus function
let example = function () {
    console.log('hello there');
}

//naming function
function exampleName() {
    console.log('hello there');
}

//example();
//exampleName();

//functions, before is a parameter, it's a placeholder until the argumented value comes into play
//after, is now an arguement

//ARROW FUNCTIONS do not need pararenthese because they are single values, cannot be hoisted
// const turnValueUppercase = val => console.log(val.toUpperCase());
// const multiplyValues = (arg1, arg2) => {return arg1 * arg2};
// turnValueUppercase('hi');
// console.log(multiplyValues(2, 6));

// turnValueUppercase('hello');
// function turnValueUppercase(val) {
//     console.log(val.toUpperCase());
// }


//create an array of three names
let names = [
    'Roxy',
    'Janet',
    'Jess'
];

//create a greeting that will be taking in a name value
// const greeting = name => `Good evening, ${name}`;

//test result first:
// console.log(`The array of names ${names}`, `greeting function value: ${greeting('Example')}`);

// const limit = 3;
//loop through names and add greeting funtion to it
    //use the length of your array if you have no idea how long your array will be, you do and it will always be constant then use a limit
// for(r = 0; r < names.length; r++) {
//     console.log(greeting(names[r]));
// }


//grab elements from HTML:
// const h1 = document.getElementById('greeting');
// const myList = document.getElementById('groceryList');
// const listItem = document.getElementById('groceryItem');
// const myInput = document.getElementById('getGroceryItem');

//It's okay to use your ID names in html for you variables in java
const greeting = document.getElementById('greeting');
const groceryList = document.getElementById('groceryList');
const groceryItem = document.getElementById('groceryItem');
const getGroceryItem = document.getElementById('getGroceryItem');

let arrayofGroceryItems = [];

greeting.innerHTML = 'Roxy\'s Grocery List';

//create function to add onto grocery list

//using a arrow function
// const addGroceryItem = (arr, value) => arr.push(value);
// console.log(addGroceryItem(arrayofGroceryItems, 'Carrots'));
// console.log(arrayofGroceryItems);

function addGroceryItem(arr, value) {
    arr.push(value);
}

function ejectGroceryItemToList(values) {
    //grab list item
    //goal: push array items to list on html
    for(grocery = 0; grocery < arrayofGroceryItems.length; grocery++) {
        let li = document.getElementById(`groceryItem${grocery + 1}`);
        // now that I can loop through my list items, I can now eject EACH array val into EACH separate list item
        li.innerHTML = values[grocery];

        //add value to array using input
        // arrayofGroceryItems.push(document.getElementById('getGroceryItem').value);
        // console.log(arrayofGroceryItems);
    }
}

addGroceryItem(arrayofGroceryItems,'Asparagus');
addGroceryItem(arrayofGroceryItems,' Carrots');
addGroceryItem(arrayofGroceryItems,' Lettuce');
addGroceryItem(arrayofGroceryItems,' Cabbage');
addGroceryItem(arrayofGroceryItems,' Bell Peppers');
console.log(arrayofGroceryItems);
ejectGroceryItemToList(arrayofGroceryItems);