//кнопки открытия попапов
const profileUpdateAvatar = document.querySelector(".profile__edit-avatar")
const profileAddButton = document.querySelector(".profile__add-button")
const profileEditButton = document.querySelector(".profile__edit-button")

//находим форму редактирования по ее name
const formEditProfile = document.forms.editForm

//находим форму создания карточек по ее name
const formAddProfile = document.forms.addForm

//находим форму обновления аватара по ее name
const formUpdateAvatar = document.forms.editAvatarForm

//находим поля в форме редактирования по их name
const editInputName = formEditProfile.elements.nameInput
const editJobInput = formEditProfile.elements.jobInput

export {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  editInputName,
  editJobInput,
  formAddProfile,
  formUpdateAvatar,
  profileUpdateAvatar
}
