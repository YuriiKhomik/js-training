// importing products from data/products.js (it works only when type "module" added to scrypt in html)

import products from './data/products.js';

// console.log(products)

// // adding/deleting class to HTML element

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');
// navEl.classList.replace('super-cool', 'qwerty');

// // toggle class in HTML element
// const magicBtn = document.querySelector('.magic-btn');
// magicBtn.addEventListener('click', () => {
//     navEl.classList.toggle('qwertyqqq');
// });

// // check for contain class in HTML element
// console.log(navEl.classList.contains('qwertyyy'));

// // // search using attributes in order to change them

// const currentPageUrl = '/contacts';
// const linkEl = document.querySelector(
//     `.site-nav__link[href="${currentPageUrl}"]`,
// );
// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');



// /////////////////////////////////////////////////////////////////

// DOM NAVIGATION

// /////////////////////////////////////////////////////////////////

// // quick access to HTML elements

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.firstElementChild);



// _____________________________________________________________________

// CREATE ELEMENT

// create in memory
// const titleEl = document.createElement('h1');
// // add class
// titleEl.classList.add('page-title');
// // add content
// titleEl.textContent = 'This is page title!!'
// // console.log(titleEl);

// // add to HTML via appendChild (add in the end of PARENTS element)
// // document.body.appendChild(titleEl);
// // console.log(document.body);





// create in memory
// const imageEl = document.createElement('img');
// imageEl.src = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-versailles-gardens.jpg';
// imageEl.alt = 'France';
// imageEl.width = 300;


// // create in memory 2 elements (hero title + image)
// const heroEl = document.querySelector('.hero');
// // heroEl.appendChild(titleEl);
// // heroEl.appendChild(imageEl);
// // OR VIA ONE OPERATION (use when need to add 2 or more neighbours into parent element)
// heroEl.append(titleEl, imageEl);



// create in memory 2 elements
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'User profile';
// navLinkEl.href = "/profile";
// console.log(navLinkEl)

// put one element into another
// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);


// // put united elements into parents HTML element
// const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);

// put united element into parents beginning
// const navEl = document.querySelector('.site-nav');
// navEl.insertBefore(navItemEl, navEl.firstElementChild);

// // put united element as second last parents child 
// const navEl = document.querySelector('.site-nav');
// navEl.insertBefore(navItemEl, navEl.lastElementChild);

// // put united element anywhere you want
// const navEl = document.querySelector('.site-nav');
// navEl.insertBefore(navItemEl, navEl.children[2]);


// _____________________________________________________________________

// CREATE ARRAY OF ELEMENTS
// use div 'color-picker' in html

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const option = colorPickerOptions[5];

// create one element:
// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log(buttonEl);


// PEREBYRAYEMO V TSYKLI IN ORDER TO CREATE ALL BUTTONS ALL AT ONCE (OLDSCHOOL)


// const colorPickerContainerEl = document.querySelector('.js-color-picker')

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1){
//     // console.log(colorPickerOptions[i]);
//     const option = colorPickerOptions[i];

    // const buttonEl = document.createElement('button');
    // buttonEl.type = 'button';
    // buttonEl.classList.add('color-picker__option')
    // buttonEl.textContent = option.label;
    // buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl)
// }

// // console.log(elements);

// colorPickerContainerEl.append(...elements);


// CREATE ALL BUTTONS ALL AT ONCE (NEWSCHOOL)


// const colorPickerContainerEl = document.querySelector('.js-color-picker')

// const elements = colorPickerOptions.map(option => {
    
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// });

// console.log(elements);

// colorPickerContainerEl.append(...elements);


// CREATE ALL BUTTONS VIA FUNCTION


// const colorPickerContainerEl = document.querySelector('.js-color-picker')

// const makeColorPickeroptions = (options) => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('color-picker__option')
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl;
//     });
// };

// const elements = makeColorPickeroptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);


// _____________________________________________________________________

// CREATING CARD OF PRODUCT


// const product = {
//     name: 'Steering wheels',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, impedit aliquid! Doloribus fugiat libero, voluptatem culpa minima eius esse sapiente.',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.classList.add('product__name')
// nameEl.textContent = product.name;

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product_descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Price: ${product.price}`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);


// _____________________________________________________________________


// CREATING CARD OF PRODUCT USING ARRAY OF OBJECTS (using import on the top∆∆∆)
// (using destructurization)

// creating 1 element (1 card with product)
const makeProductCard = ({ name, description, price }) => {

    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    nameEl.classList.add('product__name')
    nameEl.textContent = name;

    const descrEl = document.createElement('p');
    descrEl.textContent = description;
    descrEl.classList.add('product_descr');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Price: ${price}`;
    priceEl.classList.add('product__price');
    
    productEl.append(nameEl, descrEl, priceEl);

    return productEl;
};

// console.log(makeProductCard(products[2]));

// creating array of elements (multiple cards with products) function 'makeProductCard' is used as callback
const elements = products.map(makeProductCard);
console.log(elements);

// and adding this cards to parent HTML
const productContainerEl = document.querySelector('.js-products');
productContainerEl.append(...elements);






















