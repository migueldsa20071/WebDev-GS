/* Espera o carregamento completo do DOM */
document.addEventListener("DOMContentLoaded", () => {

  // Menu Hambúrguer
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", function () {
  navList.classList.toggle("open");
});



});
