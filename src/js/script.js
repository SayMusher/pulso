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

    function openModal(item) {
        $(".overlay").fadeIn();
        $(".modal__content").eq(item).fadeIn();
        $("body").addClass("noscroll");
    }

    function closeModal() {
        $(".overlay").fadeOut();
        $(".modal__content").fadeOut();
        $("body").removeClass("noscroll");
    }

    $("#callButton").on("click", function () {
        openModal(0);
    });

    $(".promo__button").on("click", function () {
        openModal(0);
    });

    $(".button__catalogue").each(function (i) {
        $(this).on("click", function () {
            $("#order .modal__text").text($(".title__catalogue").eq(i).text());
            openModal(1);
        });
    });

    $(".modal__close").on("click", function () {
        closeModal();
    });
});
