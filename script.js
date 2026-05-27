const questions = [

  {
    question:
      "1. Где обычно можно встретить иксодового клеща — переносчика вируса?",

    answers:[
      "Только в густом еловом лесу",
      "В траве, кустарниках, на лесных тропах и опушках, в парках",
      "Только в болотистой местности",
      "В сухой степи без растительности"
    ],

    correct:1
  },

  {
    question:
      "2. В какое время года риск укуса клеща наиболее высок?",

    answers:[
      "Декабрь–февраль",
      "Апрель–июнь и август–сентябрь",
      "Только июль",
      "Круглый год одинаков"
    ],

    correct:1
  },

  {
    question:
      "3. Как чаще всего клещ попадает на человека?",

    answers:[
      "Падает с дерева",
      "Прицепляется с травы или кустарника на одежду/обувь",
      "Прыгает с земли",
      "Заносится домашними животными"
    ],

    correct:1
  },

  {
    question:
      "4. Что нужно сделать после обнаружения клеща?",

    answers:[
      "Залить маслом",
      "Аккуратно удалить и поместить в контейнер",
      "Прижечь йодом",
      "Срочно принять антибиотик"
    ],

    correct:1
  },

  {
    question:
      "5. Куда обращаться для исследования клеща?",

    answers:[
      "В магазин",
      "В лабораторию или инфекционную больницу",
      "В аптеку",
      "В ветеринарную клинику"
    ],

    correct:1
  },

  {
    question:
      "6. Какие симптомы могут указывать на энцефалит?",

    answers:[
      "Только покраснение",
      "Высокая температура, головная боль, слабость",
      "Только зуд",
      "Насморк"
    ],

    correct:1
  },

  {
    question:
      "7. Существует ли прививка против энцефалита?",

    answers:[
      "Да, есть эффективные вакцины",
      "Нет",
      "Не помогает",
      "Только народные средства"
    ],

    correct:0
  },

  {
    question:
      "8. Кому рекомендуется вакцинация?",

    answers:[
      "Только детям",
      "Только пенсионерам",
      "Жителям эндемичных районов, туристам, лесникам",
      "Никому"
    ],

    correct:2
  },

  {
    question:
      "9. Какая защита снижает риск укуса?",

    answers:[
      "Шорты и сандалии",
      "Закрытая одежда и репелленты",
      "Громкое пение",
      "Нательный крестик"
    ],

    correct:1
  },

  {
    question:
      "10. Что может назначить фельдшер ФАП для экстренной профилактики?",

    answers:[
      "Компресс",
      "Горчичники",
      "Иммуноглобулин или противовирусные препараты",
      "Слабительные"
    ],

    correct:2
  }

];

const quiz =
  document.getElementById("quiz");

const nextBtn =
  document.getElementById("nextBtn");

const progressBar =
  document.getElementById("progressBar");

const questionNumber =
  document.getElementById("questionNumber");

const progressPercent =
  document.getElementById("progressPercent");

const resultCard =
  document.getElementById("resultCard");

const quizCard =
  document.getElementById("quizCard");

const scoreText =
  document.getElementById("scoreText");

const level =
  document.getElementById("level");

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

function loadQuestion(){

  selectedAnswer = null;

  const q =
    questions[currentQuestion];

  questionNumber.innerText =
    `Вопрос ${currentQuestion + 1}
    / ${questions.length}`;

  const progress =
    ((currentQuestion + 1)
    / questions.length) * 100;

  progressBar.style.width =
    progress + "%";

  progressPercent.innerText =
    Math.round(progress) + "%";

  quiz.innerHTML = `

    <div class="question-title">
      ${q.question}
    </div>

    <div class="answers">

      ${q.answers.map((answer,index)=>

        `
          <div
            class="answer"
            onclick="selectAnswer(${index}, this)"
          >
            ${answer}
          </div>
        `

      ).join("")}

    </div>

  `;
}

function selectAnswer(index, element){

  document
    .querySelectorAll(".answer")
    .forEach(answer => {

      answer.classList.remove(
        "selected"
      );

    });

  element.classList.add("selected");

  selectedAnswer = index;
}

nextBtn.addEventListener(


k",()=>{

  if(selectedAnswer === null){

    alert("Выберите ответ");

    return;
  }

  const answers =
    document.querySelectorAll(".answer");

  const correctIndex =
    questions[currentQuestion].correct;

  answers.forEach((answer,index)=>{

    if(index === correctIndex){

      answer.classList.add("correct");
    }

    if(
      index === selectedAnswer &&
      selectedAnswer !== correctIndex
    ){

      answer.classList.add("wrong");
    }

  });

  if(selectedAnswer === correctIndex){

    score++;
  }

  nextBtn.disabled = true;

  setTimeout(()=>{

    currentQuestion++;

    if(
      currentQuestion <
      questions.length
    ){

      loadQuestion();

      nextBtn.disabled = false;

    }else{

      showResult();
    }

  },1200);

});

function showResult(){

  quizCard.classList.add("hidden");

  resultCard.classList.remove("hidden");

  scoreText.innerText =
    `Ваш результат:
    ${score} из ${questions.length}`;

  if(score <= 4){

    level.innerText =
      "Низкий уровень знаний";

  }else if(score <= 7){

    level.innerText =
      "Средний уровень знаний";

  }else{

    level.innerText =
      "Высокий уровень знаний";
  }
}

function restartQuiz(){

  currentQuestion = 0;

  score = 0;

  selectedAnswer = null;

  resultCard.classList.add("hidden");

  quizCard.classList.remove("hidden");

  loadQuestion();

  nextBtn.disabled = false;
}

loadQuestion();"clic