class PopupWithForm extends Popup {

constructor(popupSelector, collbackSubmit) {
    super(popupSelector)
    this._collbackSubmit = collbackSubmit
    this._values = {}
}

_getInputValues() {
    this._values = this._collbackSubmit()
}

close() {
    this._popup.classList.remove("popup_opened")
    this.delEventListeners()
    this._popup.reset()
  }

setEventListeners() {
    this._popup.submit.addEventListener("submit", this._getInputValues)
    document.addEventListener("keydown", this._handleEscClose)
    document.addEventListener("click", this._handleClose)
  }

delEventListeners() {
    this._popup.submit.removeEventListener("submit", this._getInputValues)
    document.removeEventListener("keydown", this._handleEscClose)
    document.removeEventListener("click", this._handleClose)
  }

}

export { PopupWithForm }