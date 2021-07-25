var startBtn = document.getElementById('startQuiz');
var timerEl = document.getElementById('showTime');
var welcomeEl = document.querySelector('.welcome')
var hiddenBtns = document.querySelector('#hiddenBtn');
var questionEl = document.getElementById('questionAsk');
var answerLi = document.getElementById('answerList');
var questionArrayIndex = 0;
var score = 0;
var questions = [
    { 
        question: '____ is used mainly to affect the website design.', 
        answers: ['HTML', 'CSS', 'Javascript', 'Python'],
        trueAnswer: 'CSS'
    },
    { 
        question: '____ is used mainly to create the framework of web pages.', 
        answers: ['HTML', 'CSS', 'Javascript', 'Python'],
        trueAnswer: 'HTML'
    },
    { 
        question: '____ is a seperate language from the others in this list.', 
        answers: ['HTML', 'CSS', 'Javascript', 'Python'],
        trueAnswer: 'Python'
    },
    { 
        question: '// adds a comment in ____.', 
        answers: ['HTML', 'CSS', 'Javascript', 'Python'],
        trueAnswer: 'Javascript'
    },
  ];

function displayQuestion () {
    hiddenBtns.style.display = 'block';
    questionEl.textContent = questions[questionArrayIndex].question;
    for (i = 0; i < 4; i++) {
        var listEl = document.createElement('li');
        console.log(questions[questionArrayIndex].answers);
        listEl.textContent = questions[questionArrayIndex].answers[i];
        listEl.addEventListener('click', checkAnswer);
        answerLi.append(listEl)
    }
}

function checkAnswer () {
    console.log('inside checkAnswer');
  console.log('score', score);
  console.log('this.textContent', this.textContent);
  console.log('questions[questionArrayIndex].trueAnswer', questions[questionArrayIndex].trueAnswer);
    if (this.textContent === questions[questionArrayIndex].trueAnswer){
        score++
    } else {
        timeLeft - 15
    }
    questionArrayIndex++;
    displayQuestion();
}

function countdown () {
    timeLeft = 75;
    startBtn.style.display = 'none';
    welcomeEl.style.display = 'none';
    displayQuestion ();
    var timeInterval = setInterval(function() {
        if (timeLeft > 1 ) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);
}




startBtn.onclick = countdown; 


//add eventlistener
//when choose eventlisteneer compare it to what true answer is 