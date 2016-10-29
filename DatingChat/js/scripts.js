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

    $(document).ready(function(){

        //Check to see if the window is top if not then display button
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

    });

});