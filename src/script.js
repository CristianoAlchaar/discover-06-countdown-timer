//const countDownDate = new Date("Feb 31, 2023 15:30:00").getTime(); --> thats the ideal, the code below is just for keep the countdown always running as a demonstration

const now = new Date();
//it will always start seven days from now on
const countDownDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days<10 ? "0"+days : days;
  document.getElementById("hours").innerHTML = hours<10 ? "0"+hours : hours;
  document.getElementById("minutes").innerHTML = minutes<10 ? "0"+minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds<10 ? "0"+seconds : seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);