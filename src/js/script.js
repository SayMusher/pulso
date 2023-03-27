$(document).ready(function () {
    $(".carousel__slider").slick({
        speed: 1200,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
});
