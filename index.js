const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const elements = document.getElementsByClassName('nav-link');

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
        navigation.style.height = "100vh";
        header.style.backgroundColor = "white";
    }
    else {
        navigation.style.display = "none";
        header.style.backgroundColor = "transparent";
    }
}


function changingMediaQuery() {
    if (window.innerWidth >= 670) {
        navigation.style.display = "flex";
        header.style.padding = "0 100px";
        header.style.top = "60px";
    }
    else {
        navigation.style.display = "none"
        header.style.padding = "0";
        header.style.top = "0";
        header.style.padding = "15px";
    }
}

window.addEventListener('resize', changingMediaQuery);