class PopupWithImage extends Popup {

constructor(popupSelector, items) {
    super(popupSelector) 
    this._name = items.name
    this._link = items.link
    
}

open() {
    this._popup.mask.src = this._link
    this._popup.mask.alt = this._name
    this._popup.title.textContent = this._name
    this.setEventListeners()
    this._popup.classList.add("popup_opened")
  }
 
}

export { PopupWithImage }