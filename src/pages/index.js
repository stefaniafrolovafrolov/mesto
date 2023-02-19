//подключаю index.css к файлу
import "./index.css"

//импорты переменных
import { popupConfig } from "../utils/popupConfig.js"
import { validationConfig } from "../utils/validationConfig.js"

import {
  profileUpdateAvatar,
  profileAddButton,
  profileEditButton,
  editInputName,
  editJobInput,
  formEditProfile,
  formAddProfile,
  formUpdateAvatar,
} from "../utils/constants.js"

//импорты классов
import Card from "../components/Card.js"
import { FormValidator } from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupConfirm from "../components/PopupConfirm"
import UserInfo from "../components/UserInfo.js"

// Попапы
const popupEditProfile = document.querySelector(".popup_type_edit-profile")
const popupAddCard = document.querySelector(".popup_type_add-card")
const popupUpdateAvatar = document.querySelector(".popup_type_update-avatar")
const popupDelContent = document.querySelector(".popup_type_confirmation")
const popupShowImage = document.querySelector(".popup_type_image")

console.log(popupEditProfile)
console.log(popupAddCard)
console.log(popupUpdateAvatar)
console.log(popupDelContent)
console.log(popupShowImage)

export const nameProfile = document.querySelector(".profile__title")
export const aboutProfile = document.querySelector(".profile__subtitle")
export const avatarProfile = document.querySelector(".profile__avatar")
export const contentListNode = document.querySelector(".elements")

//импорт класса Api
import Api from "../utils/Api.js"

// Добавление карточек
// Для каждой карточки создайте экземпляр класса Card.
function createCard(data) {
  // Создадим экземпляр карточки
  const card = new Card(
    data,
    "#element-template",
    showPopupWithImage,
    userId,
    async () => {
      try {
        const res = await api.addLike(data._id)
        card.like()
        card.setLikesCount(res)
      } catch (e) {
        console.warn(e)
      }
    },
    async () => {
      try {
        const res = await api.removeLike(data._id)
        card.dislike()
        card.setLikesCount(res)
      } catch (e) {
        console.warn(e)
      }
    },
    () => {
      popupConfirm.open(card)
    }
  )
  // Создаём карточку и возвращаем наружу
  return card.generateCard()
}

//Открытие увеличенной картинки
function showPopupWithImage(name, link) {
  popupImage.open(name, link)
}

// Форма редактирования профиля
function handleSubmitFormEditProfile(data) {
  const btnOrigText = popupEditProfile.querySelector(".popup__save").textContent
  popupEditProfile.querySelector(".popup__save").textContent = "Сохранение..."
  api
    .editUserInfo(data)
    .then((userData) => {
      currentUser.setUserInfo(userData)
      popupEdit.close()
    })
    .catch((err) => console.log(err))
  popupEditProfile.querySelector(".popup__save").textContent = btnOrigText
}

// Форма обновления аватара
function handleSubmitFormUpdateAvatar(data) {
  const btnOrigText =
    popupUpdateAvatar.querySelector(".popup__save").textContent
  popupUpdateAvatar.querySelector(".popup__save").textContent = "Сохранение..."
  api
    .updateUserAvatar(data)
    .then((userData) => {
      currentUser.setUserInfo(userData)
      avatarProfile.src = userData.avatar
      popupAvatar.close()
    })
    .catch((err) => console.log(err))
  popupUpdateAvatar.querySelector(".popup__save").textContent = btnOrigText
}

// Форма добавления карточек
function handleSubmitFormAddContent(data) {
  const btnOrigText = popupAddCard.querySelector(".popup__save").textContent
  popupAddCard.querySelector(".popup__save").textContent = "Сохранение..."
  api
    .addCard(data)
    .then((newCard) => {
      cardList.addItem(createCard(newCard))
      popupAdd.close()
    })
    .catch((err) => console.log(err))
  popupAddCard.querySelector(".popup__save").textContent = btnOrigText
}

// Попап редактирования профиля
profileEditButton.addEventListener(
  "click",
  () => {
    popupEdit.open()
    popupEdit.setInputsValues(currentUser.getUserInfo())
    validatorFormEditProfile.hideInputErros()
  },
  false
)
profileUpdateAvatar.addEventListener(
  "click",
  () => {
    popupAvatar.open()
    popupAvatar.setInputsValues(currentUser.getUserInfo())
    validatorFormEditProfile.disableSubmitButton()
    /*validatorFormEditProfile.hideInputErros()*/
  },
  false
)

// Попап добавления карточек
profileAddButton.addEventListener(
  "click",
  () => {
    popupAdd.open()
    validatorFormAddProfile.disableSubmitButton()
    /*validatorFormAddProfile.hideInputErros();*/
  },
  false
)

