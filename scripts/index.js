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

let element = document.querySelector(".elements")
let div = document.createElement("div")
div.classList.add("element")
element.appendChild(div)

let divTwo = document.createElement("div")
divTwo.classList.add("element")
element.appendChild(divTwo)

let divThree = document.createElement("div")
divThree.classList.add("element")
element.appendChild(divThree)

let btnTrash = document.createElement("button")
btnTrash.classList.add("element__trash")
div.appendChild(btnTrash)

let btnTrashTwo = document.createElement("button")
btnTrashTwo.classList.add("element__trash")
divTwo.appendChild(btnTrashTwo)

let btnTrashThree = document.createElement("button")
btnTrashThree.classList.add("element__trash")
divThree.appendChild(btnTrashThree)

let image = document.createElement("img")
image.classList.add("element__mask")
image.src =
  "https://images.unsplash.com/photo-1630011575551-a07690be4c4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fCVEMCVCMCVEMSU4MCVEMSU4NSVEMSU4QiVEMCVCN3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
div.appendChild(image)

let imageTwo = document.createElement("img")
imageTwo.classList.add("element__mask")
imageTwo.src =
  "https://images.unsplash.com/photo-1609067936529-59bf24113fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fCVEMSU4NyVEMCVCNSVEMCVCQiVEMSU4RiVEMCVCMSVEMCVCOCVEMCVCRCVEMCVCQSVEMCVCMCVEMSU4RiUyMCVEMCVCRSVEMCVCMSVEMCVCQiVEMCVCMCVEMSU4MSVEMSU4MiVEMSU4Q3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
divTwo.appendChild(imageTwo)

let imageThree = document.createElement("img")
imageThree.classList.add("element__mask")
imageThree.src =
  "https://images.unsplash.com/photo-1598385716618-d0dbc5f9ebca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JUQwJUI4JUQwJUIyJUQwJUIwJUQwJUJEJUQwJUJFJUQwJUIyJUQwJUJFfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
divThree.appendChild(imageThree)

let divGroup = document.createElement("div")
divGroup.classList.add("element__group")
div.appendChild(divGroup)

let divGroupTwo = document.createElement("div")
divGroupTwo.classList.add("element__group")
divTwo.appendChild(divGroupTwo)

let divGroupThree = document.createElement("div")
divGroupThree.classList.add("element__group")
divThree.appendChild(divGroupThree)

let title = document.createElement("h2")
title.classList.add("element__title")
title.textContent = "Архыз"
div.appendChild(title)

let titleTwo = document.createElement("h2")
titleTwo.classList.add("element__title")
titleTwo.textContent = "Челябинская область"
divTwo.appendChild(titleTwo)

let titleThree = document.createElement("h2")
titleThree.classList.add("element__title")
titleThree.textContent = "Иваново"
divThree.appendChild(titleThree)

let btnLike = document.createElement("button")
btnLike.classList.add("element__like-button")
div.appendChild(btnLike)

let btnLikeTwo = document.createElement("button")
btnLikeTwo.classList.add("element__like-button")
divTwo.appendChild(btnLikeTwo)

let btnLikeThree = document.createElement("button")
btnLikeThree.classList.add("element__like-button")
divThree.appendChild(btnLikeThree)

divGroup.appendChild(title)
divGroup.appendChild(btnLike)

divGroupTwo.appendChild(titleTwo)
divGroupTwo.appendChild(btnLikeTwo)

divGroupThree.appendChild(titleThree)
divGroupThree.appendChild(btnLikeThree)



console.log(element)


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

/*elements.insertAdjacentHTML('beforeend', ``);

*/
/*function colorLike() {
  likeBtn.classList.add("element__like-button_active")
 console.log(likeBtn);
}
*/

function openPopupNew() {
  popupNew.classList.add("popup-new_opened")
  console.log(popupNew)
}

function closePopupAdd() {
  popupNew.classList.remove("popup-new_opened")
  console.log(closeNewBtn)
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
