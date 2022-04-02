
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
    this.scrollY > 97 ? navElement.style.opacity = 1 : navElement.style.opacity = 0;
  }
  
  window.addEventListener("scroll", changeCss , false);


// --------------------------------------------------------------------------

window.onscroll = function() {
    console.log(window.pageYOffset);
    var nav = document.getElementById("header");
    if ( window.pageYOffset > 97 ) {
        nav.classList.add("header_change");
    } else {
        nav.classList.remove("header_change");
    }
}