$(function(){

    $(element).slice(0,count).show();

    $(clickElement).on('click', function(e){

        e.preventDefault();

        $(element + ":hidden").slice(0,count).slideDown();

        //$(element + ":hidden").slice(0,count).fadeIn();

        if($(element + ":hidden").length == 0){

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
    
});