// JavaScript Document

var open = 0;

function toggleMenu() {
  if (open == 0) {
    document.getElementById("mainPage").className = "open";
    open = 1;
  }
  else if (open == 1) {
    document.getElementById("mainPage").className = "closed";
    open = 0;
  }
}
