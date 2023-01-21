class FormValidator {
  constructor(config) {
    this._config = config
  }

  disableSubmitButton(popup) {
    const buttonSave = popup.querySelector(this._config.submitButtonSelector)
    if (buttonSave) {
      buttonSave.classList.remove(this._config.activeButtonClass)
      buttonSave.classList.add(this._config.inactiveButtonClass)
      buttonSave.disabled = true
    }
  }

  enableValidation() {
    const formList = Array.from(
      document.querySelectorAll(this._config.formSelector)
    )

    formList.forEach((formElement) => {
      this._setEventListeners(formElement, this._config)
    })
  }

  _showInputError(inputElement, popup) {
    const errorElement = popup.querySelector(`.${inputElement.id}-error`)
    errorElement.classList.add(this._config.errorClass)
    errorElement.textContent = inputElement.validationMessage
    inputElement.classList.add(this._config.inputErrorClass)
  }

  _hideInputError(inputElement, popup) {
    const errorElement = popup.querySelector(`.${inputElement.id}-error`)
    errorElement.classList.remove(this._config.errorClass)
    errorElement.textContent = ""
    inputElement.classList.remove(this._config.inputErrorClass)
  }

  _checkInputValidity(inputElement, popup) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement, popup)
    } else {
      this._showInputError(inputElement, popup)
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid)
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.remove(this._config.activeButtonClass)
      buttonElement.classList.add(this._config.inactiveButtonClass)
      buttonElement.disabled = true
    } else {
      buttonElement.classList.add(this._config.activeButtonClass)
      buttonElement.classList.remove(this._config.inactiveButtonClass)
      buttonElement.disabled = false
    }
  }

  _setEventListeners(popup) {
    const inputList = Array.from(
      popup.querySelectorAll(this._config.inputSelector)
    )
    const buttonElement = popup.querySelector(this._config.submitButtonSelector)

    this._toggleButtonState(inputList, buttonElement)

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement, popup)
        this._toggleButtonState(inputList, buttonElement)
      })
    })
  }
}

export { FormValidator }
