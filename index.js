const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const elements = document.getElementsByClassName('nav-link');
const bodyElement = document.getElementById('body');

const handleMouseIn = value => {
    for (let i = 0; i < elements.length; i++) {
        i === value ? elements[i].style.color = "#333" : elements[i].style.color = "darkgrey";
    }
};

const handleMouseOut = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "#333";
    }
}

const dropdownNavigation = () => {
    if (navigation.style.display === "none") {
        navigation.style.display = "flex";
        header.style.height = "102vh";
        header.style.backgroundColor = "white";
        bodyElement.style.height = "100%";
        bodyElement.style.overflowY = "hidden";
    }
    else {
        navigation.style.display = "none";
        header.style.height = "130px";
        header.style.backgroundColor = "transparent";
        bodyElement.style.overflowY = "auto";
    }
}


function changingMediaQuery() {
    if (window.innerWidth >= 768) {
        navigation.style.display = "flex";
        header.style.backgroundColor = "transparent";
    }

    else {
        navigation.style.display = "none";
    }
}

window.addEventListener('resize', changingMediaQuery);

// window.onscroll = function () {
//     "use strict";
//     if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
//        header.style.height = "130px"
//        header.style.backgroundImage = "linear-gradient(0deg,white,white)";
//     }
//     else {
//        header.style.height = "130px"
//        header.style.backgroundImage = "transparent";
//     }
// };