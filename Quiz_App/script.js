const questions = [
    {
        question: "What does var stand for in Javascript?",
        answers: [
            { text: "Variable", correct: true},
            { text: "Variant", correct: false},
            { text: "Vary", correct: false},
            { text: "Value", correct: false},
        ]
    },
    {
        question: "What is the output type of the typeof operator in Javascript?",
        answers: [
            { text: "Boolean", correct: false},
            { text: "String", correct: true},
            { text: "Number", correct: false},
            { text: "Object", correct: false},
        ]
    },
    {
        question: "Which of these is not a valid loop in Python?",
        answers: [
            { text: "for", correct: false},
            { text: "while", correct: false},
            { text: "nested for", correct: false},
            { text: "do-while", correct: true},
        ]
    },
    {
        question: "Which language uses print() to output data to the screen?",
        answers: [
            { text: "C++", correct: false},
            { text: "Python", correct: true},
            { text: "Java", correct: false},
            { text: "HTML", correct: false},
        ]
    },
    {
        question: "What is used to style HTML documents?",
        answers: [
            { text: "Java", correct: false},
            { text: "JSON", correct: false},
            { text: "CSS", correct: true},
            { text: "Python", correct: false},
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "Django", correct: false},
            { text: "React", correct: true},
            { text: "Flask", correct: false},
            { text: "Laravel", correct: false},
        ]
    },
    {
        question: "Which keyword is used to define a class in Java?",
        answers: [
            { text: "class", correct: true},
            { text: "object", correct: false},
            { text: "define", correct: false},
            { text: "struct", correct: false},
        ]
    },
    {
        question: "What is the file extension for a Java program?",
        answers: [
            { text: ".jav", correct: false},
            { text: ".jv", correct: false},
            { text: ".java", correct: true},
            { text: ".js", correct: false},
        ]
    },
    {
        question: "Which of these is a logical operator in C++?",
        answers: [
            { text: "&&", correct: true},
            { text: "++", correct: false},
            { text: ">>", correct: false},
            { text: "==", correct: false},
        ]
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        answers: [
            { text: "10", correct: false},
            { text: "Error", correct: false},
            { text: "'55'", correct: true},
            { text: "NaN", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();