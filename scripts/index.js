let openPopup = document.querySelectorAll(
  ".profile__edit-button"
) /*кнопка открытия попапа*/
let closePopup = (document.querySelector(".popup__close").onclick =
  close) /*кнопка закрытия попапа*/
let popup = document.querySelector(".popup") /* попап дисплай ноне*/
let popupActive =
  document.querySelector(".popup_opened") /* попап дисплай флекс*/

openPopup.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault() // Предотвращаем дефолтное поведение браузера
    popup.style.display = "flex" /*меняю состояние дисплей с нон на флекс*/
  })
})

function close() {
  popup.style.display = "none"
}

document.querySelector(".popup__save").onclick = myFanc
function formSubmitHandler(evt) {
  evt.preventDefault()

  let nameInput = document.querySelector(".popup__input_name").value
  let jobInput = document.querySelector(".popup__input_job").value
  document.querySelector(".profile__title").textContent = nameInput
  document.querySelector(".profile__subtitle").textContent = jobInput
}

function myFanc() {
  let formElement = document.querySelector("#popup__form")
  formElement.addEventListener("submit", formSubmitHandler)
  popup.style.display = "none"
}
