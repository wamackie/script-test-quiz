var timerEl = document.getElementById('showTime');
var startBtn = document.getElementById('startQuiz');
var questions = [
    { q: 'Javascript can be linked to an HTML.', a: 'Yes', b: 'No', c: 'They do not work together', d: 'Only one can be used', trueAnswer: 'Yes'},
    { q: 'Javascript can be used to create for loops.', a: 'Yes', b: 'No', c: 'For loops do not exist', d: 'For loops should always be created in HTML', trueAnswer: 'Yes'},
    { q: 'Javascript is used only to edit the look of a website.', a: 'Yes', b: 'No', c: 'Javascript creates the basic web page outline', d: 'Javascript is not used in web development', trueAnswer: 'No'},
    { q: 'Javascript can be used to add h1 elements to a web page', a: 'Yes', b: 'No', c: 'Only HTML can create h1 elements', d: 'Only CSS can create h1 elements', trueAnswer: 'Yes'},
  ];
var score = 0;

for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);

    if (
        (answer === true)
    ) {
        score++;
    }
}

function countdown () {
    timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1 ) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);
}



startBtn.onclick = countdown;



