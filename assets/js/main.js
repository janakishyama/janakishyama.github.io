
/*
window.onscroll = function() {
    console.log(window.pageYOffset);
    var nav = document.getElementById('shyam_h1');
    if ( window.pageYOffset > 102 ) {
        nav.classList.add("h1shyam");
    } else {
        nav.classList.remove("h1shyam");
    }
}

.stick_h1{
    padding-top: 20px;
    color: rgb(102, 123, 142);
    color: rgb(80, 75, 75);
    position: relative;
}
*/
/*$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('#headingname').fadeIn();
    } else {
        $('#headingname').fadeOut();
    }

});
*/

function changeCss () {
    var navElement = document.getElementById("headingname");
    this.scrollY > 165 ? navElement.style.opacity = 1 : navElement.style.opacity = 0;
  }
  
  window.addEventListener("scroll", changeCss , false);


// --------------------------------------------------------------------------

window.onscroll = function() {
    console.log(window.pageYOffset);
    var nav = document.getElementById("header");
    if ( window.pageYOffset > 165 ) {
        nav.classList.add("header_change");
    } else {
        nav.classList.remove("header_change");
    }
}

// ----------------------- change text color --------------------------------
var tx = document.querySelector(".this");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  tx.style.color= getRandomColor();
}

setInterval(changeColor,1000);