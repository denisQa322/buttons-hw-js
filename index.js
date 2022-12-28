//* TASK-1

const buttonText = document.querySelector('.btn-hello');
const newInput = document.querySelector('.new-input');

function addTextToInput(){
    newInput.value = buttonText.innerHTML;
}

buttonText.addEventListener('click', () => addTextToInput());

//*TASK-2

const buttonSwap = document.querySelector('.swap-inputs');
const inputOne = document.querySelector('.input-1');
const inputTwo = document.querySelector('.input-2');

function swapInputsPlaceholder(){
    
    let chandegInput = inputOne.value;
    inputOne.value = inputTwo.value;
    inputTwo.value = chandegInput;
}

buttonSwap.addEventListener('click', () => swapInputsPlaceholder());

//*TASK-3

const buttonDisabled = document.querySelector('.btn-disabled');
const buttonEnabled = document.querySelector('.btn-enabled');
const inputDisableEnable = document.querySelector('.input-disable-enable');

function inputDisable(){
    inputDisableEnable.disabled = true;
}
function inputEnable(){
    inputDisableEnable.disabled = false;
}

buttonDisabled.addEventListener('click', () => inputDisable());
buttonEnabled.addEventListener('click', () => inputEnable());

//*TASK-4
const buttonAlert = document.querySelector('.btn-alert-input');
const inputAlert = document.querySelector('.alert-input');


function alertInput(){
    buttonAlert = alert(inputAlert.value);
}

buttonAlert.addEventListener('click', () => alertInput());



//*TASK-5
const buttonAlertTwice = document.querySelector('.btn-alert-2');
const inputAlertTwice = document.querySelector('.alert-input-2');

function alertTwice(){
    let twicedInput = inputAlertTwice.value
    buttonAlertTwice = alert(twicedInput ** 2);
}


buttonAlertTwice.addEventListener('click', () => alertTwice());