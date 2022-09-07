/*Form data */
const nameInput = document.getElementById('name-input');
const cardNumber = document.getElementById('card-number-input');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc-input');
const sendButton = document.getElementById('send-button');

initApp() /*Starts the script*/

function initApp() {
    addEventInElements(nameInput);
    addEventInElements(cvcInput);
    addEventInElements(sendButton);
    addEventInDateElements(monthInput);
    addEventInDateElements(yearInput );
    addEventInElements(cardNumber);
};

/*Function to evaluate input after blur*/
function addEventInElements (element) {
    element.addEventListener('blur', function () {
        if (!element.value) {
            emptyError(element);
        } else {
            removeEmptyError(element)
        }

        if (cardNumber.value) {
            a = 0;
            for (i in cardNumber.value) {
                if(isNaN(cardNumber.value[i])) {
                    a = a + 1;
                }    
            }

            if (a>0) {
                cardNumber.classList.add('input-error');
                cardNumber.parentNode.children[3].classList.remove('hide');
            } else {
                cardNumber.classList.remove('input-error');
                cardNumber.parentNode.children[3].classList.add('hide');  
            }
        }
    })
}

/*Adds error in empty field except for date*/
function emptyError (input) {
    input.classList.add('input-error');
    input.parentNode.children[2].classList.remove('hide');
}

/*Removes error in empty field except for date */
function removeEmptyError (input) {
    input.classList.remove('input-error');
    input.parentNode.children[2].classList.add('hide');
}

/*Function to evaluate input after blur in date fields */
function addEventInDateElements (element) {
    element.addEventListener('blur', function () {
        if (!element.value) {
            emptyDateError(element);
        } else {
            removeEmptyDateError(element)
        }
    })
}

/*Adds error in empty field for date*/
function emptyDateError (input) {
    input.classList.add('input-error');
    input.parentNode.parentNode.children[1].classList.remove('hide');
}

/*Removes error in empty field for date */
function removeEmptyDateError (input) {
    input.classList.remove('input-error');
    input.parentNode.parentNode.children[1].classList.add('hide');
}
