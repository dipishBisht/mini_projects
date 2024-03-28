let h = document.querySelector(".hours");
let m = document.querySelector(".min");
let s = document.querySelector(".sec");


function displayHours() {
    let clock = new Date();
    let hour = clock.getHours();
    h.innerHTML = `${hour}<br>Hours`;
}

function displayMinutes() {
    let clock = new Date();
    let min = clock.getMinutes();
    m.innerHTML = `${min}<br>Minutes`;
    setInterval(displayMinutes, 1000);
}

function displaySeconds() {
    let clock = new Date();
    let sec = clock.getSeconds();
    s.innerHTML = `${sec}<br>Seconds`;
    setInterval(displaySeconds, 1000);
}
displayHours();
displayMinutes();
displaySeconds();