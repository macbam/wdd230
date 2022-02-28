const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if (window.innerWidth > 960)
        mainnav.classList.remove('responsive')
};





const datefield = document.querySelector('.date');

const now = new Date();
const fulldate = new Intl.DateTimeFormat('en-US', {dateStyle: "full"}).format(now);

datefield.innerHTML = `${fulldate}`;




const currentYearjs = document.querySelector("#currentYear");

const now2 = new Date();
const currentYear = now2.getFullYear();

currentYearjs.textContent = currentYear.toString();


document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

//join.html

var d = new Date();
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("time").value = d.toDateString() + " " + hours + ":" + mins + ":" + seconds;