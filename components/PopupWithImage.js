import Popup from "../components/Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._imagePopup = this._popup.querySelector(".popup__image")
    this._imagePopupTitle = this._popup.querySelector(".popup__image-title")
  }

  open = (item) => {
    this._imagePopupTitle.textContent = item.name
    this._imagePopup.alt = item.name
    this._imagePopup.src = item.link

    super.open()
  }
}
