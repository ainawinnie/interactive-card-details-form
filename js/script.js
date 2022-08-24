/*Card Data */
const partOne = document.getElementById('part-one');
const partTwo = document.getElementById('part-two');
const partThree = document.getElementById('part-three');
const partFour = document.getElementById('part-four');
const nameCard = document.getElementById('name-card');
const monthCard = document.getElementById('month-card');
const yearCard = document.getElementById('year-card');
const cvcCard = document.getElementById('cvc-card');

/*Form data */
const nameInput = document.getElementById('name-input');
const cardNumber = document.getElementById('card-number-input');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc-input');
const sendButton = document.getElementById('send-button');

const teste = document.getElementById('testeabc');
/* Receives user name*/

console.log(nameInput.parentNode.childNodes)

function initApp() {
    addEventInElements(nameInput);
    addEventInElements(cardNumber);
    addEventInElements(monthInput);
    addEventInElements(yearInput );
    addEventInElements(cvcInput);
    addEventInElements(sendButton);

    
};

function addEventInElements (element) {
    element.addEventListener('blur', function() {
        if(element) {
            console.log(element.parentNode.child);
            validateEmptyField(element);

        } else {
            isEmailValid(element)
        }
    })

}

function validateEmptyField (input) {
    if (!input.value || input.value.length < 1) {
        addErrors(input);
    } else {
        removeErrors(input);
    }
}

function addErrors (input) {
    input.classList.add('input-error');
    input.parentNode.children[2].classList.remove('hide');
}

function removeErrors (input, elements) {
    input.classList.remove('input-error');
    input.parentNode.children[2].classList.add('hide');
}



initApp()