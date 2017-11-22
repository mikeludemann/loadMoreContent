function loadMoreContent(elements,clickElement,loadingContent,defaultText,count){

    'use strict';

    $(elements).slice(0,count).show();

    $(clickElement).on('click', function(e){

        e.preventDefault();

        $(elements + ":hidden").slice(0,count).slideDown();
        //$(elements + ":hidden").slice(0,count).fadeIn();

        if($(elements + ":hidden").length == 0){

            $(clickElement).fadeOut("slow");

        } else {

            $(clickElement).html(loadingText).fadeIn("slow", function(){

                setTimeout(function(){

                    $(clickElement).html(defaultText).fadeIn();

                },1000);

            });
        }

        $('html,body').animate({

            scrollTop: (this).offset().top

        }, 1500);

    });
    
}