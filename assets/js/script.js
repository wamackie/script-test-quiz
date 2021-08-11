var startBtn = document.getElementById('startQuiz');
var timerEl = document.getElementById('showTime');
var welcomeEl = document.querySelector('.welcome')
var hiddenBtns = document.querySelector('#hiddenBtn');
var resultBtn = document.querySelector('#hiddenResultBtn');
var questionEl = document.getElementById('questionAsk');
var answerLi = document.getElementById('answerList');
var finalScoreEl = document.querySelector('#finalScore');
var btnInsertEl = document.querySelector('#btnInsert');
var scoreEl = document.getElementById('scoreArray[i].score');
var initialsEl = document.getElementById('scoreArray[i].initials');
const inpKey = document.getElementById("initials");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const leaderboard = document.getElementById("lsOutput");
var leaderboardArray = [];
btnInsert.onclick = function () {
  const key = inpKey.value;
};

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
        question: '// is used to add a comment in ____.', 
        answers: ['HTML', 'CSS', 'Javascript', 'Python'],
        trueAnswer: 'Javascript'
    },
  ];

function showResults () {
    answerLi.innerHTML = "";
    questionEl.textContent = "";
    resultBtn.style.display = 'block';
    finalScoreEl.textContent = score;
    localStorage.setItem("finalScore", finalScore);



}

btnInsertEl.addEventListener('click', function (event) {
    leaderboardArray.push({score: score, initials: inpKey.value.trim()});
    console.log('score', score);
    console.log('initials', inpKey.value.trim());
    localStorage.setItem('leaderboard', JSON.stringify(leaderboardArray));
    var scoreArray = JSON.parse(localStorage.getItem('leaderboard'));
    for (let i = 0; i < scoreArray.length; i++) {
        console.log(scoreArray[i].score);
        console.log(scoreArray[i].initials);
        var results = document.createElement('li');
        results.textContent = scoreArray[i].score + " " + scoreArray[i].initials;
        document.getElementById('leaderboard').append(results)
    }
  })

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
            timerEl.textContent = '0';
            clearInterval(timeInterval);
            showResults();
        }
    },1000);
}




startBtn.onclick = countdown;

JSON.parse(localStorage.getItem('leaderboard'));

leaderboardArray = JSON.parse(localStorage.getItem('leaderboard')) || [];
