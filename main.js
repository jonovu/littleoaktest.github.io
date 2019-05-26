$(document).ready(function() {

    $(".breakfast-link, .breakfast-wrapper").click(function() {
        $(".menu").removeClass("active");
        $(".breakfast-wrapper").addClass("active");
        $('html, body').animate({
        scrollTop: parseInt($("#breakfast-anchor").offset().top)
    }, 400);
    });
    $(".lunch-link, .lunch-wrapper").click(function() {
        $(".menu").removeClass("active");
        $(".lunch-wrapper").addClass("active");
        $('html, body').animate({
        scrollTop: parseInt($("#lunch-anchor").offset().top)
    }, 400);
    });
    $(".takeaway-link, .takeaway-wrapper").click(function() {
        $(".menu").removeClass("active");
        $(".takeaway-wrapper").addClass("active");
        $('html, body').animate({
        scrollTop: parseInt($("#takeaway-anchor").offset().top)
    }, 400);
    });
    $(".kids-link, .kids-wrapper").click(function() {
        $(".menu").removeClass("active");
        $(".kids-wrapper").addClass("active");
        $('html, body').animate({
        scrollTop: parseInt($("#kids-anchor").offset().top)
    }, 400);
    });
    $(".drinks-link, .drinks-wrapper").click(function() {
        $(".menu").removeClass("active");
        $(".drinks-wrapper").addClass("active");
        $('html, body').animate({
        scrollTop: parseInt($("#drinks-anchor").offset().top)
    }, 400);
    });
    $(".contact-link").click(function() {
        $(".contact-textbox").toggleClass("active");
    });
    $(".menu li").click(function() {
        $(this).toggleClass("active");
    })
    /*$(".menu").click(function () {
        $(".close").toggleClass("active");
    });
    $(".close").click(function () {
        $(this).removeClass("active");
        $(".menu").removeClass("active");
    });*/
    
    $('.image-wrapper').click(function() {
        $(this).toggleClass("active");
    });
    
    //$('.menus-section-wrapper').paroller();
    
    $('.hamburger').click(function() {
        $('.menu-transition, .body-class').toggleClass('active');
    });
    $(window).resize(function() {
        $('.menu-transition, .body-class').removeClass('active');
    });
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

         //>=, not <=
        if (scroll >= 300) {
            //clearHeader, not clearheader - caps H
            $(".hamburger").addClass("dark");
        }  else {
            $(".hamburger").removeClass("dark");
        }
    });
});
