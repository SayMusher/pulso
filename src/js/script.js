$(document).ready(function () {
    $(".carousel__slider").slick({
        speed: 1200,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".catalogue__item-content")
                    .eq(i)
                    .toggleClass("catalogue__item-content-hidden");
                $(".catalogue__item-descr")
                    .eq(i)
                    .toggleClass("catalogue__item-descr-active");
            });
        });
    }

    toggleSlide(".catalogue__item-link");
    toggleSlide(".catalogue__item-back");

    $("ul.catalogue__types").on(
        "click",
        "li:not(.catalogue__type-active)",
        function () {
            $(this)
                .addClass("catalogue__type-active")
                .siblings()
                .removeClass("catalogue__type-active")
                .closest("div.container")
                .find("div.catalogue__items")
                .removeClass("catalogue__items-active")
                .eq($(this).index())
                .addClass("catalogue__items-active");
        }
    );
});
