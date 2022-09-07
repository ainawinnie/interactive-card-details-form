/*Pages */
const formPage = document.getElementById('form-data');
const completePage = document.getElementById('complete-id');

/*Form data */
const nameInput = document.getElementById('name-input');
const cardNumber = document.getElementById('card-number-input');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc-input');
const sendButton = document.getElementById('send-button');

/*Card Data */
const partOne = document.getElementById('part-one');
const partTwo = document.getElementById('part-two');
const partThree = document.getElementById('part-three');
const partFour = document.getElementById('part-four');
const nameCard = document.getElementById('name-card');
const monthCard = document.getElementById('month-card');
const yearCard = document.getElementById('year-card');
const cvcCard = document.getElementById('cvc-card');

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
        /*Verifies if tha card input contains only numbers */
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

/*Fills the numbers on card*/
cardNumber.addEventListener('blur', function() {
    var aux1 = '';
    for (var i =0; i < 4; i++){
        aux1 = aux1 + cardNumber.value[i];
        partOne.innerHTML = aux1;
    }

    var aux2 = '';
    for (var i =4; i < 8; i++){
        aux2 = aux2 + cardNumber.value[i];
        partTwo.innerHTML = aux2;
    }

    var aux3 = '';
    for (var i =8; i < 12; i++){
        aux3 = aux3 + cardNumber.value[i];
        partThree.innerHTML = aux3;
    }

    var aux4 = '';
    for (var i =12; i < 16; i++){
        aux4 = aux4 + cardNumber.value[i];
        partFour.innerHTML = aux4;
    }
})

/*Fills the name on card*/
nameInput.addEventListener('blur', function(){
    nameCard.innerHTML = nameInput.value
})

/*Fills the date on card*/
monthInput.addEventListener('blur', function(){
    monthCard.innerHTML = monthInput.value
})
yearInput.addEventListener('blur', function(){
    yearCard.innerHTML = yearInput.value
})

/*Fills the cvc on card*/
cvcInput.addEventListener('blur', function(){
    cvcCard.innerHTML = cvcInput.value
})

/*Moves to the ending page*/

sendButton.addEventListener ('click', function (event) {
    event.preventDefault
    if (nameInput.value && cardNumber.value && monthInput.value && yearInput.value && cvcInput ){
        formPage.classList.add('hide');
        completePage.classList.remove('hide');
    }
})

