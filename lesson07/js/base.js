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