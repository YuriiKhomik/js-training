// // CONVENTION OF NAMING:

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');


// // adding event listener ('event', function)
// targetBtn.addEventListener('click', () => {
//     console.log('click')
// });

// // we need not anonymous function:

// targetBtn.addEventListener('click', handleTargetButtonClick);


// // naming for function: handleSubjectEvent
// function handleTargetButtonClick() {
//     console.log('click');
// };

// // or naming for function: subjectEventHandler
// targetBtn.addEventListener('click', targetButtonClickHandler);

// function targetButtonClickHandler() {
//     console.log('click');
// };

// // or naming for function: onSubjectEvent
// targetBtn.addEventListener('click', onTargetButtonClick);

// function onTargetButtonClick() {
//     console.log('click');
// };



// // ADD & REMOVE EVENT LISTENERS


// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');


// addListenerBtn.addEventListener('click', () => {
//     console.log('you added listener on TargetBtn');
//     targetBtn.addEventListener('click', onTargetButtonClick);
// });


// removeListenerBtn.addEventListener('click', () => {
//     console.log('you removed listener on TargetBtn');
//     targetBtn.removeEventListener('click', onTargetButtonClick);
// });


// // callback for logging after click on target button
// function onTargetButtonClick() {
//     console.log('click on target button')
// };



// // // EVENT = object with service information

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');


// addListenerBtn.addEventListener('click', (event) => {
//     console.log(event)
//     console.log('you added listener on TargetBtn');
//     targetBtn.addEventListener('click', onTargetButtonClick);
// });


// removeListenerBtn.addEventListener('click', (event) => {
//     console.log(event)
//     console.log('you removed listener on TargetBtn');
//     targetBtn.removeEventListener('click', onTargetButtonClick);
// });


// // callback for logging after click on target button
// function onTargetButtonClick(event) {
//     console.log(event)
//     console.log('click on target button')
// };




// FORM SUBMIT EVENT

// // form data gather one by one:

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     // prevents from reload, for example
//     event.preventDefault();

//     // getting access to form elements
//     const formElements = event.currentTarget.elements;
//     console.dir(formElements);

//     const mail = formElements.email.value;
//     const password = formElements.password.value;
//     const subscription = formElements.subscription.value;
//     // console.log(mail, password, subscription);

//     const formData = {
//         mail,
//         password,
//         subscription,
//     };

//     console.log(formData)
// };


// // form data gather ALL by one:
// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     // form Data gathers all information from form///we use it to send data to server
//     const formData = new FormData(event.currentTarget);
    
//     formData.forEach((value, name) => {
//         console.log('on form submit -> name', name);
//         console.log('on form submit -> value', value);
//     });

// };



// // INPUT EVENTS

// // creating object of refs:

// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     licenseCheckbox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),
// };

// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);
// // // use only for checkboxes etc...
// // refs.input.addEventListener('change', onInputChange);
// // // use for text
// // refs.input.addEventListener('input', onInputChange);

// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// // function onInputFocus() {
// //     console.log('Input got focus - event "focus"')
// // };

// // function onInputBlur() {
// //     console.log('Input lost focus - event "blur"')
// // };

// function onInputChange(event) {
//     // console.log(event.currentTarget.value);
//     refs.nameLabel.textContent = event.currentTarget.value;
// };

// function onLicenseChange(event) {
//     // console.log(event.currentTarget.checked);
//     // console.log('refs.btn.disabled: ', refs.btn.disabled);
    
//     refs.btn.disabled = !event.currentTarget.checked;
// };




// // KEYBOARD EVENTS

// // "keypress" react only to keys, which generate symbols
// // "keyup" and "keydown" react to all keys  

// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeyPress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// // add text from window.input
// function onKeyPress(event) {
//     // console.log('event.key: ', event.key);
//     // console.log('event.code: ', event.code);

//     refs.output.textContent += event.key
// };

// // clear text from window.input
// function onClearOutput() {
//     refs.output.textContent = '';
// }




// MOUSE EVENTS

// const boxRef = document.querySelector('.js-box');

// // boxRef.addEventListener('mouseenter', onMouseEnter);
// // boxRef.addEventListener('mouseleave', onMouseLeave);
// // boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//     const box = event.currentTarget;
//     box.classList.add('box--active');
// };

// function onMouseLeave(event) {
//     const box = event.currentTarget;
//     box.classList.remove('box--active');
// };

// function onMouseMove(event) {
//     console.log(event);
// }



// // MODAL WINDOW

// const refs = {
//     // square brackets for attribute selector
//     openModalBtn: document.querySelector('[data-action="open-modal"]'),
//     closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('.js-backdrop'),
// };
// // adding event listeners
// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackDropClick)


// // add&remove class "show-modal" when click on button
// function onOpenModal() {
//     // add event listener for ESC KEY when modal is open
//     window.addEventListener('keydown', onEscKeyPress)
//     console.log(document.body.classList.add('show-modal'));
// };

// function onCloseModal() {
//     // remove event listener for ESC KEY when modal is closed
//     window.removeEventListener('keydown', onEscKeyPress)
//     console.log(document.body.classList.remove('show-modal'));
// };

// function onBackDropClick(event) {
//     // console.log('click on backdrop');

//     // shows which element is subscribed for event
//     // console.log(event.currentTarget);

//     // shows on which element event happened
//     // console.log(event.target)

//     if (event.currentTarget === event.target) {
//         console.log('Clicked exactly on backdrop')
//         // invoke function for close
//         onCloseModal();
//     };
// }

// // function onEscKeyPress(event) {
// //     console.log(event)
// //     // add rule for ESC BUTTON:
// //     if (event.code === 'Escape') {
// //         onCloseModal();
// //     }
// // }

// // OR:

// function onEscKeyPress(event) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = event.code === ESC_KEY_CODE;
    
//     if (isEscKey) {
//         onCloseModal();
//     }
// }












