/*!
* Start Bootstrap - Heroic Features v5.0.2 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let startTime = document.getElementById("startTime")
startTime.addEventListener("change",calculateHours)

let endTime = document.getElementById("endTime")
endTime.addEventListener("change",calculateHours)

let workingDay = document.getElementById("standardHours")
workingDay.addEventListener("change",calculateHours)

let totalHours = document.getElementById("totalHours")
let overtimeHours = document.getElementById("overtimeHours")

function calculateHours(){

    //Conver to date to do calculation
    const startDate = new Date(`1970-01-01T${startTime.value}:00`);
    const endDate = new Date(`1970-01-01T${endTime.value}:00`);
    const standardHours = parseFloat(workingDay.value);

    let diff = endDate - startDate;

    // Handle overnight shifts by adding 24 hours if the end time is smaller than the start time
    if (endDate < startDate) {
        diff += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const workedHours = hours + (minutes / 60);
    const overtime = workedHours > standardHours ? workedHours - standardHours : 0;
    
    totalHours.innerText = `${workedHours.toFixed(2)}`
    overtimeHours.innerText = `${overtime.toFixed(2)}`
}
