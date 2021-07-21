var timerEl = document.getElementById('showTime');
var startBtn = document.getElementById('startQuiz');

function countdown () {
    timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1 ) {
            timerEl.textContent = timeLeft + 'seconds remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);
}

startBtn.onclick = countdown;



