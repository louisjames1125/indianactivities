/* 

    - Index

*/

// Making the Indiana image slowly fade in when the document loads (by adding a class of fade-in)
$( document ).ready(function() {
    var indianaImg = document.getElementById("indiana-img");
    indianaImg.classList.remove("fade-out");
    indianaImg.classList.add("fade-in");
});

// Making a timeline for the animations to be displayed on
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

// Grabbing each span + adding it to the timeline and lisitng the animations we want to do on them (making the text slide up)

tl.to(".animated-text", {y: "100%", duration: 1.5, stagger: 1.5});

// Grabbing the slider div + adding it to the timeline and lisitng the animations we want to do on them (slide up after the spans)
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 1.5});

// Moving the timeline to the homepage of the website

tl.to(".intro", {y: "-200%", duration: 1.5}, "-=1.5");

// Making the homepage buttons slowly fade-in by changing its opacity from 0 to 1

tl.fromTo(".homepage-button", {opacity: 0}, {opacity: 1, duration: 1});

/* 

    - About / Contact

*/

