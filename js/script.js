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

/* Receives user name*/

function initApp() {
    addEventInElements(nameInput);
    addEventInElements(cvcInput);
    addEventInElements(sendButton);
    addEventInDateElements(monthInput);
    addEventInDateElements(yearInput );
    addEventInNumberElements(cardNumber);

    
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


function addEventInDateElements (element) {
    element.addEventListener('blur', function() {
        if(element) {
            validateEmptyDateField(element);

        } else {
            isEmailValid(element)
        }
    })

}

function validateEmptyDateField (input) {
    if (!input.value || input.value.length < 1) {
        addDateErrors(input);
    } else {
        removeDateErrors(input);
    }
}

function addDateErrors (input) {
    input.classList.add('input-error');
    input.parentNode.parentNode.children[1].classList.remove('hide');
}

function removeDateErrors (input, elements) {
    input.classList.remove('input-error');
    input.parentNode.children[2].classList.add('hide');
}

function addEventInNumberElements(element) {
    element.addEventListener('blur', function() {
        if(element) {
            validateNumberField(element);

        } else {
            isEmailValid(element)
        }
    })

}
function validateNumberField (input) {
    if (!input.value || input.value.length < 1) {
        addErrors(input);
    } else {
        removeErrors(input);
        if (isNaN(input)) {
            console.log(isNaN(input))
            input.parentNode.children[3].classList.remove('hide');            
        }
    }
}


initApp()