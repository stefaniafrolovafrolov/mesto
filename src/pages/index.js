//подключаю index.css к файлу
import "./index.css"

//импорты переменных-конфигов
import { popupConfig } from "../utils/popupConfig.js"
import { validationConfig } from "../utils/validationConfig.js"

import {
  profileUpdateAvatar,
  profileAddButton,
  profileEditButton,
  formEditProfile,
  formAddProfile,
  formUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
} from "../utils/constants.js"

//импорты классов
import Card from "../components/Card.js"
import { FormValidator } from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupConfirmation from "../components/PopupConfirmation.js"
import UserInfo from "../components/UserInfo.js"

let userId

//импорт класса-утилиты Api
import Api from "../utils/Api.js"

// Функция создания карточек по экземпляру класса Card
function createCard(data) {
  const card = new Card(
    data,
    ".element-template",
    openPopupImage,

    userId,
    async () => {
      try {
        const response = await api.addLike(data._id)
        card.like()
        card.likesCount(response)
      } catch (error) {
        return console.log(`Ошибка: ${error}`)
      }
    },
    async () => {
      try {
        const response = await api.removeLike(data._id)
        card.dislike()
        card.likesCount(response)
      } catch (error) {
        return console.log(`Ошибка: ${error}`)
      }
    },
    () => {
      popupConfirmation.open(card)
    }
  )

  return card.generateCard()
}

//Открытие увеличенной картинки
function openPopupImage(name, link) {
  popupImage.open(name, link)
}

// Форма редактирования профиля
async function handleSubmitFormEditProfile(data) {
  try {
    const userProfile = await api.editProfileUserInfo(data)
    user.setUserInfo(userProfile)
    popupEdit.close()
  } catch (error) {
    return console.log(`Ошибка: ${error}`)
  }
}

// Форма обновления аватара
async function handleSubmitFormUpdateAvatar(data) {
  try {
    const userProfile = await api.updateProfileUserAvatar(data)
    user.setUserInfo(userProfile)
    avatarProfile.src = userProfile.avatar
    popupAvatar.close()
  } catch (error) {
    return console.log(`Ошибка: ${error}`)
  }
}

// Форма добавления карточек
async function handleSubmitFormAddCard(data) {
  try {
    const newCard = await api.addNewCard(data)
    cardList.addItem(createCard(newCard))
    popupAdd.close()
  } catch (error) {
    return console.log(`Ошибка: ${error}`)
  }
}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm
const popupImage = new PopupWithImage(popupConfig.popupImageSelector)

const popupAdd = new PopupWithForm(
  popupConfig.popupAddCardSelector,
  handleSubmitFormAddCard
)

const popupEdit = new PopupWithForm(
  popupConfig.popupEditSelector,
  handleSubmitFormEditProfile
)

const popupAvatar = new PopupWithForm(
  popupConfig.popupUpdateAvatarSelector,
  handleSubmitFormUpdateAvatar
)

const user = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile,
})

profileEditButton.addEventListener(
  "click",
  () => {
    popupEdit.open()
    popupEdit.setInputValue(user.getUserInfo())
    validatorFormEditProfile.disableSubmitButton()
  },
  false
)

profileUpdateAvatar.addEventListener(
  "click",
  () => {
    popupAvatar.open()
    popupAvatar.setInputValue(user.getUserInfo())
    validatorFormUpdateAvatar.disableSubmitButton()
  },
  false
)

profileAddButton.addEventListener(
  "click",
  () => {
    popupAdd.open()
    validatorFormAddProfile.disableSubmitButton()
  },
  false
)

// Для каждой проверяемой формы новый экземпляр класса FormValidator
const validatorFormEditProfile = new FormValidator(
  validationConfig,
  formEditProfile
)

validatorFormEditProfile.enableValidation()

const validatorFormAddProfile = new FormValidator(
  validationConfig,
  formAddProfile
)

validatorFormAddProfile.enableValidation()

const validatorFormUpdateAvatar = new FormValidator(
  validationConfig,
  formUpdateAvatar
)

validatorFormUpdateAvatar.enableValidation()

const popupConfirmation = new PopupConfirmation(
  popupConfig.popupDeleteSelector,
  async (card) => {
    api
      .removeCard(card._id)
      .then(() => {
        card.remove()
        popupConfirmation.close()
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }
)

// Загружка карточек с сервера
const cardList = new Section(
  {
    renderer: (data) => {
      const card = createCard(data)

      cardList.addItem(card)
    },
  },
  ".elements"
)

console.log()

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "78d656f5-7266-4e0f-8f5e-4b00861a3a36",
    "Content-Type": "application/json",
  },
})

// Отрисовка карточек с сервера + отрисовка данных пользователя
Promise.all([api.getRealUserInfo(), api.getInitialCards()])
  .then(([userProfile, cards]) => {
    user.setUserInfo(userProfile)
    // Использовал контрольную проверку для попадания правильных данных
    /* const error_title = "При получении данных с сервера"
    const editName = popupEditProfile.querySelector(".popup__input_type_name")
    const editJob = popupEditProfile.querySelector(".popup__input_type_job")
    if (editName) {
      editName.value = userProfile

.name
    } else console.log(error_title + " не найден Edit popup__input_type_name")
    if (editJob) {
      editJob.value = userProfile

.about
    } else console.log(error_title + " не найден Edit popup__input_type_job")*/
    userId = userProfile._id
    avatarProfile.src = userProfile.avatar
    cardList.renderItems(cards)
  })

  .catch((error) => console.log(`Ошибка: ${error}`))
