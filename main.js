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
