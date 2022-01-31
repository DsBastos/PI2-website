const buttonScrollUp = document.getElementById("scroll-up");
var colors = ["#0091a4", "black", "#af313d", "#b11c2a"];
const menuSobre = document.getElementById("menuSobre");
const menuParceiros = document.getElementById("menuParceiros");
const menuWorkshop = document.getElementById("menuWorkshop");
const menuPrograma = document.getElementById("menuPrograma");

//------------------------------------------------------------------

function scrollUp() {
  // Quando o 'scroll' é maior que 560 de altura da 'viewport', adicionar a classe 'show-scroll' para a tag com 'scrollUp'
  if (this.scrollY >= 100) buttonScrollUp.classList.add("show-scroll");
  else buttonScrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

buttonScrollUp.addEventListener("mouseover", function() {
  changeBackgroundColorMouseOver(buttonScrollUp);
});

buttonScrollUp.addEventListener("mouseout", function() {
  changeBackgroundColorMouseOut(buttonScrollUp);
});

//-----------------------------------------------------------------

menuSobre.addEventListener("mouseover", function() {
  changeColorMouseOver(menuSobre);
});

menuSobre.addEventListener("mouseout",  function() {
  changeColorMouseOut(menuSobre);
});

menuParceiros.addEventListener("mouseover", function() {
  changeColorMouseOver(menuParceiros);
});

menuParceiros.addEventListener("mouseout",  function() {
  changeColorMouseOut(menuParceiros);
});

menuWorkshop.addEventListener("mouseover", function() {
  changeColorMouseOver(menuWorkshop);
});

menuWorkshop.addEventListener("mouseout",  function() {
  changeColorMouseOut(menuWorkshop);
});

menuPrograma.addEventListener("mouseover", function() {
  changeColorMouseOver(menuPrograma);
});

menuPrograma.addEventListener("mouseout",  function() {
  changeColorMouseOut(menuPrograma);
});

//------------------------------------------------------------

function changeColorMouseOver(menu) {
  menu.style.color = colors[0];
}

function changeColorMouseOut(menu) {
  menu.style.color = colors[1];
}

function changeBackgroundColorMouseOver(callback) {
  callback.style.backgroundColor = colors[2];
}

function changeBackgroundColorMouseOut(callback) {
  callback.style.backgroundColor = colors[3];
}