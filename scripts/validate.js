const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  activeButtonClass: 'popup__save_valid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'error_visible'
};

function setError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
    error.textContent = input.validationMessage;
};

function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  error.textContent = "";
};

function validateInput(form, input, config) {
  if(!input.validity.valid) {
    setError(form, input, config);
    } else {
      hideError(form, input, config);
  }
};

function setButtonState(inputs, button, config) {
const hasErrors = inputs.some(input => !input.validity.valid);
if(hasErrors) {
button.classList.add(config.inactiveButtonClass);
button.classList.remove(config.activeButtonClass);
} else {
  button.classList.remove(config.inactiveButtonClass);
  button.classList.add(config.activeButtonClass);
}
};

//устанавливаем обработчики
function setHandlers(form, config) {
const inputs = Array.from(form.querySelectorAll(config.inputSelector));
const button = form.querySelector(config.submitButtonSelector);
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInput(form, input, config);
    setButtonState(inputs, button, config);
  })
  
})

};

//делаем проверку
function enableValidation(config) {
const form = document.querySelector(config.formSelector);
form.addEventListener("submit", (evt) => {
evt.preventDefault();
});
setHandlers(form, config);
};

enableValidation(validationConfig);


























/*const form = document.querySelector(".popup__form");
const formInput = form.querySelector(".popup__input");
const formError = form.querySelector(`.${formInput.id}-error`);*/

/*const showInputError = (formElement ,inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
};
 
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__input-error_active");
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
    if(!inputElement.validity.valid) {
         showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector(".popup__save");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
    })
    })
};

    function enableValidation() {
        const formList = Array.from(document.querySelectorAll(".popup__form"));
        formList.forEach((formElement) => {
          formElement.addEventListener("submit", function (event) {
            event.preventDefault();
           })
           setEventListeners(formElement);
        })
      };
        enableValidation();
 
        function hasInvalidInput(inputList) {
            return inputList.some((inputElement) => {
              return !inputElement.validity.valid;
             
            });
          }
            function toggleButtonState(inputList, buttonElement) {
             if (hasInvalidInput(inputList)) {
            buttonElement.classList.add("");
            
          } else {
            buttonElement.classList.remove("");
          }
            };
           */
