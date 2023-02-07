export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
  }

  open() {
    this._popup.classList.add("popup_opened")
    document.addEventListener("keydown", () => {
      this._handleEscClose(window.event)
    })
  }

  close() {
    this._popup.classList.remove("popup_opened")
    document.removeEventListener("keydown", () => {
      this._handleEscClose(window.event)
    })
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
  }

  _handleClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close()
    }
  }

  setEventListeners() {
    document.addEventListener("mouseup", () => {
      this._handleClose(window.event)
    })
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close()
    })
  }
}
