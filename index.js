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
    navigation.style.display === "none" ? navigation.style.display = "flex" : navigation.style.display = "none";
}


function changingMediaQuery() {
    if (window.innerWidth >= 670) {
        navigation.style.display = "flex"
    }
    else{
        navigation.style.display = "none"
    }
}

window.addEventListener('resize', changingMediaQuery);