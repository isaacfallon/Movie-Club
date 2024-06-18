const countdownTimer = document.getElementById(`countdown`);

let currentTime = moment();
let endOfWeek = moment().endOf(`week`);
let timeLeft = endOfWeek - currentTime;
let timeLeftInSeconds = timeLeft / 1000; // timeleft is given in milliseconds
let duration = moment.duration(timeLeftInSeconds, `seconds`);
const interval = 1000; // 1 second

// let formattedCurrentTime = moment().format(`D/M/YYYY`);
// let formattedEndOfWeek = moment(endOfWeek).format(`D/M/YYYY`);

// console.log(formattedCurrentTime);
// console.log(formattedEndOfWeek);
// console.log(timeLeft);
// console.log(timeLeftInSeconds);

setInterval(function() {
  if(duration.asSeconds() <= 0) {
    //do something
  }

  duration = moment.duration(duration.asSeconds() - 1, `seconds`);

  let count = duration.days() + ` Days, ` + duration.hours() + ` Hours, ` + duration.minutes() + ` Minutes, ` + duration.seconds() + ` Seconds`;

  countdownTimer.innerHTML = count;
}, interval); 
