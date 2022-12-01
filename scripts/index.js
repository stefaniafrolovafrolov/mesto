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
/*let likeBtn = document.querySelector(".element__like-button")*/




let nameInputNew = document.querySelector(".popup__input_type_name")
let jobInputNew = document.querySelector(".popup__input_type_job")







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
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
div.appendChild(image)

let imageTwo = document.createElement("img")
imageTwo.classList.add("element__mask")
imageTwo.src = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
divTwo.appendChild(imageTwo)

let imageThree = document.createElement("img")
imageThree.classList.add("element__mask")
imageThree.src = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
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






const initialCards = [
 div = {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  divTwo = {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  divThree = {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  
]





console.log(div)
console.log(divTwo)
console.log(divThree)


function btnTrashDel() {
  btnTrash.parentElement.remove(div)
}

function btnTrashTwoDel() {
  btnTrashTwo.parentElement.remove(divTwo)
}

function btnTrashThreeDel() {
  btnTrashThree.parentElement.remove(divThree)
}












function openPopupNew() {
  popupNew.classList.add("popup-new_opened")
  nameInputNew.value = div.parentElement
  jobInputNew.value = div.parentElement
  console.log(popupNew)
}

function closePopupNew() {
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


function sendFormNew(evt) {
  evt.preventDefault()
  div.parentElement = nameInputNew.value
  div.parentElement = jobInputNew.value
  closePopupNew()
}



/*let likeBtn = document.querySelectorAll(".element__like-button")
for(let i=0; i<likeBtn.length; i++){
  likeBtn[i].addEventListener('click', function(e){
    likeBtn[i].classList.add("element__like-button_active") 
    /*console.log(e.target.getAttribute('id'));*//*
  })
}
*/


function ready() {
  let likeBtn = document.getElementsByClassName("element__like-button");
 for (let i = 0; likeBtn.length > i; i++) {
    likeBtn[i].onclick = function() {
          for (i = 0; likeBtn.length > i; i++) {
            likeBtn[i].classList.add("element__like-button");
          }
          if (this.classList.contains("element__like-button_active")) {
            this.classList.remove("element__like-button_active")
           } else {
            this.classList.add("element__like-button_active")
          }
      };
  }
}

document.addEventListener("click", ready);





closeNewBtn.addEventListener("click", closePopupNew)
profAddBtn.addEventListener("click", openPopupNew)
editBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
formElement.addEventListener("submit", sendForm)

/*formElementNew.addEventListener("submit", )*/



btnTrash.addEventListener("click", btnTrashDel)
btnTrashTwo.addEventListener("click", btnTrashTwoDel)
btnTrashThree.addEventListener("click", btnTrashThreeDel)

