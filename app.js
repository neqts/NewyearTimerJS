const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newYears = "1 Jan 2021";
var timer;
function countdown() {
   const newYearsDate = new Date(newYears);
   const currentDate = new Date();
   const totalseconds = (newYearsDate - currentDate) / 1000;
   const days = Math.floor(totalseconds / 3600/24) ;
   const hours = Math.floor(totalseconds / 3600) % 24;
   const mins = Math.floor(totalseconds / 60) % 60;
   const seconds = Math.floor(totalseconds) % 60;
   daysEl.innerHTML = days;
   hoursEl.innerHTML= hours;
   minsEl.innerHTML = mins;
   secondsEl.innerHTML =seconds;
   if(days<=0 && hours<=0 && mins<=0 && seconds<=0){
      window.clearInterval(timer);
   }
}
timer=setInterval(countdown, 1000);