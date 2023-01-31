//формы
export const formProfile = document.querySelector("#editForm")
export const formProfileNew = document.querySelector("#addForm")

//попапы
export const popupEditProfile = document.querySelector(".popup_type_edit-profile")
export const popupAddCard = document.querySelector(".popup_type_add-card")
export const popupImage = document.querySelector(".popup_type_image")

//кнопки
export const profileAddButton = document.querySelector(".profile__add-button")
export const profileEditButton = document.querySelector(".profile__edit-button")
export const buttonClosePopupProfile = popupEditProfile.querySelector(".popup__close")
export const buttonClosePopupAddCard = popupAddCard.querySelector(".popup__close")
export const buttonClosePopupImage = popupImage.querySelector(".popup__close")

//поля инпутов
export const nameInput = popupEditProfile.querySelector(".popup__input_type_name")
export const jobInput = popupEditProfile.querySelector(".popup__input_type_job")

//профиль тайтл и сабтайтл
export const profileTitle = document.querySelector(".profile__title")
export const profileParag = document.querySelector(".profile__subtitle")

export const cardsContainer = document.querySelector(".elements")
export const imageImg = document.querySelector(".popup__image")
export const imageTitle = document.querySelector(".popup__image-title")
export const nameInputNew = document.querySelector(".popup__input_type_image-name")
export const linkInputNew = document.querySelector(".popup__input_type_image-link")
