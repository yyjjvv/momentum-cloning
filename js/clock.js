const clock = document.querySelector("#clock");
const amPm = document.querySelector(".amPm");

function getClock() {
    const date = new Date();
    let hours = date.getHours();
    const mins = String(date.getMinutes()).padStart(2, "0");
    let AMPM = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${mins}`;
    amPm.innerText = AMPM;
}
getClock();
setInterval(getClock, 1000);