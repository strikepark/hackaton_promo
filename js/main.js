$(function() {
        var box = $('#js-rules-q_list');
        var faqHeight = $('#js-rules-q_lists').height();

        var top = box.offset().top;
        var stopHeight = faqHeight + top;
        console.log(stopHeight);
        console.log(top);

        $(window).scroll(function(){
            var windowpos = $(window).scrollTop();
            if(windowpos < top) {
                box.css('position', 'static');
            } else {
                box.css('position', 'fixed');
                box.css('top', '20px');
            }
            if(windowpos > stopHeight - 200) {
                $('#js-rules-q_list').hide();
            } else {
                $('#js-rules-q_list').show();
            }
        });

        $('.btn-click').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#signup-team-form').offset().top }, 1000);
          e.preventDefault();
        });

        $('.header-bottom__link').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#reason').offset().top }, 1000);
          e.preventDefault();
        });

        $(window).scroll(function(){
            var windowpos = $(window).scrollTop();
            if (windowpos > $(window).height() && (windowpos < stopHeight - $(window).height() + 200)) {
                $('.signup-btn').show();
            } else {
                $('.signup-btn').hide();
            }
        });
    });


$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});