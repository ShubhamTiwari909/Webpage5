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