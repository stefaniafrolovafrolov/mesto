//форма
const formProfile = document.querySelector("#editForm")


//попапы
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupImage = document.querySelector(".popup_type_image");


//кнопки
const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeButtonEditProfile = popupEditProfile.querySelector(".popup__close");
const closeButtonAddCard = popupAddCard.querySelector(".popup__close");
const closeButtonImage = popupImage.querySelector(".popup__close");

//поля инпутов
const nameInput = popupEditProfile.querySelector(".popup__input_type_name")
const jobInput = popupEditProfile.querySelector(".popup__input_type_job")

//профиль тайтл и сабтайтл
const profileTitle = document.querySelector(".profile__title")
const profileParag = document.querySelector(".profile__subtitle")

const cardsContainer = document.querySelector(".elements")
const template = document.querySelector("#element-template").content

const imageOpenPopup = document.querySelector(".popup__image-container")

const imageClosePopup = document.querySelector(".popup__close")
const imageImg = document.querySelector(".popup__image")
const imageTitle = document.querySelector(".popup__image-title")

const formProfileNew = document.querySelector("#addForm")
const nameInputNew = document.querySelector(".popup__input_type_image-name")
const linkInputNew = document.querySelector(".popup__input_type_image-link")

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  
} 

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
} 





profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileParag.textContent
  openPopup(popupEditProfile)
});

profileAddButton.addEventListener("click", () => {
  openPopup(popupAddCard)
});




closeButtonEditProfile.addEventListener("click", () => {
  closePopup(popupEditProfile);
});


closeButtonAddCard.addEventListener("click", () => {
  closePopup(popupAddCard);
 
});




closeButtonImage.addEventListener("click", () => {
  closePopup(popupImage);
});



function submitProfileForm(evt) {
  evt.preventDefault()
  profileTitle.textContent = nameInput.value
  profileParag.textContent = jobInput.value
  closePopup(popupEditProfile)
}

formProfile.addEventListener("submit", submitProfileForm)



function imageOpen(card, link) {
  const cardTitle = card.querySelector(".element__title").textContent
  imageImg.src = link
  imageImg.alt = cardTitle
  imageTitle.textContent = cardTitle
  openPopup(popupImage)
}

function createCard(value) {
  const card = template.querySelector(".element").cloneNode(true)
  if (card) {
    const title = card.querySelector(".element__title")
    const mask = card.querySelector(".element__mask")
    const trash = card.querySelector(".element__trash")
    const like = card.querySelector(".element__like-button")
    if (title && mask && trash && like) {
      title.textContent = value.name
      mask.src = value.link
      mask.addEventListener("click", () => {
        imageOpen(card, value.link)
      })
      trash.addEventListener("click", () => {
        card.remove()
      })

      like.addEventListener("click", () => {
        const button = card.querySelector(".element__like-button")
        const className = "element__like-button_active"
        if (button)
          if (button.classList.contains(className)) {
            button.classList.remove(className)
          } else {
            button.classList.add(className)
          }
      })
    }
  }
  return card
}

function renderCard(card, container) {
  container.prepend(card)
}

function render() {
  initialCards.reverse().forEach((value) => {
    const newCard = createCard(value)
    if (newCard) renderCard(newCard, cardsContainer)
  })
}

render()



function submitCardForm(evt) {
  evt.preventDefault()
  const name = nameInputNew.value
  const link = linkInputNew.value
  const newCard = createCard({ name, link })
  if (newCard) renderCard(newCard, cardsContainer)
  closePopup(popupAddCard)
  formProfileNew.reset()
}


formProfileNew.addEventListener("submit", submitCardForm)



