alert('Heya, welcome to my website!' );

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); 
}

function h1fading() {
    $("h1").fadeOut(3000, function() {
        $(this).fadeIn(2000, h1fading());
    });
}

$(document).ready(h1fading);
