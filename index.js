var typed = new Typed("#text", {
strings : ["Front-End Developer", "Freelancer", "Streamer"],
typeSpeed : 50,
backSpeed : 50,
loop : true
});

function responsiveNav(){
    var x = document.getElementById("home");
    if (x.className === "nav-container"){
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}

window.onscroll = function(ev){
    if (window.scrollY === 0){
        document.getElementById("home").style.backgroundColor = "#151515";
    }
    else{
        document.getElementById("home").style.backgroundColor = "#101010";
    }

}