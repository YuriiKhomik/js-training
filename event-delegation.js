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



// // EXAMPLE FOR EVENT-DELEFATION №2 (CHOOSE ONE BUTTON)


// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
    
//     if (evt.target.nodeName !== 'BUTTON') {
//         return
//     };

//     // отримуємо доступ до класу з активною кнопкою
//     const currentActiveBtn = document.querySelector('.tags__btn--active');
//     // console.log(currentActiveBtn);

//     // знімаємо активний клас з попереднії елементів
    
//     // if (currentActiveBtn) {
//     //     currentActiveBtn.classList.remove('tags__btn--active')
//     // };

//     //  OR
//     currentActiveBtn?.classList.remove('tags__btn--active');

//     // додаємо активний клас на кнопку, по якій відбувається клік
//     const nextActiveBTN = evt.target;
//     nextActiveBTN.classList.add('tags__btn--active');
//     // виводимо в консоль значення із data-value (dataset.value - зберігає значення data-value)
//     selectedTag = nextActiveBTN.dataset.value;
//     console.log(selectedTag);
// };

// // перевірка вкладеності
// const settings = {
//     theme: {
//         userDefined: {
//             color: 'hbgv'
//         }
//     }
// };

// if (settings && settings.theme && settings.theme.userDefined) {
//     console.log(settings.theme.userDefined.color);
// };

// // or shorter:

// console.log(settings?.theme?.userDefined?.color);



// // EXAMPLE FOR EVENT-DELEFATION №3 (CHOOSE MULTIPLE BUTTONS)

// const tagsContainer = document.querySelector('.js-tags');
// // SET - зберігає колекцію унікальних примітивів
// const selectedTags = new Set;

// tagsContainer.addEventListener('click', onTagsContainerClick);


// function onTagsContainerClick(evt) {
    
//     if (evt.target.nodeName !== 'BUTTON') {
//         return
//     };

//     const btn = evt.target;
//     const tag = btn.dataset.value;
//     const isActive = btn.classList.contains('tags__btn--active');
//     // якщо клас ектів присутній, то видажяємо його з сету, а якщо його нема, то додаємо
//     // тернарний оператор тут буде недоречним. він призначений для запису значення по умові, а не виклику функції по умові
//     if (isActive) {
//         selectedTags.delete(tag)
//     } else {
//         selectedTags.add(btn.dataset.value);
//     };

//     // вішаємо або забираємо активний клас
//    btn.classList.toggle('tags__btn--active');

//     // додаємо значення data-value в колекцію
    
//     console.log(selectedTags);
// };


// COLOR-PICKER

const clrs = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,188,212' },
    { hex: '#009688', rgb: '0,150,136' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
];

// посилання на батьківський контейнер
const paletteContainer = document.querySelector('.js-palette');
// змінна для сформованої розмітки із всіма кольорами
const cardsMarkup = createColorCardsMarkup(clrs);
// вставляємо цю розмітку в батьківський контейнер
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick)



function createColorCardsMarkup(colors) {
    return colors.map(({hex, rgb}) => {
        return `
    <div class="color-card">
        <div
            class="color-swatch"
            data-hex="${hex}"
            data-rgb="${rgb}"
            style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
    </div>
    `
        ;
    })
        .join('');
}

// console.log(createColorCardsMarkup(clrs));

// function onPaletteContainerClick(evt) {
//     // if (!evt.target.classList.contains('color-swatch')) {
//     //     return
//     // } else {
//     //     console.log(evt.target)
//     // };

//     // or via variable:
//     const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//     if (!isColorSwatchEl) {
//         return
//     } else {
//         // console.log(evt.target)
//     };

//     // шукаємо активну картку:
//     const currentActiveCard = document.querySelector('.color-card.is-active');

//     // забираємо активний клас
//     if (currentActiveCard) {
//         currentActiveCard.classList.remove('is-active')
//     };

//     const swatchEl = evt.target;
//     // // parentNode зберігає посилання на батьківський елемент вибраного елемента
//     // // але цей метод не ок, щоби достукатись до батька, бо якщо вкладеність елемента
//     // // зміниться - ми не зможемо достукатись до потрібного батька
//     // const parentColorCard = swatchEl.parentNode;

//     // для таких цілей є метод closest:
//     // він буде йти догори по вкладеності і знайде перший елемент із вказаним селектором
//     const parentColorCard = swatchEl.closest('.color-card');
//     parentColorCard.classList.add('is-active');

//     // передаємо значення активного кольору на колір body
//     document.body.style.backgroundColor = swatchEl.dataset.hex;


    
//     // console.log(evt.target.dataset.hex);    
// } 

//  в попередній функції надто багато завдань
// розбиваємо її на менші фенкції:

function onPaletteContainerClick(evt) {
    // отримуємо посилання на елемент
    const isColorSwatchEl = evt.target.classList.contains('color-swatch');

    // фільтруємо події виключно на цьому елементі
    if (!isColorSwatchEl) {
        return;
    };

    // змінна для елементу, по якому відбулась подія
    const swatchEl = evt.target;
    // змінна для його батьківського елементу з потрібним класом
    const parentColorCard = swatchEl.closest('.color-card');
    
    // видаляємо активний клас
    removeActiveCardClass()
    // додаємо активний клас
    addActiveCardClass(parentColorCard)
    // передаємо значення активного кольору на колір body
    setBodyBgColor(swatchEl.dataset.hex)
};


function setBodyBgColor (color){
     document.body.style.backgroundColor = color;
};

function removeActiveCardClass() {
    // шукаємо активну картку:
    const currentActiveCard = document.querySelector('.color-card.is-active');

    // забираємо активний клас
    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active')
    };
};

function addActiveCardClass(card) {
    card.classList.add('is-active');
}