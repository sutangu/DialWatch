'use strict';

var secondHand = document.querySelector('.second-hand');
var minutesHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = seconds / 60 * 360 + 90;
    secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
    var minutes = now.getMinutes();
    var minutesDegrees = minutes / 60 * 360 + seconds / 60 * 6 + 90;
    minutesHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';
    var hour = now.getHours();
    var hourDegrees = hour / 12 * 360 + minutes / 60 * 30 + 90;
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
}
setInterval(setDate, 1000);
setDate();
//# sourceMappingURL=scripts.js.map