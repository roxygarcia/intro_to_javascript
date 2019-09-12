const container = document.createElement('main');
//another way to add class to element
// container.className = 'container';
container.classList.add('container');

console.log(container);
//how to remove class
// container.classList.remove('container);

document.body.appendChild(container);
//becareful with entering raw html into your js code because you make yourself vulnerable to hacking...innerHTML
container.innerHTML = '<h1>HELLO</h1>';
console.log(container);


function movieQuote () {
    alert('To infinity and beyond!');
}

let timer;

function callQuote () {
    // let timer = setTimeout(movieQuote, 5000);
    timer = setInterval(movieQuote, 3000);
    console.log('triggered');
}

function stopFromRunning () {
    let stop = clearInterval(timer);
}

const button = document.createElement('button');
button.setAttribute('onclick', 'callQuote()');
button.innerText = 'Click for a movie quote';
button.className = 'btn btn-primary btn-lg';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border-danger border';
stopButton.setAttribute('onclick', 'stopFromRunning()');
stopButton.innerText = 'STOP';

button.addEventListener('click', () => {
    container.appendChild(stopButton);
});

////////////////////////////////////////////////////////////

const storageButton = document.createElement('button');
storageButton.className = 'alert alert-danger border-danger border';
storageButton.innerText = 'TEST';

storageButton.addEventListener('click', () => {
//Session Storage...is there until you close your session/browser
sessionStorage.setItem('Temporary', 'Every problem is temporary');
sessionStorage.getItem('TEMPORARY');


//Local Storage....is there until you clear it
localStorage.setItem('DEATH', 'Except for death - Grace');
localStorage.getItem('Death');

});

/////////////////////////////////////////////

//anonymus function triggers another function within
const example = function(param) {
    return test(param);
}

function test(testParam) {
    alert(testParam);
}

example('Okay I see what you did there tho');

//another example
// const exampleTwo = function(param, anything) {
//     return test(param, anything);
// }

// function testTwo(testParam, okay) {
//     alert(testParam + okay);
// }

// exampleTwo('Okay I see what you did there tho', 'Another one');