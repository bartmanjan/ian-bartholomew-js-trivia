const quizDataEng = [
    {    
    question: "What is the tallest building in the world?",
    a: "Shanghai Tower",
    b: "Taipei 101",
    c: "Willis Tower",
    d: "Burj Khalifa",
    correct: "d",
    },
    {    
    question: "What year did the French Revolution start?",
    a: "1766",
    b: "1789",
    c: "1774",
    d: "1801",
    correct: "b",
    },
    {    
    question: "What does the acronym DKNY stand for?",
    a: "Donkey Kong New Year",
    b: "Dazzling Kaleidoscope of New York",
    c: "Diana Kane New Youth",
    d: "Donna Karan New York",
    correct: "d",
    },
    {    
    question: "Where was gunpowder invented?",
    a: "China",
    b: "Britain",
    c: "Spain",
    d: "Hell",
    correct: "a"
    },
];

const quizDataEsp = [
    {    
    question: "Cuál es el edificio más alto del mundo?",
    a: "la Torre de Shanghai",
    b: "Taipei 101",
    c: "la Torre Willis",
    d: "el Burj Khalifa",
    correct: "d",
    },
    {    
    question: "En cual año comenzó la Revolución Francesa?",
    a: "1766",
    b: "1789",
    c: "1774",
    d: "1801",
    correct: "b",
    },
    {    
    question: "Qué significa el acrónimo DKNY?",
    a: "Donkey Kong New Year",
    b: "Dazzling Kaleidoscope of New York",
    c: "Diana Kane New Youth",
    d: "Donna Karan Nueva York",
    correct: "d",
    },
    {    
    question: "Dónde se inventó la pólvora?",
    a: "China",
    b: "Bretaña",
    c: "España",
    d: "el Infierno",
    correct: "a"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let isSpanish = false;
let currentQuiz = 0
let score = 0

toggleLanguage();

loadQuiz()

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = isSpanish ? quizDataEsp[currentQuiz] : quizDataEng[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function loadQuizEsp() {
    deselectAnswers();

    const currentQuizData = quizDataEsp[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
        
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        const currentQuizData = isSpanish ? quizDataEsp[currentQuiz] : quizDataEng[currentQuiz];

        if(answer === currentQuizData.correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < (isSpanish ? quizDataEsp.length : quizDataEng.length)) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You scored ${score}/${(isSpanish ? quizDataEsp.length : quizDataEng.length)}</h2><button onclick="location.reload()">Reload</button></>`
        }

    }
})

const toggleCheckbox = document.getElementById('poop');

toggleCheckbox.addEventListener('change', function() {
        isSpanish = !isSpanish;
        if (isSpanish) {
            loadQuizEsp();
        } else {
        loadQuiz();
        }
    });
  

function toggleLanguage() {
    isSpanish = !isSpanish;
    loadQuiz();
}
