//подключаю index.css к файлу
import "./index.css"

//импорты переменных и классов
import Card from "../components/Card.js"
import { popupConfig } from "../components/popupConfig.js"
import { validationConfig } from "../components/validationConfig.js"
import { FormValidator } from "../components/FormValidator.js"
import { initialCards } from "../components/initialCards.js"
import {
  profileAddButton,
  profileEditButton,
  editInputName,
  editJobInput,
  formEditProfile,
  formAddProfile,
} from "../utils/constants.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"

//ФУНКЦИИ

//передача текста на страницу профиля редактирования полей Имя, О себе
function profileEditCallbackSubmit(value) {
  userInfo.setUserInfo(value.nameInput, value.jobInput)
  classEditPopup.close()
}

function createCard(item) {
  return new Card(item, ".element-template", () =>
    popupOpenImage.open(item)
  ).generateCard()
}

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
  profileEditCallbackSubmit
)
classEditPopup.setEventListeners()

//Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
const userInfo = new UserInfo({
  title: ".profile__title",
  subtitle: ".profile__subtitle",
})

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

cardSection.renderItems(initialCards.reverse())
