/*Написал код для модального окна по id и классу. Не стал делать
 удаление доп класса('.popup') в html, так как этот вариант получился оптимизированней. И + дополнительно
 сделал закрытие модального окна по клику на дисплей вне формы. */

let modal = document.getElementById("myModal");
let button = document.getElementById("myBtn");
let buttonDel = document.getElementsByClassName("popup__close")[0];

button.onclick = function () {
  modal.style.display = "flex"
}

buttonDel.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function (event) {  
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

let formElement = document.querySelector(".popup__form"); 
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
function formSubmitHandler (evt) {
    evt.preventDefault();

    nameInput.value = "";
    jobInput.value = "";
    nameInput.textContent = "";



}


formElement.addEventListener('submit', formSubmitHandler); 
console.log(nameInput.value);
console.log(jobInput.value);