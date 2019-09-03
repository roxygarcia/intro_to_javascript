const container = document.querySelector('.container');
console.log(container);

const h1 = document.querySelector('h1');

// console.log(h1);
// let message = h1.innerHTML = 'I am a message.';
// console.log(h1.textContent);

//creating element and adding/injecting inside of your DOM
function globalListItems() {
    //create a ul/ol, li, with any classes, attributes or ids needed

    //create ul
    const ul_element = document.createElement('ul');
    console.log('unordered list', ul_element);

    //create list item
    const li_element = document.createElement('li');
    console.log('list item', li_element);

    //attributes/classes/id
    li_element.className = 'list-group-item list-group-item-info';
    console.log('li with classes', li_element);
    li_element.innerHTML = 'I am a list item.';
    li_element.id = 'mySpecialListItem';

    // const image_element = document.createElement('img');
    // image_element.setAttribute('class', 'img-responsive');
    // image_element.setAttribute('src', '../img/example.jpg');
    // console.log(image_element);

    //append li to ul, ul to container....child to parent relationship
    ul_element.appendChild(li_element);
    console.log('complete ul', ul_element);

    container.appendChild(ul_element);
    console.log(container);
}

//call your function in order for it to run
globalListItems();


//in class practice, create a card in html
function cardPractice () {

    //create main div
    const mainDiv = document.createElement('div');
    console.log('created div tag', mainDiv);

    //attributes/classes for main div
    mainDiv.className = 'panel panel-default text-center col-md-6';
    console.log('added classes to main div', mainDiv);

    //create col-md-4 div
    const col4Div = document.createElement('div');
    col4Div.className = 'col-md-4';
    console.log('added class', col4Div);

    //append col-md-4 div to main div
    mainDiv.appendChild(col4Div);
    console.log('append child to main div', mainDiv);

    //create h1 tag
    const h1_tag = document.createElement('h1');
    col4Div.appendChild(h1_tag);
    h1_tag.className = 'panel-title'
    h1_tag.innerHTML = 'Happy Monday';
    console.log('append h1 tag', col4Div);

    //append main div to container
    container.appendChild(mainDiv);
    console.log('append main div to', container);

    //create img tag inside of col-md-4
    const img_tag = document.createElement('img');
    img_tag.className = 'img-responsive';
    img_tag.setAttribute('src', '../img/hero_1.jpeg');
    img_tag.setAttribute('alt', 'card image');

    //append img tag to col-md-4
    col4Div.appendChild(img_tag);
    console.log('append img to', col4Div);

    //create paragraph tag
    const para_tag = document.createElement('p');
    col4Div.appendChild(para_tag);
    para_tag.innerHTML = 'Four more days till the weekend';

    // create i...link tag
    const i_tag = document.createElement('i');
    i_tag.className = 'fab fa-twitter';
    col4Div.appendChild(i_tag);

    const a_tag = document.createElement('a');
    a_tag.setAttribute('href', '#');
    i_tag.appendChild(a_tag);

    console.log('append p tag', container);
}

cardPractice();