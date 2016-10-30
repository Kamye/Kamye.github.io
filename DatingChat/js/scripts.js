$(document).ready(function () {

    $(function(){
        $('#menu').slicknav();
    });

    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.slider').slick({
        arrows: false,
        dots: true
    });

    $(function($) {
        var allAccordions = $('.accordion div.data');
        var allAccordionItems = $('.accordion .accordion-item');
        $('.accordion > .accordion-item').click(function() {
            if($(this).hasClass('open'))
            {
                $(this).removeClass('open');
                $(this).next().slideUp("slow");
            }
            else
            {
                allAccordions.slideUp("slow");
                allAccordionItems.removeClass('open');
                $(this).addClass('open');
                $(this).next().slideDown("slow");
                return false;
            }
        });
    });
    
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    




});