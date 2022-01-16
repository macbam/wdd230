//document.querySelector("currentYear").innerHTML = new Date().getFullYear();

const currentYearjs = document.querySelector("#currentYear");

const now = new Date();
const currentYear = now.getFullYear();

currentYearjs.textContent = currentYear.toString();