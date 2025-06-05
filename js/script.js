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



  // SlideShow
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  document.getElementById("prev").addEventListener("click", () => showSlide(currentSlide - 1));
  document.getElementById("next").addEventListener("click", () => showSlide(currentSlide + 1));

  // Autoplay a cada 5 seg
  setInterval(() => showSlide(currentSlide + 1), 5000);

  // Validação do Formulário
  const form = document.getElementById("contactForm");
  const formError = document.getElementById("formError");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      formError.hidden = false;
    } else {
      formError.hidden = true;
      alert("Mensagem enviada com sucesso!");
    }
  });


});
