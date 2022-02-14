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


// WIND CHILL

function f(c) {
    return (c * (9 / 5)) + 32;
}

function c(f) {
    return (f - 32) * (5 / 9);
}

function mph(kph) {
    return kph * 0.621371;
}

const windSpeedKPH = document.querySelector('.windSpeed');

const temp = f(33);
const windSpeed = mph(windSpeedKPH);

var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16));

var windChill = c(windChill); 

// console.log(windChill);
windChill = Math.round(windChill);
// console.log(windChill);
document.getElementById("windChill").innerHTML = windChill;
