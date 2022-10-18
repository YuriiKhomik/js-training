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


// // COLOR-PICKER

// const clrs = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#e91e63', rgb: '233,30,99' },
//     { hex: '#9c27b0', rgb: '156,39,176' },
//     { hex: '#673ab7', rgb: '103,58,183' },
//     { hex: '#3f51b5', rgb: '63,81,181' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#00bcd4', rgb: '0,188,212' },
//     { hex: '#009688', rgb: '0,150,136' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//     { hex: '#ff9800', rgb: '255,152,0' },
//     { hex: '#795548', rgb: '121,85,72' },
//     { hex: '#607d8b', rgb: '96,125,139' },
// ];

// // посилання на батьківський контейнер
// const paletteContainer = document.querySelector('.js-palette');
// // змінна для сформованої розмітки із всіма кольорами
// const cardsMarkup = createColorCardsMarkup(clrs);
// // вставляємо цю розмітку в батьківський контейнер
// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick)



// function createColorCardsMarkup(colors) {
//     return colors.map(({hex, rgb}) => {
//         return `
//     <div class="color-card">
//         <div
//             class="color-swatch"
//             data-hex="${hex}"
//             data-rgb="${rgb}"
//             style="background-color: ${hex}"
//         ></div>
//         <div class="color-meta">
//             <p>HEX: ${hex}</p>
//             <p>RGB: ${rgb}</p>
//         </div>
//     </div>
//     `
//         ;
//     })
//         .join('');
// }

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

// //  в попередній функції надто багато завдань
// // розбиваємо її на менші фенкції:

// function onPaletteContainerClick(evt) {
//     // отримуємо посилання на елемент
//     const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//     // фільтруємо події виключно на цьому елементі
//     if (!isColorSwatchEl) {
//         return;
//     };

//     // змінна для елементу, по якому відбулась подія
//     const swatchEl = evt.target;
//     // змінна для його батьківського елементу з потрібним класом
//     const parentColorCard = swatchEl.closest('.color-card');
    
//     // видаляємо активний клас
//     removeActiveCardClass()
//     // додаємо активний клас
//     addActiveCardClass(parentColorCard)
//     // передаємо значення активного кольору на колір body
//     setBodyBgColor(swatchEl.dataset.hex)
// };


// function setBodyBgColor (color){
//      document.body.style.backgroundColor = color;
// };

// function removeActiveCardClass() {
//     // шукаємо активну картку:
//     const currentActiveCard = document.querySelector('.color-card.is-active');

//     // забираємо активний клас
//     if (currentActiveCard) {
//         currentActiveCard.classList.remove('is-active')
//     };
// };

// function addActiveCardClass(card) {
//     card.classList.add('is-active');
// };




// CHATTY EVENTS throttle&debounce призначені для оптимізації обробки подій від користувача (scroll, resize, drag, mousemove, input)

// // підхід, при якому відбвуається надто дагато викликів функції під час руху мишки

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvokationCounter = 0;

// window.addEventListener('mousemove', onMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvokationCounter += 1;

//     coordsOutputRef.textContent = `
//     кількість викликів onMouseMove: ${mouseMoveCbInvokationCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY}`;
// };


// // підхід із TROTTLE (використовується при зміні розміру вікна, скролі, драгу)

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvokationCounter = 0;

// const throttledOnMouseMove = _.throttle(onMouseMove, 500);

// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvokationCounter += 1;

//     coordsOutputRef.textContent = `
//     кількість викликів onMouseMove: ${mouseMoveCbInvokationCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY}`;
// };



// DEBOUNCE

// // без DEBOUNCE
// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');

// let inputCbInvolationCounter = 0;

// inputRef.addEventListener('input', onInputChange);

// function onInputChange(event) {
    
//     inputCbInvolationCounter += 1;

//     outputRef.textContent = `кількість викликів onInputChange: ${inputCbInvolationCounter}. Значення: ${event.target.value}`
// };


// // із DEBOUNCE (використовується при пошуку, коли юзер вводить слово, мичекаємо, коли слово буде введене повністю)
// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');

// let inputCbInvolationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 300));

// function onInputChange(event) {
    
//     inputCbInvolationCounter += 1;

//     outputRef.textContent = `кількість викликів onInputChange: ${inputCbInvolationCounter}. Значення: ${event.target.value}`
// };



// SEARCH FILTER
// // array of objects
// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'Java-Script' },
//     { label: 'Node.JS' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.JS' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQL' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
// ];

// // references
// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter'),
// };

// // creating list with objects from array
// const listItemsMarkup = createListItemsMarkup(tech);

// // use inner html, when parent item is empty and insertAdjascentHtml when there is smth in parent item
// // add created list to html:
// refs.list.innerHTML = listItemsMarkup;

// // creating markup as one string(.join)
// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// };


// // CREATING FILTER
// // array of objects
// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'Java-Script' },
//     { label: 'Node.JS' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.JS' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQL' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
// ];

// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', onFilterChange)

// // рендеримо список, щоби юзер бачив, з чого вибирати
// const listItemsMarkup = createListItemsMarkup(tech);
// refs.list.innerHTML = listItemsMarkup;

// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// };

