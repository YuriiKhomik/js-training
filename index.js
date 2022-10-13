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

// search using attributes in order to change them

const currentPageUrl = '/contacts';
const linkEl = document.querySelector(
    `.site-nav__link[href="${currentPageUrl}"]`,
);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');














