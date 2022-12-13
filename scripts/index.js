//начинаю править попапы
const 
const formProfile = document.querySelector("#editForm")
const popupProfileOpenButton = document.querySelector(".profile__edit-button")
const popupProfileCloseButton = document.querySelector(".popup__close")
const popupProfile = document.querySelector(".popup")
const nameInput = document.querySelector(".popup__input_type_name")
const jobInput = document.querySelector(".popup__input_type_job")
const profileTitle = document.querySelector(".profile__title")
const profileParag = document.querySelector(".profile__subtitle")
const popupProfileOpenButtonNew = document.querySelector(".profile__add-button")
const popupProfileNew = document.querySelector(".popup-new")
const popupProfileCloseButtonNew = document.querySelector(".popup-new__close-new")

function openPopupNew() {
  popupProfileNew.classList.add("popup-new_opened")
}

function openPopup() {
  popupProfile.classList.add("popup_opened")
  nameInput.value = profileTitle.textContent
  jobInput.value = profileParag.textContent
}

function closePopup() {
  popupProfile.classList.remove("popup_opened")
  popupProfileNew.classList.remove("popup-new_opened")
  popupImage.classList.remove("image-popup_opened")
}

function submitProfileForm(evt) {
  evt.preventDefault()
  profileTitle.textContent = nameInput.value
  profileParag.textContent = jobInput.value
  closePopup()
}

popupProfileCloseButtonNew.addEventListener("click", closePopup)
popupProfileOpenButton.addEventListener("click", openPopup)
popupProfileOpenButtonNew.addEventListener("click", openPopupNew)
popupProfileCloseButton.addEventListener("click", closePopup)
formProfile.addEventListener("submit", submitProfileForm)

const cardsContainer = document.querySelector(".elements")
const template = document.querySelector("#element-template").content

const imageOpenPopup = document.querySelector(".image-popup__container")
const popupImage = document.querySelector(".image-popup")
const imageClosePopup = document.querySelector(".image-popup__close")
const imageImg = document.querySelector(".image-popup__image")
const imageTitle = document.querySelector(".image-popup__title")

function imageOpen(card, link) {
  const cardTitle = card.querySelector(".element__title").textContent
  imageImg.src = link
  imageImg.alt = cardTitle
  imageTitle.textContent = cardTitle
  popupImage.classList.add("image-popup_opened")
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
      mask.addEventListener("click", () => {
        imageOpen(card, value.link)
      })
      trash.addEventListener("click", () => {
        card.remove()
      })

      like.addEventListener("click", () => {
        const button = card.querySelector(".element__like-button")
        const clsName = "element__like-button_active"
        if (button)
          if (button.classList.contains(clsName)) {
            button.classList.remove(clsName)
          } else {
            button.classList.add(clsName)
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

const formProfileNew = document.querySelector("#addForm")
const nameInputNew = document.querySelector(".popup-new__input-new_type_name")
const linkInputNew = document.querySelector(".popup-new__input-new_type_link")

function submitCardForm(evt) {
  evt.preventDefault()
  const name = nameInputNew.value
  const link = linkInputNew.value
  const newCard = createCard({ name, link })
  if (newCard) renderCard(newCard, cardsContainer)
  closePopup()
  formProfileNew.reset()
}

imageClosePopup.addEventListener("click", closePopup)
formProfileNew.addEventListener("submit", submitCardForm)
