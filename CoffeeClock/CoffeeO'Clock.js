const coffeeClockElement = document.querySelector(".coffee-clock");

setInterval(()=>{
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const secondsDegree = (360 / 60) * seconds;
const minutesDegree = (360 / 60) * minutes + secondsDegree / 60;
const hoursDegree = (360 / 12) * (hours % 12 || 12) + minutesDegree / 60;
coffeeClockElement.style.setProperty("--angle-hour", hoursDegree + 'deg');
coffeeClockElement.style.setProperty("--angle-minute", minutesDegree + 'deg');
coffeeClockElement.style.setProperty("--angle-second", secondsDegree + 'deg');  
}, 500)
