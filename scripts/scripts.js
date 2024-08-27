let secElapsed=0; // how to track how much sec
let interval=null; // **CONSIDER what you'd want to replace 'null' with**
const time=document.getElementById("time");

//add new functions as you find that you need them:
function padStart(value) { 
    //Pad Start method: adds a joins ("pads") a character to the value IF the value is LESS than 2 digits long
    return String(value).padStart(2,"0")
}

function setTime() {
    const mins = Math.floor(secElapsed/60)
    const sec = secElapsed % 60 // gives remainder of sec/60
    time.innerHTML= `${padStart(mins)}:${padStart(sec)}`; // SOLVED**
}

function timer() { // UPDATES timer every second
    secElapsed++
    setTime()
}

//list out the key/MAIN functions of your program as function declarations first:
function startClock() {
    if (interval) stopClock()
    interval =setInterval(timer, 1000) //setInterval method: run a function (in this case: timer()) at every/for any spec period in time (in this case: every 1 sec): once interval comp=something happens
}

function stopClock() {
    clearInterval(interval) //stops execution of a function && thus stops the setInterval method
}

function resetClock() {
    stopClock()
    secElapsed = 0;
    setTime() // setTime() to actually reset values on screen (based on the new secElapsed = 0)
}


let start=document.getElementById("start");
start.addEventListener("click", function() {
    startClock()
})

let stop=document.getElementById("stop");
stop.addEventListener("click", function() {
    stopClock()
})

let reset=document.getElementById("reset");
reset.addEventListener("click", function() {
    resetClock()
})


// Problems Still to Solve:
// - if start is continuously clicked, it freezes/delays the stopwatch