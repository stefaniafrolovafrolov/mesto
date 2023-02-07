//кнопки открытия попапов
const profileAddButton = document.querySelector(".profile__add-button")
const profileEditButton = document.querySelector(".profile__edit-button")

//находим форму редактирования по ее name
const formEditProfile = document.forms.editForm

//находим форму создания карточек по ее name
const formAddProfile = document.forms.addForm

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
}
