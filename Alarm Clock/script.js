const currentTime = document.querySelector("h2");
const inner = document.querySelector(".inner");
const selectBox = document.querySelectorAll("select");
const alarmBtn = document.querySelector("button");


let alarmTime, isAlarmSet;
let ringtone = new Audio("./assets/ringtone.mp3");
const HOURS = 12, MINUTE = 59, OPTIONS = 2;

for (let i = HOURS; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectBox[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = MINUTE; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectBox[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = OPTIONS; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectBox[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= HOURS) {
        h = h - HOURS;
        ampm = "PM";
    }
    h = h == 0 ? h = HOURS : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        inner.classList.remove("disable");
        alarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectBox[0].value}:${selectBox[1].value} ${selectBox[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    inner.classList.add("disable");
    alarmBtn.innerText = "Clear Alarm";
}

alarmBtn.addEventListener("click", setAlarm);