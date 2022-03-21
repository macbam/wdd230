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

if(temp > 50 || windSpeed < 3) {
    document.getElementById("windChill").innerHTML = 'N/A';
}

else {
    var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16));

    var windChill = c(windChill); 

    // console.log(windChill);
    windChill = Math.round(windChill);
    // console.log(windChill);
    document.getElementById("windChill").innerHTML = windChill;
}


//Weather API


let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5173171&appid=4aa6e9c25fcb75c5437aa9ac874cacc1"

let iconURL = "http://openweathermap.org/img/wn/10d@2x.png"


fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);
        weatherFormat(jsonObject);
    });

function ktoc(k) {
    return k - 273.15;
}

function weatherFormat(jsonObject) {
    let main = jsonObject.main;
    let temp = ktoc(main.temp);
    temp = f(temp);

    let windSpeed = jsonObject.wind.speed;

    let iconsrc = `https://openweathermap.org/img/wn/${jsonObject.weather[0].icon}.png`;
    let icon = document.getElementById("weathericon");
    icon.setAttribute('src', iconsrc);

    if(temp > 50 || windSpeed < 3) {
        document.getElementById("windChill").innerHTML = 'N/A';
    }
    
    else {
        var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16));    
        // console.log(windChill);
        windChill = Math.round(windChill);
        // console.log(windChill);
        document.getElementById("windChill").innerHTML = windChill + ' °';
    }


    document.getElementById("temp").textContent = Math.round(temp);
    document.getElementById("windSpeed").textContent = Math.round(windSpeed);
}

//join button

let joinbtn1 = document.getElementById("joinbtn1")
let joinbtn2 = document.getElementById("joinbtn2")

joinbtn1.addEventListener('click', joinBtns)
joinbtn2.addEventListener('click', joinBtns)



function joinBtns() {
    location.href = "join.html"
}
