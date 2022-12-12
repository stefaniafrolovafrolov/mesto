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

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  }
})

function render() {
  placeInfo.reverse().forEach(renderCard)
}

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

function renderCard({ name, link }) {
  const card = template.querySelector(".element").cloneNode(true)
  card.querySelector(".element__title").textContent = name
  card.querySelector(".element__mask").src = link

  card.querySelector(".element__mask").addEventListener("click", () => {
    imageOpen(card, link)
  })

  card.querySelector(".element__trash").addEventListener("click", () => {
    card.remove()
  })

  card.querySelector(".element__like-button").addEventListener("click", () => {
    if (
      card
        .querySelector(".element__like-button")
        .classList.contains("element__like-button_active")
    ) {
      card
        .querySelector(".element__like-button")
        .classList.remove("element__like-button_active")
    } else {
      card
        .querySelector(".element__like-button")
        .classList.add("element__like-button_active")
    }
  })
  cardsContainer.prepend(card)
}

render()

const formProfileNew = document.querySelector("#addForm")
const nameInputNew = document.querySelector(".popup-new__input-new_type_name")
const linkInputNew = document.querySelector(".popup-new__input-new_type_link")

function submitCardForm(evt) {
  evt.preventDefault()
  const name = nameInputNew.value
  const link = linkInputNew.value
  renderCard({ name, link })
  closePopup()
  formProfileNew.reset()
}

imageClosePopup.addEventListener("click", closePopup)
formProfileNew.addEventListener("submit", submitCardForm)
