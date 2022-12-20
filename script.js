/*
In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!
Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!
*/

//* DOM'S ELEMENTS
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Dates and units
const christmas2022 = new Date('December 25 2022'); // christmas date 2022
const christmas2022_ms = christmas2022.getTime(); // milliseconds from 1st Jan 1970 to 25th Dec 2022
const now_ms = new Date().getTime(); // milliseconds from 1st Jan 1970 till now
const diff_ms = christmas2022_ms - now_ms; // difference between target date and present time

// Conversion time to milliseconds
const second_ms = 1000;
const minute_ms = second_ms * 60;
const hour_ms = minute_ms * 60;
const day_ms = hour_ms * 24;

// times left
const daysLeft = Math.floor(diff_ms / day_ms);
const hoursLeft = Math.floor((diff_ms % day_ms) / hour_ms);
const minutesLeft = Math.floor((diff_ms % hour_ms) / minute_ms);
const secondsLeft = Math.floor((diff_ms % minute_ms) / second_ms);

console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);