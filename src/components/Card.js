export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
  }

  generateCard = () => {
    this._cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true)
    this._like = this._cardElement.querySelector(".element__like-button")
    this._title = this._cardElement.querySelector(".element__title")
    this._mask = this._cardElement.querySelector(".element__mask")
    this._trash = this._cardElement.querySelector(".element__trash")

    this._fillCard()
    this._setEventHandlers()
    return this._cardElement
  }

  _likeCard = () => {
    this._like.classList.toggle("element__like-button_active")
  }

  _deleteCard = () => {
    this._cardElement.remove()
  }

  _setEventHandlers = () => {
    this._trash.addEventListener("click", () => this._deleteCard())
    this._like.addEventListener("click", () => this._likeCard())
    this._mask.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    )
  }

  _fillCard = () => {
    this._mask.src = this._link
    this._mask.alt = this._name
    this._title.textContent = this._name
  }
}
