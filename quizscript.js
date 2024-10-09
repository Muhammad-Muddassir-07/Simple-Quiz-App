const questions = [
    {
        question: "Who is the founder of Microsoft?",
        answers: [
            {text: "Mark Zuckerberg", correct: false},
            {text: "Elon Musk", correct: false},
            {text: "Bill Gates", correct: true},
            {text: "Jeff Bezos", correct: false},
        ]
    },
    {
        question: "How many KBs are there in 4GB?",
        answers: [
            {text: "4149043 KBs", correct: false},
            {text: "4913004 KBs", correct: false},
            {text: "4194304 KBs", correct: true},
            {text: "4861238 KBs", correct: false},
        ]

    },
    {
        question: "What is the full form of CPU?",
        answers: [
            {text: "Central Processing Unit", correct: true},
            {text: "Central Programming Unit", correct: false},
            {text: "Computer Programming Unit", correct: false},
            {text: "Computer Processing Unit", correct: false},
        ]

    },
    {
        question: "Which is the biggest memory unit?",
        answers: [
            {text: "9.7 GigaBytes", correct: false},
            {text: "10240 MegaBytes", correct: true},
            {text: "4194304 KiloBytes", correct: false},
            {text: "1073741824 Bytes", correct: false},
        ]

    },
    {
        question: "Who invented Dev C++?",
        answers: [
            {text: "Charles Babbage", correct: false},
            {text: "Dan McCabbe", correct: false},
            {text: "Colinlaplace", correct: true},
            {text: "Massachussets", correct: false},
        ]
    },
    {
        question: "Who invented Computer?",
        answers: [
            {text: "Massachussets", correct: false},
            {text: "Charles Babbage", correct: true},
            {text: "Colinlaplace", correct: false},
            {text: "Dan McCabbe", correct: false},
        ]
    },
    {
        question: "Who invented Scratch?",
        answers: [
            {text: "Herman Hollerith", correct: false},
            {text: "Elon Musk", correct: false},
            {text: "Bill Gates", correct: false},
            {text: "Massachussets", correct: true},
        ]
    },
    {
        question: "Who invented Punch Card Machine?",
        answers: [
            {text: "Massachussets", correct: false},
            {text: "Dan McCabbe", correct: false},
            {text: "Steve Jobbs", correct: false},
            {text: "Herman Hollerith", correct: true},
        ]
    },
    {
        question: "Which Operating System was developed by Linus Torvalds?",
        answers: [
            {text: "Linux", correct: true},
            {text: "Windows", correct: false},
            {text: "Chrome OS", correct: false},
            {text: "macOS", correct: false},
        ]
    },
    {
        question: "Which company developed the first commercial personal computer?",
        answers: [
            {text: "Apple", correct: false},
            {text: "IBM", correct: false},
            {text: "Microsoft", correct: false},
            {text: "Comodore", correct: true},
        ]
    },
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", selectAnswer);
    });
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    };
};

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    };
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        };
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    };
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    };
});

startQuiz();