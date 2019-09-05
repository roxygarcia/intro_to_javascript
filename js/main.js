//making a form

//adding bootstrap container to the body/my form
const body = document.body;
const container = document.createElement('div');

container.className = 'container text-center';

//double check container got appended to body
// let test = body.appendChild(container);

// console.log('my html', test);

//create row and add div for col-md-.....widths
const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-3 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

console.log(body);

const testForm = document.createElement('form');
const formGroup = document.createElement('div');
const emailInput = document.createElement('input');
const subjectInput = document.createElement('input');
const textArea = document.createElement('textarea');
const button = document.createElement('button');
const emailLabel = document.createElement('label');
const subjectLabel = document.createElement('label');
const textAreaLabel = document.createElement('label');

testForm.id = 'testForm';
emailInput.id = 'email';
subjectInput.id = 'subject';
textArea.id = 'message';
testForm.className = 'contact-form';
button.className = 'btn btn-default';
formGroup.className = 'form-group';

testForm.setAttribute('method', 'GET');
testForm.setAttribute('action', 'js/form-submission.js');
testForm.setAttribute('name', 'myForm');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('class', 'form-control');
emailInput.setAttribute('placeholder', 'My input email');
subjectInput.setAttribute('type', 'text');
subjectInput.setAttribute('name', 'subject');
subjectInput.setAttribute('class', 'form-control');
subjectInput.setAttribute('placeholder', 'My Subject');
textArea.setAttribute('type', 'text');
textArea.setAttribute('name', 'textarea');
textArea.setAttribute('class', 'form-control');
textArea.setAttribute('placeholder', 'Type message here');
button.setAttribute('type', 'submit');
button.innerText = 'Sumbit Now';
emailLabel.setAttribute('for', 'email');
emailLabel.innerText = 'Email';
subjectLabel.setAttribute('for', 'subject');
subjectLabel.innerText = 'Subject';
textAreaLabel.setAttribute('for', 'message');
textAreaLabel.innerText = "Your Message";


content.appendChild(testForm);
testForm.appendChild(formGroup);
formGroup.appendChild(emailLabel);
formGroup.appendChild(emailInput);
formGroup.appendChild(subjectLabel);
formGroup.appendChild(subjectInput);
formGroup.appendChild(textAreaLabel);
formGroup.appendChild(textArea);
formGroup.appendChild(button);


console.log(testForm);

//creating our form using a function to make it dynamic...espeially when you are re-creating things/elements over and over

function globalFormElements (element, elementtype, elementName, elementClass, elementPlaceholder, elementId) {

    //element: create the type of element you seek
    const newElement = document.createElement(element);

    newElement.setAttribute('type', elementtype);
    newElement.className = elementClass;
    newElement.setAttribute('name', elementName);
    newElement.setAttribute('placeholder', elementPlaceholder);
    newElement.id = elementId;
    return newElement;
}

const textAreaElement = (textAreaName, textAreaPlaceholder, textAreaClass, textAreaId, textAreaCols = 4, textAreaRows = 2) => {

    const element = document.createElement('textarea');
    element.setAttribute('type', 'text');
    element.className = textAreaClass;
    element.setAttribute('name', textAreaName);
    element.setAttribute('placeholder', textAreaPlaceholder);
    element.setAttribute('cols', textAreaCols);
    element.setAttribute('rows', textAreaRows);
    element.id = elementId;
    return element;
}

//label generator using function, making it dynamic

const labelGenerator = (forElement, text) => {

    const label = document.createElement('label');

    //
    label.setAttribute('for', forElement);
    label.innerText = text;
    return label;
}


//calling function to create form
console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, let us know your concerns here.'));

// const labelForSubject = labelGenerator('subject', 'Subject');
// const labelForTextArea = labelGenerator('message', 'Message');

// formGroup.appendChild(labelForTextArea);
// formGroup.appendChild(labelForSubject);

