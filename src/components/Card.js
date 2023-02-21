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
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._userId = userId
    this._like = like
    this._dislike = dislike
    this._deleteCard = deleteCard
    this._likes = data.likes
    this._id = data._id
    this._name = data.name
    this._link = data.link
    this._ownerId = data.owner._id
  }

  like() {
    this._likeButton.classList.add("element__like-button_active")
  }

  dislike() {
    this._likeButton.classList.remove("element__like-button_active")
  }

  _userLiked() {
    this._likes.forEach((elementId) => {
      if (elementId._id === this._userId) {
        this.like()
      } else {
        this.dislike()
      }
    })
  }

  likesCount(res) {
    this._likesCount.textContent = `${res.likes.length}`
  }

  remove() {
    this._cardElement.remove()
  }

  generateCard = () => {
    const template = document.querySelector(this._templateSelector)
    if (template) {
      const element = template.content.querySelector(".element")
      if (element) {
        this._cardElement = element.cloneNode(true)
      } else console.log("В классе Card не найден .element!")
    } else
      console.log("В классе Card не найден " + this._templateSelector + "!")

    this._likeButton = this._cardElement.querySelector(".element__like-button")

    // Устанавливаю счетчик для подсчета лайков
    this._likesCount = this._cardElement.querySelector(".element__count-like")
    this._likesCount.textContent = this._likes.length
    this._deleteButtonTrash = this._cardElement.querySelector(".element__trash")
    if (this._ownerId !== this._userId) {
      this._deleteButtonTrash.remove()
    }

    this._imageElementMask = this._cardElement.querySelector(".element__mask")
    this._imageElementMask.src = this._link
    this._imageElementMask.alt = this._name
    this._cardElement.querySelector(".element__title").textContent = this._name

    this._setEventListeners()
    this._userLiked()

    return this._cardElement
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__like-button_active")) {
        this._dislike()
      } else {
        this._like()
      }
    })
    this._deleteButtonTrash.addEventListener("click", () => {
      this._deleteCard(this._id)
    })
    this._imageElementMask.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link)
    })
  }
}
