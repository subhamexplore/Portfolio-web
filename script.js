
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    var typed = new Typed(" .typing", {
        strings: ["Web Development", "Programming", "Designing", "Exploring", "Singing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(" .typing2", {
        strings: ["Student", "Web Developer", "Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(' .scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    $(' .menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

