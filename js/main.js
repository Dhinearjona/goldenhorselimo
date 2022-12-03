const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


var swiper = new Swiper(".mySwiper", {});

$(function() {
    
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});