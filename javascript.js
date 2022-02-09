//Code for Back to top button
myButton = document.getElementById("topBtn");

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    } 
    else{
        myButton.style.display = "none";
    }
}

myButton.addEventListener("click", topFunction);

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Code to change colours to dark mode colours
var icon = document.getElementById("icon");

function darkMode()
{
    icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src="img/sun.png"; 
    }
    else{
        icon.src="img/moon.png";
    }
}
}