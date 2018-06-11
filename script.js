const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let secPosition = sec * 360 / 60;
let minPosition = min * 360 / 60 + secPosition / 60;
let hrPosition = hr * 360 / 12 + minPosition / 12;

function runClock() {

    hrPosition += 1/120;
    minPosition += 0.1;
    secPosition += 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runClock, 1000);