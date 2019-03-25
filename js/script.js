let owl = $(".owl-carousel")

document.addEventListener("DOMContentLoaded", function(event) {
$('.owl-item:not(.active)>.slider__item>.slider__content-wrapper').children().css('display', 'none')
$('.owl-item:not(.active)>.slider__item>img:not(:first-child)').css('display', 'none')
})

owl.owlCarousel({
    items: 1,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    animateIn: 'slideInLeft',
    animateOut: 'slideOutRight',
    dots: false
});

owl.on('translated.owl.carousel', function(event) {
    $('.owl-item:not(.active)>.slider__item>.slider__content-wrapper').children().css('display', 'none').removeClass('animated')
    $('.owl-item.active').children().children('.slider__content-wrapper').children().css('display', 'block').addClass('animated')
    $('.owl-item:not(.active)>.slider__item>img:not(:first-child)').css('display', 'none').removeClass('animated')
    $('.owl-item.active').children().children('img:not(:first-child)').css('display', 'block').addClass('animated')
});