class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector) 
  }

  open() {
    this.setEventListeners()
    this._popup.classList.add("popup_opened")
  }

  close() {
    this._popup.classList.remove("popup_opened")
    this.delEventListeners()
  }

  _handleEscClose(evt) {
    if (evt.code == "Escape") {
        this.close()
    }
  }

  _handleClose(evt) {
    if (evt.target == evt.currentTarget) {
        this.close()
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose)
    document.addEventListener("click", this._handleClose)
  }

  delEventListeners() {
    document.removeEventListener("keydown", this._handleEscClose)
    document.removeEventListener("click", this._handleClose)
  }
}

export { Popup }
