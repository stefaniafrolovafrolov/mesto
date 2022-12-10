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
const closeNewBtn = document.querySelector(".popup__close-new")
const popupSaveNew = document.querySelector(".popup__save-new")

function openPopupNew() {
  popupNew.classList.add("popup-new_opened")
}

function closePopupNew() {
  popupNew.classList.remove("popup-new_opened")
}

function openPopup() {
  popup.classList.add("popup_opened")
  nameInput.value = profTitle.textContent
  jobInput.value = profParag.textContent
}

function closePopup() {
  popup.classList.remove("popup_opened")
}

function sendForm(evt) {
  evt.preventDefault()
  profTitle.textContent = nameInput.value
  profParag.textContent = jobInput.value
  closePopup()
}

closeNewBtn.addEventListener("click", closePopupNew)
profAddBtn.addEventListener("click", openPopupNew)
editBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
formElement.addEventListener("submit", sendForm)

//добавил в массив новую ссылку на большое изображение,
//чтобы снизить нагрузку браузера, на перерисовку больших картинок в попап!

const initialCards = [
  {
    name: "Архыз",
    thumbnail:
      "https://images.unsplash.com/photo-1638989280415-d58f7340b273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8JUQwJUIwJUQxJTgwJUQxJTg1JUQxJThCJUQwJUI3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "https://images.unsplash.com/photo-1638989280415-d58f7340b273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
  },
  {
    name: "Челябинская область",
    thumbnail:
      "https://images.unsplash.com/photo-1637007501533-cabd81f963ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    link: "https://images.unsplash.com/photo-1637007501533-cabd81f963ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    name: "Иваново",
    thumbnail:
      "https://images.unsplash.com/photo-1641888897440-7f13f2598fb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fCVEMCVCOCVEMCVCMiVEMCVCMCVEMCVCRCVEMCVCRSVEMCVCMiVEMCVCRXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "https://images.unsplash.com/photo-1641888897440-7f13f2598fb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Камчатка",
    thumbnail:
      "https://images.unsplash.com/photo-1634745188295-7cebd2e1ae96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJUJBJUQwJUIwJUQwJUJDJUQxJTg3JUQwJUIwJUQxJTgyJUQwJUJBJUQwJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "https://images.unsplash.com/photo-1634745188295-7cebd2e1ae96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Холмогорский район",
    thumbnail:
      "https://images.unsplash.com/photo-1627933223503-a4944195d915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMCVBNSVEMCVCRSVEMCVCQiVEMCVCQyVEMCVCRSVEMCVCMyVEMCVCRSVEMSU4MCVEMSU4MSVEMCVCQSVEMCVCOCVEMCVCOSUyMCVEMSU4MCVEMCVCMCVEMCVCOSVEMCVCRSVEMCVCRHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "https://images.unsplash.com/photo-1627933223503-a4944195d915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    name: "Байкал",
    thumbnail:
      "https://images.unsplash.com/photo-1614000531712-0cb05134239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMCU5MSVEMCVCMCVEMCVCOSVEMCVCQSVEMCVCMCVEMCVCQnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "https://images.unsplash.com/photo-1614000531712-0cb05134239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
]

const initialCardsList = document.querySelector(".elements")
const template = document.querySelector("#element-template").content

const formElementNew = document.querySelector(".popup__form-new")
const nameInputNew = document.querySelector(".popup__input-new_type_name")
const linkInputNew = document.querySelector(".popup__input-new_type_link")

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    thumbnail: item.thumbnail,
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
imageClosePopup.addEventListener("click", () => {
  imagePopup.classList.remove("image-popup_opened")
})

function imageOpen(card, link) {
  let cardTitle = card.querySelector(".element__title").textContent
  imageImg.src = link
  imageImg.alt = cardTitle
  imageTitle.textContent = cardTitle

  imagePopup.classList.add("image-popup_opened")
}

function renderCard({ name, thumbnail, link }) {
  const elemTemplateElem = template.querySelector(".element").cloneNode(true)
  elemTemplateElem.querySelector(".element__title").textContent = name
  elemTemplateElem.querySelector(".element__mask").src = thumbnail

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

function createCard(evt) {
  evt.preventDefault()
  const name = nameInputNew.value
  const thumbnail = linkInputNew.value
  const link = linkInputNew.value
  renderCard({ name, thumbnail, link })
}

formElementNew.addEventListener("submit", createCard)
