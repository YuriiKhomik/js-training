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
const titleEl = document.createElement('h1');
// add class
titleEl.classList.add('page-title');
// add content
titleEl.textContent = 'This is page title!!'
// console.log(titleEl);

// add to HTML via appendChild (add in the end of PARENTS element)
// document.body.appendChild(titleEl);
// console.log(document.body);





// create in memory
const imageEl = document.createElement('img');
imageEl.src = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-versailles-gardens.jpg';
imageEl.alt = 'France';
imageEl.width = 300;


// create in memory 2 elements (hero title + image)
const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
// OR VIA ONE OPERATION (use when need to add 2 or more neighbours into parent element)
heroEl.append(titleEl, imageEl);



// create in memory 2 elements
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'User profile';
navLinkEl.href = "/profile";
// console.log(navLinkEl)

// put one element into another
navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);


// // put united elements into parents HTML element
// const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);

// put united element into parents beginning
const navEl = document.querySelector('.site-nav');
navEl.insertBefore(navItemEl, navEl.firstElementChild);

// // put united element as second last parents child 
// const navEl = document.querySelector('.site-nav');
// navEl.insertBefore(navItemEl, navEl.lastElementChild);

// // put united element anywhere you want
// const navEl = document.querySelector('.site-nav');
// navEl.insertBefore(navItemEl, navEl.children[2]);


// _____________________________________________________________________

















