export function runInterval(
  time, minutesRef, secondsRef
) {
  let minutesToMiliSeconds = (time * 60000) / 1000;
  
  function addZeroSmallerTen(timer) {
    return timer < 10 ? `0${timer}` : timer;
  }
 
  const interval = setInterval(function() {
    minutesToMiliSeconds --;
    if (minutesToMiliSeconds <= 0) {
      clearInterval(interval);
    }
    let newSecondsTimer = Math.floor((minutesToMiliSeconds % 60));
    let newMinutesTimer = Math.floor((minutesToMiliSeconds / 60));
    minutesRef.textContent = addZeroSmallerTen(newMinutesTimer);
    secondsRef.textContent = addZeroSmallerTen(newSecondsTimer);
  }, 1000);
}
