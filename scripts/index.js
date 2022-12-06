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

/*let likeBtn = document.querySelector(".element__like-button")*/




let nameInputNew = document.querySelector(".popup__input_type_name")
let jobInputNew = document.querySelector(".popup__input_type_job")










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


function sendFormNew(evt) {
  evt.preventDefault()
  div.parentElement = nameInputNew.value
  div.parentElement = jobInputNew.value
  closePopupNew()
}






document.body.onload = function () {
  let likeBtn = document.getElementsByClassName("element__like-button");
  if (likeBtn) for (let i = 0; likeBtn.length > i; ++i)
  likeBtn[i].onclick = function () {
          if (this.classList.contains("element__like-button_active")) {
            this.classList.remove("element__like-button_active")
           } else {
            this.classList.add("element__like-button_active")
          }
  }
}





closeNewBtn.addEventListener("click", closePopupNew)
profAddBtn.addEventListener("click", openPopupNew)
editBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
formElement.addEventListener("submit", sendForm)

/*formElementNew.addEventListener("submit", )*/







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
  }
];


const btnTrash = document.createElement("button")
btnTrash.classList.add("element__trash")


/*const btnTrash = document.querySelectorAll(".element__trash")*/



const initialCardsList = document.querySelector(".elements")
const elemTemplate = document.querySelector("#element-template").content
let elemTemplateElem = document.querySelector(".element")


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
  const elemTemplateElem = elemTemplate.querySelector(".element").cloneNode(true);
  elemTemplateElem.querySelector(".element__title").textContent = name;
  elemTemplateElem.querySelector(".element__mask").src = link;
  
  initialCardsList.append(elemTemplateElem);
  
}

render();

function elemTemplateDel() {
  elemTemplateElem.parentElement.remove(elemTemplateElem)
  
}
console.log(elemTemplateElem.nextElementSibling)
btnTrash.addEventListener("click", elemTemplateDel)