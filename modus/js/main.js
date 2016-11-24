$('.slider').slick({
    dots: true
});

$('.clients-slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1
});

$('.clients-left').click(function () {
    $(".clients-slider").slick('slickPrev');
});

$('.clients-right').click(function () {
    $(".clients-slider").slick('slickNext');
});

$(function() {
    $('#dg-container').gallery();
});