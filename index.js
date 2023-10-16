const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const elements = document.getElementsByClassName('nav-link');
const hamburger = document.getElementsByClassName("hamburger");
const bodyElement = document.getElementById('body');
const faIcon = document.getElementById("fa-icon")

const dropdownNavigation = () => {
    if(header.classList.contains("h-100")) {
        navigation.classList.add("show")
        navigation.classList.remove("hide")
        header.classList.toggle("h-screen")
        faIcon.classList.toggle("fa-close")
    }
}
