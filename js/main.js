// let question;

function myFunk() {
    let question = prompt('Tell me your name.');
    console.log('Your name is ' + question);
} 

function myHobbies() {
    question = prompt('My Hobbies');
    console.log(question);
}

function grabElementAndSpitOutValue() {
    //get element from index
    const MAIN_DIV = document.getElementById('mainDiv');
    //write out in html
    MAIN_DIV.innerHTML = 'Hey, I am here';
    //execute
    console.log('This hit.');
}