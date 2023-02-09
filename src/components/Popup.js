export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector)
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }

  _handleClose(event) {
    if (event.target.classList.contains("popup_opened")) {
      this.close()
    }
  }

setEventListeners() {
   this._popup.addEventListener("mouseup", () => {
    this._handleClose(window.event)
  });

   this._popup.querySelector(".popup__close").addEventListener("click", () => {
    this.close()
  });

  }
  
}