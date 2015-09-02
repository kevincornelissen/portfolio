$(document).ready(function(){       
    var scroll_pos = 0;

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();

        if(scroll_pos > $(window).height()-60) {
        	$(".navRuler").css('-webkit-transition', 'background-color 1s');
            $(".navRuler").css('-moz-transition', 'background-color 1s');
            $(".navRuler").css('-o-transition', 'background-color 1s');
            $(".navRuler").css('background-color', '#e3e3e3');
            $("#navBox").css('-webkit-transition', 'background-color 1s');
            $("#navBox").css('-moz-transition', 'background-color 1s');
            $("#navBox").css('-o-transition', 'background-color 1s');
            $("#navBox").css('background-color', '#e3e3e3');
        } else {
            $(".navRuler").css('background-color', '#fff');
            $("#navBox").css('background-color', '#fff');
        }
    });
});