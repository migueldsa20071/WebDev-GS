/* Espera o carregamento completo do DOM */
document.addEventListener("DOMContentLoaded", () => {

  // Menu Hambúrguer
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", function () {
  navList.classList.toggle("open");
});


// mudar o tema a escolha do user

const themeRadios = document.querySelectorAll('input[name="theme"]');

themeRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    document.documentElement.setAttribute("data-theme", radio.value);
  });
});



});
