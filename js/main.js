

//form creation function

function formCreationFunc (formId, formName, formClass, formMethod, formAction) {

    const formElement = document.createElement('form');
    formElement.id = formId;
    formElement.className = formClass;
    formElement.setAttribute('name', formName);
    formElement.setAttribute('method', formMethod);
    formElement.setAttribute('action', formAction);

    return formElement;
}

// console.log(formCreationFunc('form_examp', 'myForm', 'form-control', 'Get', 'js/form-submission.js'));


function inputCreationFunc (inputId, inputName, inputType, inputClass, inputPlaceholder) {

    const formInput = document.createElement('input');

    formInput.id = inputId;
    formInput.setAttribute('name', inputName);
    formInput.setAttribute('type', inputType);
    formInput.className = inputClass;
    formInput.setAttribute('placeholder', inputPlaceholder);

    return formInput;
    // return inputName;
    // return {nameForInput: inputName};
}

//label function
const labelCreationFunc = (forElementName, text) => {

    const label = document.createElement('label');
    label.setAttribute('for', forElementName);
    label.innerText = text;
    return label; 
}

// const nameInput = inputCreationFunc('usernameInput', 'userName', 'text', 'form-control', 'Enter name here');

// const emailInput = inputCreationFunc('emailInput', 'email', 'email', 'form-control', 'Enter email here');

// const subjectInput = inputCreationFunc('subjectInput', 'subject', 'text', 'form-control', 'Enter subject here');

// console.log(emailInput);
// console.log(subjectInput);
// console.log(nameInput);

function masterFormFunc () {
    
    //formId, formName, formClass, formMethod, formAction
    const formFunc = formCreationFunc('form_examp', 'myForm', 'form-control', 'Get', 'js/form-submission.js');

    //inputId, inputName, inputType, inputClass, inputPlaceholder
    const nameInput = inputCreationFunc('usernameInput', 'userName', 'text', 'form-control', 'Enter name here');

    //forElementName, text
    const labelForInput = labelCreationFunc('username', 'test label');
    
    console.log(formFunc);

    formFunc.appendChild(labelForInput);
    formFunc.appendChild(nameInput);

    // return masterFormFunc;
}

masterFormFunc();