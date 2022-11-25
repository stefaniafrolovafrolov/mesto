let editBtn = document.querySelector(".profile__edit-button");
let closeBtn = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let saveBtn = document.querySelector(".popup__save");
let nameInput = document.querySelector(".popup__input_name");
let JobInput = document.querySelector(".popup__input_job");


function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");

}

function popupSave() {
  let formElement = document.querySelector("#popup__form");
  formElement.addEventListener("submit", formSubmitHandler);
  popup.style.display = "none"
}

function formSubmitHandler(evt) {
  evt.preventDefault()
  let nameInput = document.querySelector(".popup__input_name").value;
  let jobInput = document.querySelector(".popup__input_job").value;
  document.querySelector(".profile__title").textContent = nameInput;
  document.querySelector(".profile__subtitle").textContent = jobInput;
}


saveBtn.addEventListener("click", popupSave);
editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);














/*function openPopup() {
  popup.classList.add("popup_opened");
  
 
}

function closePopup() {
  popup.classList.remove("popup_opened");
 
}

function sendForm(evt) {
  evt.preventDefault();
 
  closePopup();
 
}

editBtn.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
saveButton.addEventListener("submit", sendForm);*/