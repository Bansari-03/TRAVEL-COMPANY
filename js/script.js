//  jquery

$(document).ready(function () {
    // sticky Header
    var stickyOffset = $(".bottom_header").offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyOffset) {
            $(".bottom_header").addClass("fixed");
        } else {
            // Remove the fixed class if the user scrolls back up
            $(".bottom_header").removeClass("fixed");
        }
    });
    // mob Headers

    // sticky Mob Header
    var stickyOffset = $(".mob-header").offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyOffset) {
            $(".mob-header").addClass("fixed");
        } else {
            // Remove the fixed class if the user scrolls back up
            $(".mob-header").removeClass("fixed");
        }
    });

    $(".toggle_icon").click(function () {
        $(".mob-main-menu").addClass("open");
    });
    $(".toggle_end").click(function () {
        $(".mob-main-menu").removeClass("open");
    });
    $(".mob-main-menu > li > a").click(function () {
        $(this).parent("li").find(".mob-sub-menu").addClass("open");
    });
    $(".sub-close").click(function () {
        $(this).parent(".mob-sub-menu").removeClass("open");
    });
    $(".mob-main-menu > li > a").click(function () {
        $(this).parent("li").find(".mob-mega-menu").addClass("open");
    });

    $(".mega-close").click(function () {
        $(this).parent(".mob-mega-menu").removeClass("open");
    });

    // reove data-AOS
    function removeAOS() {
        if ($(window).width() < 992) {
            $(".aos-container").removeAttr("data-aos");
        } else {
            $(".aos-container").attr("data-aos", "fade-right");
        }
    }
    function removeAOS() {
        if ($(window).width() < 992) {
            $(".aos-container").removeAttr("data-aos");
        } else {
            $(".aos-container").attr("data-aos", "fade-left");
        }
    }
    // Remove AOS
    removeAOS();
    $(window).resize(removeAOS);

    // slide Image
    $(window).scroll(function () {
        // Calculate the scroll position
        var scrollPosition = $(this).scrollTop();

        // Loop through each image
        $('.image').each(function (index) {
            // Check if the image is in the viewport
            var imagePosition = $(this).offset().top;

            // If the image is in the viewport, slide it down
            if (imagePosition < scrollPosition + $(window).height()) {
                $(this).slideDown(1000); // Slide down with a duration of 500 milliseconds
            } else {
                // If the image is out of the viewport, hide it smoothly
                $(this).slideUp();
            }
        });
    });
    // place slider
    $('#places').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        // mouseDrag: false,
        // touchDrag: false,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true,
        touchDrag: true,
            },
            700: {
                items: 2
            },
            900: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    //  agency
    $('#agency').owlCarousel({
        loop: true,
        margin: 90,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3,
                margin: 100,
            },
            1000: {
                items: 5
            }
        }
    })


    //  testimonial
    $('#testimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // service
    $('#service').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            ' <i class="fa-solid fa-arrow-left" style="color: #FFF;"></i>',
            ' <i class="fa-solid fa-arrow-right" style="color: #FFF;"></i>',
        ],
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })

    // about
    $('#about').owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1,

            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    })

    // team
    $('#team').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            ' <i class="fa-solid fa-arrow-left" style="color: #FFF;"></i>',
            ' <i class="fa-solid fa-arrow-right" style="color: #FFF;"></i>',
        ],
        responsive: {
            0: {
                items: 1,

            },
            700: {
                items: 2,
            },
            900: {
                items: 3,
            }
        }
    })
    // Aos
    AOS.init();

    // Counter up
    $('.count').counterUp({
        delay: 10,
        time: 2000
    })

});




