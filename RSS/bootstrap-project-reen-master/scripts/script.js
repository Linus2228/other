$(document).ready(function () {
    $('.owl-slider').owlCarousel({
        autoHeight: false,
        items: 4,
        smartSpeed: 500,
        responsive: {
            320: {
                items: 1,
                stagePadding: 10,
                margin: 10,
            },
            640: {
                items: 2,
                stagePadding: 12,
                margin: 20
            },
            1024: {
                stagePadding: 15,
                margin: 30
            }
        }
    });
    $('.carousel').carousel({
        interval: false,
        pause: true
    });
});

