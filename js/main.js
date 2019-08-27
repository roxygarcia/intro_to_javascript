//take home day 4 - create program using arrays and loops for our todo List

let todoListArr = [];

// prompt user for todo list and capture answer into todoList array
const todoListAlert = alert('Please let us know what is on your todo list for this weekend. You will be prompted shortly...');

const itemOne = prompt('What is first item on your todo list?');
todoListArr[0] = (`${itemOne}`);
console.log(todoListArr);

const itemTwo = prompt(`What is second item on your todo list?`);
todoListArr[1] = (`${itemTwo}`);
console.log(todoListArr);

const itemThree = prompt('What is the third item on your list?');
todoListArr[2] = (`${itemThree}`);
console.log(todoListArr);

//check if my todoList array is in fact an array
console.log(Array.isArray(todoListArr));

let secondTodoListArr = [
    [itemOne],
    [itemTwo],
    [itemThree]
];

//create a for loop to find out the number of days each task will take to complete
for (i = 0; i < todoListArr.length; i++) {
    console.log(`${todoListArr[0]} will take 1 day.
    ${todoListArr[1]} will take 3 days.
    ${todoListArr[2]} will day 2 days.`);
}

//another way of doing for loop using secondTodoListArr because you can "push" to multi arrays but not single

const limit = 3;
for(j = 0; j < limit; j++) {
    secondTodoListArr[j].push(`This will take ${Math.floor(Math.random() * 15)}`);
}

//create a while loop to find the task that will take the longest and console log it
// let x = 0;
// while (x <= 10) {
//     console.log(x);
//     x++;

let x = 0;
largest = 0;

while (x < todoListArr.length) {
    console.log(`This todo - ${todoListArr[x]} - will take approximately ${Math.floor(Math.random() * 15)} days.`);
    x++;

    largest = Math.max(largest);

    console.log(largest);
}