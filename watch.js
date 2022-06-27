const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var splitsec = 0;
var stoptime = true; // calismiyor


// start yapmak icin
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

//  Stop yapmak icin
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    
  }
}

function timerCycle() {
    if (stoptime == false) {
    splitsec = parseInt(splitsec);
    sec = parseInt(sec);
    min = parseInt(min);

    splitsec = splitsec + 1;

    if (splitsec == 60) {
      sec = sec + 1;
      splitsec = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      splitsec = 0;
    }

    if (splitsec < 10 || splitsec == 0) {
        splitsec = '0' + splitsec;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ':' + splitsec;

    setTimeout("timerCycle()", 15);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    min = 0;
    splitsec = 0;
    sec = 0;
}