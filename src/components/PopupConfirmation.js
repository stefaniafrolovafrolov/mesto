import Popup from "./Popup.js"

export default class PopupConfirmation extends Popup {
  constructor(popup, handleSubmit) {
    super(popup)
    this._handleSubmit = handleSubmit
    this._popupForm = this._popup.querySelector(".popup__form")
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleSubmit(this._card)
    })
  }

  open(card) {
    this._card = card
    super.open()
  }
}
