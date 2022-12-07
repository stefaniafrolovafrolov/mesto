const formElement = document.querySelector(".popup__form")
const editBtn = document.querySelector(".profile__edit-button")
const closeBtn = document.querySelector(".popup__close")
const popup = document.querySelector(".popup")
const nameInput = document.querySelector(".popup__input_type_name")
const jobInput = document.querySelector(".popup__input_type_job")
const profTitle = document.querySelector(".profile__title")
const profParag = document.querySelector(".profile__subtitle")

const formElementNew = document.querySelector(".popup__form-new")
const profAddBtn = document.querySelector(".profile__add-button")
const popupNew = document.querySelector(".popup-new")
const closeNewBtn = document.querySelector(".popup__close-new")

let nameInputNew = document.querySelector(".popup__input-new_type_name")
let jobInputNew = document.querySelector(".popup__input-new_type_job")

function openPopupNew() {
  popupNew.classList.add("popup-new_opened")
  nameInputNew.value
  jobInputNew.value
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

/*function sendFormNew(evt) {
  evt.preventDefault()
  div.placeInfo = nameInputNew.value
  div.placeInfo = jobInputNew.value
  closePopupNew()
}

formElementNew.addEventListener("submit", sendFormNew)*/

closeNewBtn.addEventListener("click", closePopupNew)
profAddBtn.addEventListener("click", openPopupNew)
editBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
formElement.addEventListener("submit", sendForm)



const initialCards = [
  {
    name: "Архыз",
    link: "https://images.unsplash.com/photo-1627329904799-607897b1eb60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJTkwJUQxJTgwJUQxJTg1JUQxJThCJUQwJUI3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Челябинская область",
    link: "https://images.unsplash.com/photo-1637007501533-cabd81f963ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
  },
  {
    name: "Иваново",
    link: "https://images.unsplash.com/photo-1641888897440-7f13f2598fb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fCVEMCVCOCVEMCVCMiVEMCVCMCVEMCVCRCVEMCVCRSVEMCVCMiVEMCVCRXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Камчатка",
    link: "https://images.unsplash.com/photo-1634745188295-7cebd2e1ae96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJUJBJUQwJUIwJUQwJUJDJUQxJTg3JUQwJUIwJUQxJTgyJUQwJUJBJUQwJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Холмогорский район",
    link: "https://images.unsplash.com/photo-1627933223503-a4944195d915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMCVBNSVEMCVCRSVEMCVCQiVEMCVCQyVEMCVCRSVEMCVCMyVEMCVCRSVEMSU4MCVEMSU4MSVEMCVCQSVEMCVCOCVEMCVCOSUyMCVEMSU4MCVEMCVCMCVEMCVCOSVEMCVCRSVEMCVCRHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Байкал",
    link: "https://images.unsplash.com/photo-1614000531712-0cb05134239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fCVEMCU5MSVEMCVCMCVEMCVCOSVEMCVCQSVEMCVCMCVEMCVCQnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
]

let sectionElement = document.querySelector(".elements")

const template = document.querySelector("#element-template").content

const div = document.createElement("div")
div.classList.add("element")
const btnTrash = document.createElement("button")
btnTrash.classList.add("element__trash")
const image = document.createElement("img")
image.classList.add("element__mask")
image.src = ""
image.alt = ""
const divGroup = document.createElement("div")
divGroup.classList.add("element__group")
const title = document.createElement("h2")
title.classList.add("element__title")
const likeBtn = document.createElement("button")
likeBtn.classList.add("element__like-button")
template.appendChild(div)
div.appendChild(btnTrash)
div.appendChild(image)
div.appendChild(divGroup)
divGroup.appendChild(title)
divGroup.appendChild(likeBtn)

const initialCardsList = document.querySelector(".elements")

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  }
})

function render() {
  placeInfo.forEach(renderCard)
}

function renderCard({ name, link }) {
  let elemTemplateElem = template.querySelector(".element").cloneNode(true)
  elemTemplateElem.querySelector(".element__title").textContent = name
  elemTemplateElem.querySelector(".element__mask").src = link
  initialCardsList.append(elemTemplateElem)
}

render()

document.body.onload = function () {
  let likeBtn = document.getElementsByClassName("element__like-button")
  if (likeBtn)
    for (let i = 0; likeBtn.length > i; ++i)
      likeBtn[i].onclick = function () {
        if (this.classList.contains("element__like-button_active")) {
          this.classList.remove("element__like-button_active")
        } else {
          this.classList.add("element__like-button_active")
        }
      }
  //функция удаления карточек
  const btnTrash = document.getElementsByClassName("element__trash")
  if (btnTrash)
    for (let i = 0; btnTrash.length > i; ++i)
      btnTrash[i].onclick = function () {
        this.parentElement.remove()
      }
}

function sendFormNew(evt) {
  evt.preventDefault()
  div.placeInfo = nameInputNew.value
  div.placeInfo = jobInputNew.value

  let addElem = (name, link) => {
return div
  }


  closePopupNew()
}
console.log(formElementNew)
formElementNew.addEventListener("submit", sendFormNew)


window.onclick = function() {
  let form = document.querySelector(".popup__form-new");
  let addElem = (text, src) => {
      /*let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let img = document.createElement("img");
      img.src = src;
      div.append(img);
      h2.textContent = text;*/
      initialCardsList.append(div);
      return div;
  }
  form.onsubmit = () => {
      let name = document.querySelector(".popup__input-new_type_name");
              let image = document.querySelector(".popup__input-new_type_job");
              document.body.append(addElem(name.value, image.value));
              return false;
  }
}






















/*
const initialCardsList = document.querySelector(".elements")
const elemTemplate = document.querySelector("#element-template").content

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  let elemTemplateElem = elemTemplate.querySelector(".element").cloneNode(true);
  elemTemplateElem.querySelector(".element__title").textContent = name;
  elemTemplateElem.querySelector(".element__mask").src = link;
  
  initialCardsList.appendChild(btnTrash);
  initialCardsList.append(elemTemplateElem);
 

  
}

render();

function deleteCards() {
  elemTemplate.remove() 
  console.log(btnTrash.parentElement)
}

btnTrash.addEventListener("click", deleteCards)*/
