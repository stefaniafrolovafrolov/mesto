const formElement = document.querySelector(".popup__form")
const editBtn = document.querySelector(".profile__edit-button")
const closeBtn = document.querySelector(".popup__close")
const popup = document.querySelector(".popup")
const nameInput = document.querySelector(".popup__input_type_name")
const jobInput = document.querySelector(".popup__input_type_job")
const profTitle = document.querySelector(".profile__title")
const profParag = document.querySelector(".profile__subtitle")
const profAddBtn = document.querySelector(".profile__add-button")
const popupNew = document.querySelector(".popup-new")
const closeNewBtn = document.querySelector(".popup-new__close-new")
const popupSaveNew = document.querySelector(".popup-new__save-new")

function openPopupNew() {
  popupNew.classList.add("popup-new_opened")
}

function openPopup() {
  popup.classList.add("popup_opened")
  nameInput.value = profTitle.textContent
  jobInput.value = profParag.textContent
}

function closePopup() {
  popup.classList.remove("popup_opened")
  popupNew.classList.remove("popup-new_opened")
  imagePopup.classList.remove("image-popup_opened")
}

function sendForm(evt) {
  evt.preventDefault()
  profTitle.textContent = nameInput.value
  profParag.textContent = jobInput.value
  closePopup()
}

closeNewBtn.addEventListener("click", closePopup)
profAddBtn.addEventListener("click", openPopupNew)
editBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)

formElement.addEventListener("submit", sendForm)

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
]

const initialCardsList = document.querySelector(".elements")
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
const imagePopup = document.querySelector(".image-popup")
const imageClosePopup = document.querySelector(".image-popup__close")
const imageImg = document.querySelector(".image-popup__image")
const imageTitle = document.querySelector(".image-popup__title")

function imageOpen(card, link) {
  const cardTitle = card.querySelector(".element__title").textContent
  imageImg.src = link
  imageImg.alt = cardTitle
  imageTitle.textContent = cardTitle
  imagePopup.classList.add("image-popup_opened")
}

function renderCard({ name, link }) {
  const elemTemplateElem = template.querySelector(".element").cloneNode(true)
  elemTemplateElem.querySelector(".element__title").textContent = name
  elemTemplateElem.querySelector(".element__mask").src = link

  elemTemplateElem
    .querySelector(".element__mask")
    .addEventListener("click", () => {
      imageOpen(elemTemplateElem, link)
    })

  elemTemplateElem
    .querySelector(".element__trash")
    .addEventListener("click", () => {
      elemTemplateElem.remove()
    })

  elemTemplateElem
    .querySelector(".element__like-button")
    .addEventListener("click", () => {
      if (
        elemTemplateElem
          .querySelector(".element__like-button")
          .classList.contains("element__like-button_active")
      ) {
        elemTemplateElem
          .querySelector(".element__like-button")
          .classList.remove("element__like-button_active")
      } else {
        elemTemplateElem
          .querySelector(".element__like-button")
          .classList.add("element__like-button_active")
      }
    })
  initialCardsList.prepend(elemTemplateElem)
}

render()

const formElementNew = document.querySelector(".popup-new__form-new")
const nameInputNew = document.querySelector(".popup-new__input-new_type_name")
const linkInputNew = document.querySelector(".popup-new__input-new_type_link")

function createCard(evt) {
  evt.preventDefault()
  const name = nameInputNew.value
  const link = linkInputNew.value
  renderCard({ name, link })
}

imageClosePopup.addEventListener("click", closePopup)
formElementNew.addEventListener("submit", createCard)
