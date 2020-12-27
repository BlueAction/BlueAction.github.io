$(document).ready(function () {

  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dost: false,
    navText: [],
    responsive:{
        0:{
          items:1,
          dots: true,
          nav: false
        },
        480:{
            items:1
        }
    }
  });

$('.carousel').owlCarousel({
    loop:true,
    margin:30, 
    nav:true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dost: false,
    navText: [],
    responsive:{
        0:{
          items:1,
        },
        480:{
            items:2
        },
        680: {
          items: 3
        },
        1024: {
          items: 4
        }
    }
    
  });