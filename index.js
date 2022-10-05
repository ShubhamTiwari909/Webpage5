const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const elements = document.getElementsByClassName('nav-link');
const hamburger = document.getElementsByClassName("hamburger");
const bodyElement = document.getElementById('body');

console.log(hamburger)
const handleMouseIn = value => {
    for (let i = 0; i < elements.length; i++) {
        i === value ? elements[i].style.color = "#333" : elements[i].style.color = "darkgrey";
    }
};

const handleMouseOut = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "#333";
    }
    scrolledNavigation();
}

const dropdownNavigation = () => {
    if (navigation.style.display === "none") {
        navigation.style.display = "flex";
        header.style.height = "102vh";
        header.style.backgroundColor = "white";
        bodyElement.style.height = "100%";
        bodyElement.style.overflowY = "hidden";
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "#333";
        }
        hamburger[0].style.color="black";
    }
    else {
        navigation.style.display = "none";
        header.style.height = "100px";
        header.style.backgroundColor = "transparent";
        bodyElement.style.overflowY = "auto";
        scrolledNavigation();
    }
}


function changingMediaQuery() {
    if (window.innerWidth >= 100) {
        bodyElement.style.overflowY = "auto";
    }
    if (window.innerWidth >= 768) {
        navigation.style.display = "flex";
        header.style.backgroundColor = "transparent";
    }

    else {
        navigation.style.display = "none";
    }
    scrolledNavigation();
}

window.addEventListener('resize', changingMediaQuery);

let scrolledNavigation = () => {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        header.style.height = "100px"
        header.style.backgroundColor = "black";
        hamburger[0].style.color="white";
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "white";
        }
    }
    else {
        header.style.height = "100px"
        header.style.backgroundColor = "transparent";
        hamburger[0].style.color="black";
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "#333";
        }
    }
};

window.onscroll = scrolledNavigation