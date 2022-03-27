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
        startButton.innerText = 'Restart'
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
        question: 'rapere',
        answers: [
            { text: 'wegführen', correct: true },
            { text: 'raten', correct: false },
            { text: 'bringen', correct: false },
            { text: 'rauben', correct: true }
        ]
    },
    {
        question: 'libertas',
        answers: [
            { text: 'befreien', correct: false },
            { text: 'Freistellung', correct: false },
            { text: 'Freiheit', correct: true },
            { text: 'frei sein', correct: false }
        ]
    },
    {
        question: 'an',
        answers: [
            { text: 'oder (wie)', correct: false },
            { text: 'an', correct: false },
            { text: 'oder (etwa)', correct: true },
            { text: 'heran', correct: false }
        ]
    },
    {
        question: 'saeculum',
        answers: [
            { text: 'Jahr', correct: false },
            { text: 'Jahrhundert', correct: true },
            { text: 'Frühjahr', correct: false },
            { text: 'Zeit(alter)', correct: true }
        ]
    },
    {
        question: 'provincia',
        answers: [
            { text: 'Gebiet', correct: false },
            { text: 'Grenze', correct: false },
            { text: 'Reich', correct: false },
            { text: 'Provinz', correct: true }
        ]
    },
    {
        question: 'portare',
        answers: [
            { text: 'geben', correct: false },
            { text: 'bringen', correct: true },
            { text: 'tragen', correct: true },
            { text: 'öffnen', correct: false }
        ]
    },
    {
        question: 'unde',
        answers: [
            { text: 'wohin', correct: false },
            { text: 'weshalb', correct: false },
            { text: 'weswegen', correct: false },
            { text: 'woher', correct: true }
        ]
    },
    {
        question: 'orbis',
        answers: [
            { text: 'Kreislauf', correct: true },
            { text: 'Welt', correct: true },
            { text: 'Kugel', correct: false },
            { text: 'Erdeball', correct: false }
        ]
    },
    {
        question: 'totus',
        answers: [
            { text: 'allgemein', correct: false },
            { text: 'ganz', correct: true },
            { text: 'vollständig', correct: false },
            { text: 'zusammen', correct: false }
        ]
    },
    {
        question: 'intellegere',
        answers: [
            { text: '(be)kommen', correct: false },
            { text: '(be)gehen', correct: false },
            { text: '(be)merken', correct: true },
            { text: 'hinweisen', correct: false }
        ]
    },
    {
        question: 'quare',
        answers: [
            { text: 'wessen?', correct: false },
            { text: 'weshalb?', correct: true },
            { text: 'wodurch', correct: true },
            { text: 'wann?', correct: false }
        ]
    },
    {
        question: 'bene',
        answers: [
            { text: 'benennen', correct: false },
            { text: 'schön', correct: false },
            { text: 'am besten', correct: false },
            { text: 'gut', correct: true }
        ]
    },
    {
        question: 'num',
        answers: [
            { text: 'nämlich', correct: true },
            { text: 'denn', correct: true },
            { text: 'nachdem', correct: false },
            { text: 'durch', correct: false }
        ]
    },
    {
        question: 'pervenire in',
        answers: [
            { text: 'eilen (nach)', correct: false },
            { text: 'kommen zu', correct: false },
            { text: 'gehen', correct: false },
            { text: 'kommen nach', correct: true }
        ]
    },
    {
        question: 'pervenire ad',
        answers: [
            { text: 'eilen (nach)', correct: false },
            { text: 'kommen zu', correct: true },
            { text: 'gehen', correct: false },
            { text: 'kommen nach', correct: false }
        ]
    },
    {
        question: 'huc',
        answers: [
            { text: 'dort', correct: false },
            { text: 'hierher', correct: true },
            { text: 'der', correct: false },
            { text: 'dieser', correct: false }
        ]
    },
    {
        question: 'quidnam',
        answers: [
            { text: 'wer denn?', correct: false },
            { text: 'wo denn?', correct: false },
            { text: 'was denn?', correct: true },
            { text: 'wann denn?', correct: false }
        ]
    },
    {
        question: 'finis',
        answers: [
            { text: 'Weg', correct: false },
            { text: 'Zweck', correct: true },
            { text: 'Grenze', correct: true },
            { text: 'Übergang', correct: false }
        ]
    },
    {
        question: 'equidem',
        answers: [
            { text: 'Freiheit', correct: false },
            { text: 'freilich', correct: true },
            { text: 'sicherlich', correct: false },
            { text: 'allerdings', correct: true }
        ]
    },
    {
        question: 'credere',
        answers: [
            { text: 'glauben', correct: true },
            { text: 'üben', correct: false },
            { text: 'denken', correct: false },
            { text: 'essen', correct: false }
        ]
    },
    {
        question: 'consistere',
        answers: [
            { text: 'beibehalten', correct: false },
            { text: 'treffen', correct: false },
            { text: 'stehenbleiben', correct: true },
            { text: 'sich aufstellen', correct: true }
        ]
    },
    {
        question: 'contendere',
        answers: [
            { text: 'kämpfen', correct: true },
            { text: 'bringen', correct: false },
            { text: 'behaupten', correct: true },
            { text: 'treffen', correct: false }
        ]
    },
    {
        question: 'quoque',
        answers: [
            { text: 'jeweils', correct: false },
            { text: 'auch', correct: true },
            { text: 'denn', correct: false },
            { text: 'danach', correct: false }
        ]
    },
    {
        question: 'regio',
        answers: [
            { text: 'Stadt', correct: false },
            { text: 'Regen', correct: false },
            { text: 'Opfer', correct: false },
            { text: 'Gebiet', correct: true }
        ]
    },
    {
        question: 'corripere',
        answers: [
            { text: 'ergreifen', correct: true },
            { text: 'geben', correct: false },
            { text: 'reifen', correct: false },
            { text: 'eifern', correct: false }
        ]
    },
    {
        question: 'auctor',
        answers: [
            { text: 'Autor', correct: false },
            { text: 'Ufer', correct: false },
            { text: 'Führer', correct: true },
            { text: 'Akte', correct: false }
        ]
    },
    
]