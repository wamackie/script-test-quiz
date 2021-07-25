var startBtn = document.getElementById('startQuiz');
var timerEl = document.getElementById('showTime');
var welcomeEl = document.querySelector('.welcome')
var hiddenBtns = document.querySelector('#hiddenBtn');
var resultBtn = document.querySelector('#hiddenResultBtn');
var questionEl = document.getElementById('questionAsk');
var answerLi = document.getElementById('answerList');
var questionArrayIndex = 0;
var score = 0;
var questions = [
    { 
        question: '____ is used mainly to affect the website style.', 
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

function showResults () {
    window.alert("if this shows its working");
    answerLi.innerHTML = "";
    questionEl.textContent = "";
    resultBtn.style.display = 'block';
    //var scoreEl.textContent = score

    
    // questionEl.textContent = "";
    // var scoreEl = document.createElement('li');
    // scoreEl.textContent = score;
    // answerLi.append(scoreEl);
}

function displayQuestion () {
    answerLi.innerHTML = "";
    hiddenBtns.style.display = 'block';
    questionEl.textContent = questions[questionArrayIndex].question;
    for (i = 0; i < 4; i++) {
        var listEl = document.createElement('li');
        console.log(questions[questionArrayIndex].answers);
        listEl.textContent = questions[questionArrayIndex].answers[i];
        listEl.addEventListener('click', checkAnswer);
        answerLi.append(listEl);
    }
}

function checkAnswer () {
    console.log('inside checkAnswer');
  console.log('this.textContent', this.textContent);
  console.log('questions[questionArrayIndex].trueAnswer', questions[questionArrayIndex].trueAnswer);
    if (this.textContent === questions[questionArrayIndex].trueAnswer){
        score++;
        console.log('score', score)
    } else {
        timeLeft = timeLeft - 15
    }
    questionArrayIndex++;
    if (questionArrayIndex === 4) {
        showResults();
    } else {
    displayQuestion();
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

//DOM elements to show initials and score with a form input