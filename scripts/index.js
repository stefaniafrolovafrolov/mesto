let formElement = document.querySelector(".popup__form")
let editBtn = document.querySelector(".profile__edit-button")
let closeBtn = document.querySelector(".popup__close")
let popup = document.querySelector(".popup")
let nameInput = document.querySelector(".popup__input_type_name")
let jobInput = document.querySelector(".popup__input_type_job")
let profTitle = document.querySelector(".profile__title")
let profParag = document.querySelector(".profile__subtitle")

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

editBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
formElement.addEventListener("submit", sendForm)
