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

//     // form Data gathers all information from form
//     const formData = new FormData(event.currentTarget);
    
//     formData.forEach((value, name) => {
//         console.log('on form submit -> name', name);
//         console.log('on form submit -> value', value);
//     });

// };




