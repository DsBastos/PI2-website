const button = document.getElementById("top");
const footer = document.getElementsByClassName("footer");
/*
window.scroll(function () {
  if (window.scrollY > footer.offsetHeight) {
    document
      .getElementByClassName("top")
      .classList.remove("imgGoTopOutline")
      .classList.add("goTopFull");
  } else {
    document
      .getElementByClassName("top")
      .classList.remove("goTopFull")
      .classList.add("imgGoTopOutline");
  }
});*/

let lastScroll = 0;

window.addEventListener("scroll", () => {

  if (window.pageXOffset > 150) {
    button.classList.remove("imgGoTopOutline");
  }
});
