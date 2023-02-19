export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    userId,
    like,
    dislike,
    deleteCard
  ) {
    this._name = data.name
    this._link = data.link
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._likes = data.likes
    this._id = data._id
    this._ownerId = data.owner._id
    this._userId = userId
    this._like = like
    this._dislike = dislike
    this._deleteCard = deleteCard
  }

  // устанавливают слушателей событий;
  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      if (this._likeBtn.classList.contains("element__like-button_active")) {
        this._dislike()
      } else {
        this._like()
      }
    })
    this._deleteBtn.addEventListener("click", () => {
      this._deleteCard(this._id)
    })
    this._imgElement.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link)
    })
  }

  // Проверим, есть ли лайк текущего пользователя у карточки
  _isLiked() {
    this._likes.forEach((user) => {
      user._id === this._userId ? this.like() : this.dislike()
    })
  }

  like() {
    this._likeBtn.classList.add("element__like-button_active")
  }

  dislike() {
    this._likeBtn.classList.remove("element__like-button_active")
  }

  setLikesCount(res) {
    this._likesQty.textContent = `${res.likes.length}`
  }

  remove() {
    this._cardElement.remove()
    this._cardElement = null
  }

  generateCard = () => {
    this._cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true)
    this._like = this._cardElement.querySelector(".element__like-button")

    // Устанавливаем кол-во лайков
    this._likesQty = this._cardElement.querySelector(".element__count-like")
    this._likesQty.textContent = this._likes.length
    this._deleteBtn = this._cardElement.querySelector(".element__trash")
    if (this._ownerId !== this._userId) {
      this._deleteBtn.remove()
    }

    // Добавим данные
    this._imgElement = this._cardElement.querySelector(".element__mask")
    this._imgElement.src = this._link
    this._imgElement.alt = "Картинка" + this._name
    this._cardElement.querySelector(".element__title").textContent = this._name

    // Установим обработчики
    this._setEventListeners()
    this._isLiked()

    return this._cardElement
  }
}