// function onFilterChange(evt) {
//     // отримуємо фільтр із інтерфейсу
//     const filter = evt.target.value.toLowerCase();
//     // з моделі відфільтрував ті об'єкти, які мені зараз підходять (зробив новий масив відфільтрованих)
//     const filteredItems = tech.filter(t => t.label.toLocaleLowerCase().includes(filter));
//     // створив розмітку під відфільтрований масив
//     const listItemsMarkup = createListItemsMarkup(filteredItems);
//     // і повністю замінив розмітку UL
//     populateList(listItemsMarkup)
// }

// function populateList(markup) {
//     refs.list.innerHTML = markup;
// }


// // the same but with throttle:

// // CREATING FILTER
// // array of objects
// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'Java-Script' },
//     { label: 'Node.JS' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.JS' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQL' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
// ];

// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.throttle(onFilterChange, 1000))

// // рендеримо список, щоби юзер бачив, з чого вибирати
// const listItemsMarkup = createListItemsMarkup(tech);
// refs.list.innerHTML = listItemsMarkup;

// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// };

// function onFilterChange(evt) {
//     // отримуємо фільтр із інтерфейсу
//     const filter = evt.target.value.toLowerCase();
//     // з моделі відфільтрував ті об'єкти, які мені зараз підходять (зробив новий масив відфільтрованих)
//     const filteredItems = tech.filter(t => t.label.toLocaleLowerCase().includes(filter));
//     // створив розмітку під відфільтрований масив
//     const listItemsMarkup = createListItemsMarkup(filteredItems);
//     // і повністю замінив розмітку UL
//     populateList(listItemsMarkup)
// }

// function populateList(markup) {
//     refs.list.innerHTML = markup;
// }


// // the same but with debounce:

// // CREATING FILTER
// // array of objects
// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'Java-Script' },
//     { label: 'Node.JS' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.JS' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQL' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
// ];

// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 1000))

// // рендеримо список, щоби юзер бачив, з чого вибирати
// const listItemsMarkup = createListItemsMarkup(tech);
// refs.list.innerHTML = listItemsMarkup;

// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// };

// function onFilterChange(evt) {
//     // отримуємо фільтр із інтерфейсу
//     const filter = evt.target.value.toLowerCase();
//     // з моделі відфільтрував ті об'єкти, які мені зараз підходять (зробив новий масив відфільтрованих)
//     const filteredItems = tech.filter(t => t.label.toLocaleLowerCase().includes(filter));
//     // створив розмітку під відфільтрований масив
//     const listItemsMarkup = createListItemsMarkup(filteredItems);
//     // і повністю замінив розмітку UL
//     populateList(listItemsMarkup)
// }

// function populateList(markup) {
//     refs.list.innerHTML = markup;
// }

// // (if need - use fuse.JS for pukhnastyi poshuk)


// LASYLOAD IMG (we need to add attribute loading="lazy" to every img in HTML)

// const lazyImages = document.querySelectorAll('img[loading="lazy"]');
// // console.log(lazyImages);

// // вішаємо слухача на кожну картинку (з допомогою {once:true} івент лісенер виконається лише один раз і потім самовидалиться)
// lazyImages.forEach(image => { image.addEventListener('load', onImageLoaded, {once: true})});

// // коли відбувається lazyload, то вішаємо на картинку клас із анімацією
// function onImageLoaded(evt) {
//     console.log('image loaded', evt);
//     evt.target.classList.add('appear')
// };


// // LASYLOAD IMG VIA LIBRARY (насправді, коли додаємо бібліотеку, то в JS залишається прописати хіба стилі)

// const lazyImages = document.querySelectorAll('img[data-src]');
// // console.log(lazyImages);

// // вішаємо слухача на кожну картинку (з допомогою {once:true} івент лісенер виконається лише один раз і потім самовидалиться)
// lazyImages.forEach(image => { image.addEventListener('load', onImageLoaded, {once: true})});

// // коли відбувається lazyload, то вішаємо на картинку клас із анімацією
// function onImageLoaded(evt) {
//     console.log('image loaded', evt);
//     evt.target.classList.add('appear')
// };


// HOW DO I HANDLE NATIVE LAZYLOADING

if ('loading' in HTMLImageElement.prototype) {
    // якщо браузер підтримує, то ми знаходимо всі ліниві картинки 
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // і додаємо тна кожну картинку атрибут img.src і його значенням буде значення img.dataset.src
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
} else {    
    // динамічно створюємо елемент скрипта в HTML
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";

    document.body.appendChild(script);
}

    // <script
    //   src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
    //   integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
    //   crossorigin="anonymous"
    //   referrerpolicy="no-referrer"
    // ></script>

    // додаємо стилі

    const lazyImages = document.querySelectorAll('img[data-src]');
    // console.log(lazyImages);

    // вішаємо слухача на кожну картинку (з допомогою {once:true} івент лісенер виконається лише один раз і потім самовидалиться)
    lazyImages.forEach(image => { image.addEventListener('load', onImageLoaded, {once: true})});

    // коли відбувається lazyload, то вішаємо на картинку клас із анімацією
    function onImageLoaded(evt) {
        console.log('image loaded', evt);
        evt.target.classList.add('appear')
    };
