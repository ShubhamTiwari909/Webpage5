const elements = document.getElementsByClassName('nav-link');

function handleMouseIn(value) {
    for (var i = 0; i < elements.length; i++) {
        if(i === value){
            elements[i].style.color = "#333";
        }
        else{
            elements[i].style.color = "darkgrey";
        }
    }
}


function handleMouseOut() {
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color ="#333";
        }
}