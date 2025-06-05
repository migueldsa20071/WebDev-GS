/* Espera o carregamento completo do DOM */
document.addEventListener("DOMContentLoaded", () => {

  // Menu Hambúrguer
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", function () {
  navList.classList.toggle("open");
});


// mudar o tema a escolha do user

const themeOptions = document.querySelectorAll(".theme-option");

themeOptions.forEach(option => {
  option.addEventListener("click", () => {
    const theme = option.dataset.theme;
    document.documentElement.setAttribute("data-theme", theme);
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

  // Quiz
  const quizData = [
  {
    question: "O que é uma enchente?",
    options: [
      "Um terremoto leve",
      "Uma nevasca intensa",
      "O transbordamento de rios ou acúmulo de água",
      "Ventos fortes em área costeira"
    ],
    answer: 2,
  },
  {
    question: "Qual das opções é uma causa comum de enchentes urbanas?",
    options: [
      "Corte de árvores frutíferas",
      "Construção de arranha-céus",
      "Impermeabilização do solo e falta de drenagem",
      "Uso de energia elétrica em excesso"
    ],
    answer: 2,
  },
  {
    question: "Qual atitude ajuda a prevenir enchentes?",
    options: [
      "Lavar calçadas com mangueira",
      "Construir em áreas de várzea",
      "Descarte correto do lixo",
      "Cobrir bueiros com cimento"
    ],
    answer: 2,
  },
  {
    question: "Por que não se deve jogar lixo nas ruas?",
    options: [
      "Porque é feio",
      "Porque entope bueiros e causa enchentes",
      "Porque ocupa espaço",
      "Porque suja o chão"
    ],
    answer: 1,
  },
  {
    question: "Quais são os principais riscos durante uma enchente?",
    options: [
      "Aumento da conta de luz",
      "Deslizamentos, doenças e afogamentos",
      "Seca e calor intenso",
      "Gastos com internet"
    ],
    answer: 1,
  },
  {
    question: "O que significa 'área de risco' em relação às enchentes?",
    options: [
      "Regiões onde chove muito",
      "Locais com infraestrutura moderna",
      "Locais propensos a alagamentos e deslizamentos",
      "Zonas industriais perto de rios"
    ],
    answer: 2,
  },
  {
    question: "Qual doença é comum após enchentes?",
    options: [
      "Catapora",
      "Leptospirose",
      "Sarampo",
      "Varíola"
    ],
    answer: 1,
  },
  {
    question: "O que fazer ao saber que há risco de enchente na sua região?",
    options: [
      "Ignorar e seguir a rotina",
      "Aguardar na rua para observar",
      "Buscar abrigo seguro e seguir orientações da Defesa Civil",
      "Usar eletrodomésticos rapidamente"
    ],
    answer: 2,
  },
  {
    question: "O que é a Defesa Civil?",
    options: [
      "Órgão que organiza eventos públicos",
      "Grupo que fiscaliza o trânsito",
      "Órgão que atua na prevenção e resposta a desastres",
      "Equipe que recolhe lixo reciclável"
    ],
    answer: 2,
  },
  {
    question: "Como as enchentes podem afetar o meio ambiente?",
    options: [
      "Deixando o solo mais fértil",
      "Ajudando a limpar os rios",
      "Diminuindo a temperatura global",
      "Contaminando a água e destruindo habitats"
    ],
    answer: 3,
  },
];


  let quizIndex = 0;
  let score = 0;
  const quizContainer = document.getElementById("quizContainer");
  const resultDiv = document.getElementById("result");

  function showQuestion() {
    if (quizIndex >= quizData.length) {
      quizContainer.innerHTML = "";
      resultDiv.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
      return;
    }

    const { question, options } = quizData[quizIndex];
    quizContainer.innerHTML = `
      <div class="question">${question}</div>
      <div class="options">
        ${options
          .map((opt, i) => `<button class="option" data-index="${i}">${opt}</button>`)
          .join("")}
      </div>`;
  }

  quizContainer.addEventListener("click", (e) => {
    if (e.target.matches(".option")) {
      const chosen = Number(e.target.dataset.index);
      if (chosen === quizData[quizIndex].answer) {
        score++;
      }
      quizIndex++;
      showQuestion();
    }
  });

  showQuestion();
});
