let formElement = document.querySelector(".popup__form")
let editBtn = document.querySelector(".profile__edit-button")
let closeBtn = document.querySelector(".popup__close")
let popup = document.querySelector(".popup")
let nameInput = document.querySelector(".popup__input_type_name")
let jobInput = document.querySelector(".popup__input_type_job")
let profTitle = document.querySelector(".profile__title")
let profParag = document.querySelector(".profile__subtitle")

let formElementNew = document.querySelector(".popup__form-new")
let profAddBtn = document.querySelector(".profile__add-button")
let popupNew = document.querySelector(".popup-new")
let closeNewBtn = document.querySelector(".popup__close-new")
let elements = document.querySelector(".elements")
let likeBtn = document.querySelector(".element__like-button")








const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
 
];


/*elements.insertAdjacentHTML('beforeend', ``);

*/
/*function colorLike() {
  likeBtn.classList.add("element__like-button_active")
 console.log(likeBtn);
}
*/

function openPopupNew() {
  popupNew.classList.add("popup-new_opened")
 console.log(popupNew);
}

function closePopupAdd() {
  popupNew.classList.remove("popup-new_opened")
  console.log(closeNewBtn);
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

function colorActive() {
  likeBtn.classList.add("element__like-button_active")
 
}

function closeColor() {
  likeBtn.classList.remove("element__like-button_active")
}




closeNewBtn.addEventListener("click", closePopupAdd)
profAddBtn.addEventListener("click", openPopupNew)
editBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
formElement.addEventListener("submit", sendForm)
likeBtn.addEventListener("click", colorActive)
likeBtn.addEventListener("click", closeColor)