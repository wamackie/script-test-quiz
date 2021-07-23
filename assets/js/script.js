var startBtn = document.getElementById('startQuiz');
var timerEl = document.getElementById('showTime');
var welcomeEl = document.querySelector('.welcome')
var hiddenBtns = document.querySelector('#hiddenBtn');
var questionEl = document.getElementById('questionAsk');
var answerLi = document.getElementById('answerList');
var questionArray = 0;
var score = 0;
var questions = [
    { 
        question: '____ is used mainly to affect the website design.', 
        answers: ['HTML', 'CSS', 'Javascript', 'Python'],
        trueAnswer: 'Yes'
    },
    { 
        question: '____ is used mainly to create the framework of web pages.', 
        answers: ['HTML', 'CSS', 'Javascript', 'Python'],
        trueAnswer: 'Yes'
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
    questionEl.textContent = questions[questionArray].question;
    for (i = 0; i < 4; i++) {
        var listEl = document.createElement('li');
        console.log(questions[questionArray].answers);
        answerLi.append(listEl)
    }

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