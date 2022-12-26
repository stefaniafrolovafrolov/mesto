//формы
const formProfile = document.querySelector("#editForm")
const formProfileNew = document.querySelector("#addForm")

//попапы
const popupEditProfile = document.querySelector(".popup_type_edit-profile")
const popupAddCard = document.querySelector(".popup_type_add-card")
const popupImage = document.querySelector(".popup_type_image")

//кнопки
const profileAddButton = document.querySelector(".profile__add-button")
const profileEditButton = document.querySelector(".profile__edit-button")
const buttonClosePopupProfile = popupEditProfile.querySelector(".popup__close")
const buttonClosePopupAddCard = popupAddCard.querySelector(".popup__close")
const buttonClosePopupImage = popupImage.querySelector(".popup__close")

//поля инпутов
const nameInput = popupEditProfile.querySelector(".popup__input_type_name")
const jobInput = popupEditProfile.querySelector(".popup__input_type_job")

//профиль тайтл и сабтайтл
const profileTitle = document.querySelector(".profile__title")
const profileParag = document.querySelector(".profile__subtitle")

const cardsContainer = document.querySelector(".elements")
const template = document.querySelector("#element-template").content

const imageOpenPopup = document.querySelector(".popup__image-container")
const imageClosePopup = document.querySelector(".popup__close")
const imageImg = document.querySelector(".popup__image")
const imageTitle = document.querySelector(".popup__image-title")

const nameInputNew = document.querySelector(".popup__input_type_image-name")
const linkInputNew = document.querySelector(".popup__input_type_image-link")

//функция открытия попапов
function openPopup(popup) {
  document.addEventListener("keydown", closePopupOnEscape)
  popup.classList.add("popup_opened")
}

function closePopupOnEscape(evt) {
  if (evt.code == "Escape") {
    const popup = document.querySelector(".popup_opened")
    closePopup(popup)
  }
}

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened")
  document.removeEventListener("keydown", closePopupOnEscape)
}

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileParag.textContent
  disableSubmitButton(popupEditProfile, validationConfig)
  openPopup(popupEditProfile)
})

profileAddButton.addEventListener("click", () => {
  disableSubmitButton(popupAddCard, validationConfig)
  openPopup(popupAddCard)
})

buttonClosePopupProfile.addEventListener("click", () => {
  closePopup(popupEditProfile)
})

buttonClosePopupAddCard.addEventListener("click", () => {
  closePopup(popupAddCard)
})

buttonClosePopupImage.addEventListener("click", () => {
  closePopup(popupImage)
})

popupEditProfile.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupEditProfile)
  }
})

popupAddCard.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupAddCard)
  }
})

popupImage.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupImage)
  }
})

function submitProfileForm(evt) {
  evt.preventDefault()
  profileTitle.textContent = nameInput.value
  profileParag.textContent = jobInput.value
  closePopup(popupEditProfile)
}

formProfile.addEventListener("submit", submitProfileForm)

function imageOpen(card, link) {
  imageImg.src = link
  imageImg.alt = card
  imageTitle.textContent = card
  openPopup(popupImage)
}

function createCard(value) {
  const card = template.querySelector(".element").cloneNode(true)
  if (card) {
    const title = card.querySelector(".element__title")
    const mask = card.querySelector(".element__mask")
    const trash = card.querySelector(".element__trash")
    const like = card.querySelector(".element__like-button")
    if (title && mask && trash && like) {
      title.textContent = value.name
      mask.src = value.link
      mask.alt = title.textContent
      mask.addEventListener("click", () => {
        imageOpen(title.textContent, value.link)
      })
      trash.addEventListener("click", () => {
        card.remove()
      })

      like.addEventListener("click", () => {
        const className = "element__like-button_active"
        if (like)
          if (like.classList.contains(className)) {
            like.classList.remove(className)
          } else {
            like.classList.add(className)
          }
      })
    }
  }
  return card
}

function renderCard(card, container) {
  container.prepend(card)
}

function render() {
  initialCards.reverse().forEach((value) => {
    const newCard = createCard(value)
    if (newCard) renderCard(newCard, cardsContainer)
  })
}

render()

function submitCardForm(evt) {
  evt.preventDefault()
  const name = nameInputNew.value
  const link = linkInputNew.value
  const newCard = createCard({ name, link })
  if (newCard) renderCard(newCard, cardsContainer)
  closePopup(popupAddCard)
  formProfileNew.reset()
}

formProfileNew.addEventListener("submit", submitCardForm)
