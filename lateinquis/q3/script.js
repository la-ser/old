const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart Quiz'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'mens',
        answers: [
            { text: 'Tribun', correct: false },
            { text: 'Verstand', correct: true },
            { text: 'überliefern', correct: false },
            { text: 'Geist', correct: true }
        ]
    },
    {
        question: 'prodere',
        answers: [
            { text: 'ermatten', correct: false },
            { text: 'schlafen', correct: false },
            { text: 'verraten', correct: true },
            { text: 'daher', correct: false }
        ]
    },
    {
        question: 'tribunus',
        answers: [
            { text: 'Verstand', correct: false },
            { text: 'Sinn', correct: false },
            { text: 'schlafen', correct: false },
            { text: 'Tribun', correct: true }
        ]
    },
    {
        question: 'quiescere',
        answers: [
            { text: 'ausruhen', correct: true },
            { text: 'verraten', correct: false },
            { text: 'überliefern', correct: false },
            { text: 'also', correct: false }
        ]
    },
    {
        question: 'deficere',
        answers: [
            { text: 'Geist', correct: false },
            { text: 'abnehmen', correct: true },
            { text: 'schlafen', correct: false },
            { text: 'ausruhen', correct: false }
        ]
    },
    {
        question: 'proinde',
        answers: [
            { text: 'ruhen', correct: false },
            { text: 'also', correct: true },
            { text: 'daher', correct: true },
            { text: 'verraten', correct: false }
        ]
    },
    {
        question: 'prohibere, ne',
        answers: [
            { text: 'daran hinder, dass', correct: true },
            { text: 'auslöschen', correct: false },
            { text: 'häufig', correct: false },
            { text: 'vernichten', correct: false }
        ]
    },
    {
        question: 'exstinguere',
        answers: [
            { text: 'ausruhen', correct: false },
            { text: 'zahlreich', correct: false },
            { text: 'auslöschen', correct: true },
            { text: 'ebenso', correct: false }
        ]
    },
    {
        question: 'quamvis',
        answers: [
            { text: 'auslöschen', correct: false },
            { text: 'verraten', correct: false },
            { text: 'also', correct: false },
            { text: 'wenn auch', correct: true }
        ]
    },
    {
        question: 'creber',
        answers: [
            { text: 'also', correct: false },
            { text: 'abnehmen', correct: false },
            { text: 'häufig', correct: true },
            { text: 'gleichfalls', correct: false }
        ]
    },
    {
        question: 'item',
        answers: [
            { text: 'Tribun', correct: false },
            { text: 'also', correct: false },
            { text: 'daher', correct: false },
            { text: 'ebenso', correct: true }
        ]
    },
    {
        question: 'sponte mea',
        answers: [
            { text: 'von selbst', correct: true },
            { text: 'also', correct: false },
            { text: 'freiwillig', correct: true },
            { text: 'verraten', correct: false }
        ]
    },
    {
        question: 'civitas',
        answers: [
            { text: 'Menge', correct: false },
            { text: 'Streitkräfte', correct: false },
            { text: 'Gewalt', correct: false },
            { text: 'Staat', correct: true }
        ]
    },
    {
        question: 'posteri',
        answers: [
            { text: 'Bürgerrecht', correct: false },
            { text: 'Geist', correct: false },
            { text: 'Nachkommen', correct: true },
            { text: 'Kräfte', correct: false }
        ]
    },
    {
        question: 'praestare',
        answers: [
            { text: 'auslöschen', correct: false },
            { text: 'leisten', correct: true },
            { text: 'verraten', correct: false },
            { text: 'ermatten', correct: false }
        ]
    },
    {
        question: 'vis',
        answers: [
            { text: 'Meinung', correct: false },
            { text: 'Tribun', correct: false },
            { text: 'Gewalt', correct: true },
            { text: 'gleichfalls', correct: false }
        ]
    },
    {
        question: 'vires',
        answers: [
            { text: 'Streitkräfte', correct: false },
            { text: 'Staat', correct: false },
            { text: 'Nachkommen', correct: false },
            { text: 'Gemeinde', correct: true }
        ]
    },
    
]