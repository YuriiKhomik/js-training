// EXAMPLE FOR EVENT BUBBLING

// const refs = {
//     parent: document.querySelector('#parent'),
//     child: document.querySelector('#child'),
//     innerChild: document.querySelector('#inner-child'),
// };

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerChildClick);

// function onParentClick(evt) {
//     console.log('onParentClick');
//     // evt.target - це найбільш глибоко вкладений цільовий елемент, 
//     // на якому зародилась ця подія. Той елемент,
//     //  на якому відбулась подія.
//     console.log('onParentClick -> evt.target', evt.target);
//     // current-target - це той елемент, на якому ми зловили подію і зараз її прослуховуємо.
//     console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
// };

// function onChildClick(evt) {
//     console.log('onChildClick');
//     console.log('onChildClick -> evt.target', evt.target);
//     console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
// };

// function onInnerChildClick(evt) {
//     console.log('onInnerChildClick');
//     console.log('onInnerChildClick -> evt.target', evt.target);
//     console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
// }; 


// // EXAMPLE FOR EVENT-DELEFATION

// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//     // // ставимо фільтр цілі делегації (фільтр кліку)
//     // // тут можемо дадавати також класи і т.д.
//     // if (evt.target.nodeName !== 'BUTTON') {
//     //     return
//     // };

//     // // консолимо ім'я елемента
//     // console.log(evt.target.nodeName);

//     // // консолимо той елемент, на якому відбулась подія
//     // console.log(evt.target);

//     // консолимо текстовий контент об'єкта, на якому відбулась подія 
//     console.log(evt.target.textContent);

// };


// // функція для додавання нових кнопок
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//     const btn = document.createElement('button');
//     btn.textContent = `Button ${labelCounter}`;
//     btn.type = 'button';

//     container.appendChild(btn);
//     labelCounter += 1;
// };



