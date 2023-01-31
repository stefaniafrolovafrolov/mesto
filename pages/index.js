//импорты переменных и классов
import { Card } from "../components/Card.js"
import { validationConfig } from "../components/validationConfig.js"
import { FormValidator } from "../components/FormValidator.js"
import { initialCards } from "../components/initialCards.js"
import { formProfile, formProfileNew, popupEditProfile, popupAddCard, popupImage,
  profileAddButton, profileEditButton, buttonClosePopupProfile, buttonClosePopupAddCard,
  buttonClosePopupImage, nameInput, jobInput, profileTitle, profileParag, cardsContainer,
  imageImg, imageTitle, nameInputNew, linkInputNew } from "../utils/constants.js"

import Section from "../components/Section.js"
import { Popup } from "../components/Popup.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { UserInfo } from "../components/UserInfo.js"

//конфиг
const popupEditProfileValidation = new FormValidator(
  validationConfig,
  popupEditProfile
)
popupEditProfileValidation.enableValidation()
const popupAddCardValidation = new FormValidator(
  validationConfig,
  popupAddCard
)
popupAddCardValidation.enableValidation()


//функция открытия попапов
function openPopup(popup) {
  open(popup)
  document.addEventListener("keydown", closePopupOnEscape)
 /* popup.classList.add("popup_opened")*/
}

function closePopupOnEscape(evt) {
 /* if (evt.code == "Escape") {
    const popup = document.querySelector(".popup_opened")
    closePopup(popup)
  }*/
}

//функция закрытия попапов
function closePopup(popup) {
  close(popup)
 /* popup.classList.remove("popup_opened")*/
  document.removeEventListener("keydown", closePopupOnEscape)
}

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileParag.textContent
  popupEditProfileValidation.disableSubmitButton()
  
  openPopup(popupEditProfile)
})

profileAddButton.addEventListener("click", () => {
  popupAddCardValidation.disableSubmitButton()
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

function openImage(card, link) {
  imageImg.src = link
  imageImg.alt = card
  imageTitle.textContent = card
  openPopup(popupImage)
}

function createCard(value) {
  const card = new Card(value, ".element-template", openImage).generateCard()
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
