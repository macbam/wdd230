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


//discover.html
    //Image Lazy Load
    const images = document.querySelectorAll("[data-src]");

    function preloadImage(img) {
        const src = img.getAttribute("data-src")
        if(!src) {
            return;
        }
    
        img.src = src;
    }
    
    
    
    
    const imgOptions = {
        threshold: 0.5
    };
    
    const imgObserver = new IntersectionObserver((entry, imgObserver) => {
        entry.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);
    
    
    images.forEach(image => {
        imgObserver.observe(image);
    });
    
    
    
    
    function saveTime() {
        let timeStamp = new Date() / 1000;
        localStorage.setItem("visit", timeStamp.toString());
    }
    
    function getTime() {
        let lastVisit = localStorage.getItem("visit");
        let today = new Date();
        today = today / 1000;
        let timeSince = (parseFloat(today) - parseFloat(lastVisit)) / 86400.0;
        timeSince = Math.round(timeSince);
        document.getElementById("lastVisited").textContent = timeSince;
        saveTime();
    }
    
    
    if(!localStorage.getItem("visit")){
        saveTime();
        getTime();
    } else {
        getTime();
    }
    
    