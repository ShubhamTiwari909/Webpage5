const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const elements = document.getElementsByClassName('nav-link');
const hamburger = document.getElementsByClassName("hamburger");
const bodyElement = document.getElementById('body');

const handleMouseIn = value => {
    Array.from(elements).forEach((elements,i) => {
        i === value ? elements.style.color = "#333" : elements.style.color = "darkgrey";
    });
};

const handleMouseOut = () => {
    Array.from(elements).forEach((elements) => {
       elements.style.color = "#333"
    });
    scrolledNavigation();
}

const dropdownNavigation = () => {
    if (navigation.style.display === "none") {
        navigation.style.display = "flex";
        header.style.height = "102vh";
        header.style.backgroundColor = "white";
        bodyElement.style.height = "100%";
        bodyElement.style.overflowY = "hidden";
        Array.from(elements).forEach((elements) => {
            elements.style.color = "#333"
         });
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
        Array.from(elements).forEach((elements) => {
            elements.style.color = "white"
         });
    }
    else {
        header.style.height = "100px"
        header.style.backgroundColor = "transparent";
        hamburger[0].style.color="black";
        Array.from(elements).forEach((elements) => {
            elements.style.color = "#333"
         });
    }
};

window.onscroll = scrolledNavigation