// Для каждой проверяемой формы создайте экземпляр класса FormValidator.
const validatorFormEditProfile = new FormValidator(
  validationConfig,
  formEditProfile
)
const validatorFormAddProfile = new FormValidator(
  validationConfig,
  formAddProfile
)
const validatorFormUpdateAvatar = new FormValidator(
  validationConfig,
  formUpdateAvatar
)

validatorFormEditProfile.enableValidation()
validatorFormAddProfile.enableValidation()
validatorFormUpdateAvatar.enableValidation()

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm
const popupImage = new PopupWithImage(popupConfig.popupImageSelector)
console.log(popupImage)

const popupAdd = new PopupWithForm(
  popupConfig.popupAddCardSelector,
  handleSubmitFormAddContent
)
console.log(popupAdd)

const popupEdit = new PopupWithForm(
  popupConfig.popupEditSelector,
  handleSubmitFormEditProfile
)
console.log(popupEdit)

const popupAvatar = new PopupWithForm(
  popupConfig.popupUpdateAvatarSelector,
  handleSubmitFormUpdateAvatar
)
const popupConfirm = new PopupConfirm(
  popupConfig.popupDelContentSelector,
  async (card) => {
    const btnOrigText =
      popupDelContent.querySelector(".popup__save").textContent
    popupDelContent.querySelector(".popup__save").textContent = "Сохранение..."
    api
      .deleteCard(card._id)
      .then(() => {
        card.remove()
        popupConfirm.close()
      })
      .catch((err) => console.log(err))
    popupDelContent.querySelector(".popup__save").textContent = btnOrigText
  }
)

popupConfirm.setEventListeners()
popupImage.setEventListeners()
popupAdd.setEventListeners()
popupEdit.setEventListeners()
popupAvatar.setEventListeners()

const currentUser = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile,
})

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "78d656f5-7266-4e0f-8f5e-4b00861a3a36",
    "Content-Type": "application/json",
  },
})

// Добавление карточек из массива с сервера
const cardList = new Section(
  {
    renderer: (data) => {
      const card = createCard(data)
      // Добавляем в DOM
      cardList.addItem(card)
    },
  },
  contentListNode
)

let userId;

// Получаем карточки с сервера после того,
// как получим данные пользователя
Promise.all([api.getCurrentUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    currentUser.setUserInfo(userData)
    userId = userData._id
    avatarProfile.src = userData.avatar
    cardList.renderItems(cards.reverse())
  })
  .catch((e) => console.log(e))

/*
//ФУНКЦИИ

function createCard(item) {
  return new Card(item, ".element-template", () =>
    popupOpenImage.open(item)
  ).generateCard()
}

//передача текста на страницу профиля редактирования полей Имя, О себе
function formValues(value) {
  userInfo.setUserInfo(value.nameInput, value.jobInput)
  classEditPopup.close()
}

//Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
const userInfo = new UserInfo({
  titleSelector: ".profile__title",
  subtitleSelector: ".profile__subtitle",
})

//функция открытия попапа редактирования профиля
function openEditProfile() {
  const { title, subtitle } = userInfo.getUserInfo()
  editInputName.value = title
  editJobInput.value = subtitle
  formEditValidator.disableSubmitButton()
  classEditPopup.open()
}

//функция открытия попапа для создания новой карточки
function popupAddCardProfile() {
  formCardValidator.disableSubmitButton()
  classCardPopup.open()
}

//создание класса редактирования профиля
const classEditPopup = new PopupWithForm(
  popupConfig.popupEditSelector,
  formValues
)
classEditPopup.setEventListeners()

//отрисовка карточек на странице из обьекта initialCards
const cardSection = new Section(
  {
    renderer: (item) => cardSection.addItem(createCard(item)),
  },
  ".elements"
)

const classCardPopup = new PopupWithForm(
  popupConfig.popupAddCardSelector,
  (item) => {
    cardSection.addItem(createCard(item))
    classCardPopup.close()
  }
)
classCardPopup.setEventListeners()

//создается обьект класса PopupWithImage
const popupOpenImage = new PopupWithImage(popupConfig.popupImageSelector)
popupOpenImage.setEventListeners()

//валидация формы попап редактирования профиля
const formEditValidator = new FormValidator(validationConfig, formEditProfile)
formEditValidator.enableValidation()

//валидация формы попап создания карточек
const formCardValidator = new FormValidator(validationConfig, formAddProfile)
formCardValidator.enableValidation()

//кнопки открытия попапов
profileAddButton.addEventListener("click", () => popupAddCardProfile())
profileEditButton.addEventListener("click", () => openEditProfile())

cardSection.renderItems(initialCards.reverse())*/
