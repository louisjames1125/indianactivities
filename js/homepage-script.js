// These four functions adjust the navigation when you click the main logo or the arrow button

function openMainMenu() {
    if (window.matchMedia('only screen and (max-width: 768px)').matches) {
            document.getElementById('sideMenu').style.marginLeft = '0';
            document.getElementById('sideMenu').style.width = '100vw';
            document.getElementById('showcase').style.marginLeft = '100vw';
            document.getElementById('showcase').style.width = '0vw';
            document.getElementsByClassName('heading-center')[0].style.visibility = 'visible';
            document.getElementsByClassName('heading-text')[0].style.color = 'black';
            document.getElementsByClassName('heading-top-left')[0].style.color = 'black';
            document.getElementsByClassName('heading-top-right')[0].style.color = 'black';
            document.getElementById('slidy-container').style.width = '80vw';
    
            document.getElementsByClassName('heading-top-left')[0].onclick = function() {
                closeMainMenu();
            };
     
     } else {
        document.getElementById('sideMenu').style.marginLeft = '0';
        document.getElementById('showcase').style.marginLeft = '20vw';
        document.getElementById('showcase').style.width = '80vw';
        document.getElementsByClassName('heading-center')[0].style.visibility = 'visible';
        document.getElementsByClassName('heading-text')[0].style.color = 'black';
        document.getElementsByClassName('heading-top-left')[0].style.color = 'black';
        document.getElementById('slidy-container').style.width = '80vw';

        document.getElementsByClassName('heading-top-left')[0].onclick = function() {
            closeMainMenu();
        };
     }
    
}

function closeMainMenu() {
    document.getElementById('sideMenu').style.marginLeft = '-20vw';
    document.getElementById('showcase').style.marginLeft = '0';
    document.getElementById('showcase').style.width = '100vw';
    document.getElementsByClassName('heading-top-left')[0].style.visibility = 'visible';
    document.getElementsByClassName('heading-center')[0].style.visibility = 'hidden';
    document.getElementsByClassName('heading-text')[0].style.color = 'white';
    document.getElementsByClassName('heading-top-left')[0].style.color = 'white';
    document.getElementsByClassName('heading-top-right')[0].style.color = 'white';
    document.getElementById('slidy-container').style.width = '100vw';

    document.getElementsByClassName('heading-top-left')[0].onclick = function() {
        openMainMenu();
     };
}

// Allowing the music to be started and stopped by the user (also changing the logo)

var backgroundNoise = document.getElementById("backgroundNoise");
var soundLogo = document.getElementById("soundLogo");

soundLogo.onclick = function() {
    if(backgroundNoise.paused) {
        backgroundNoise.play();
        document.getElementById("volume").className = "fas fa-volume-up";
    } else {
        backgroundNoise.pause();
        document.getElementById("volume").className = "fas fa-volume-mute";
    }
}

// Image Gallery (help from CodePen) :D

/* user defined variables */
var timeOnSlide = 9,
    // the time each image will remain static on the screen, measured in seconds
    timeBetweenSlides = 4.5,
    // the time taken to transition between images, measured in seconds

    // test if the browser supports animation, and if it needs a vendor prefix to do so
    animationstring = 'animation',
    animation = false,
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O Khtml'.split(' '),
    // array of possible vendor prefixes
    pfx = '',
    slidy = document.getElementById("slidy");
if (slidy.style.animationName !== undefined) { animation = true; }
// browser supports keyframe animation w/o prefixes

if (animation === false) {
    for (var i = 0; i < domPrefixes.length; i++) {
        if (slidy.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + 'Animation';
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animation = true;
            break;
        }
    }
}

if (animation === false) {
    // animate in JavaScript fallback
} else {
    var images = slidy.getElementsByTagName("img"),
        firstImg = images[0],
        // get the first image inside the "slidy" element.
        imgWrap = firstImg.cloneNode(false);  // copy it.
    slidy.appendChild(imgWrap); // add the clone to the end of the images
    var imgCount = images.length, // count the number of images in the slide, including the new cloned element
        totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
        slideRatio = (timeOnSlide / totalTime) * 100, // determine the percentage of time an induvidual image is held static during the animation
        moveRatio = (timeBetweenSlides / totalTime) * 100, // determine the percentage of time for an individual movement
        basePercentage = 100 / imgCount, // work out how wide each image should be in the slidy, as a percentage.
        position = 0, // set the initial position of the slidy element
        css = document.createElement("style"); // start marking a new style sheet
    css.type = "text/css";
    css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
    css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
    css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";
    for (i = 0; i < (imgCount - 1); i++) { // 
        position += slideRatio; // make the keyframe the position of the image
        css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n";
        position += moveRatio; // make the postion for the _next_ slide
        css.innerHTML += position + "% { left: -" + ((i + 1) * 100) + "%; }\n";
    }
    css.innerHTML += "}\n";
    css.innerHTML += "#slidy { left: 0%; " + keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s slidy infinite; }\n"; // call on the completed keyframe animation sequence
    document.body.appendChild(css); // add the new stylesheet to the end of the document
}