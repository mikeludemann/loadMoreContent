$(function(){

    $("div").slice(0,4).show();

    $("#loadMore").on('click', function(e){

        e.preventDefault();

        $("div:hidden").slice(0,4).slideDown();

        //$("div:hidden").slice(0,4).fadeIn();

        if($("div:hidden").length == 0){

            $("#loadMore").fadeOut("slow");

        } else {

            $("#loadMore").html("loading").fadeIn("slow", function(){

                setTimeout(function(){

                    $("#loadMore").html("More Content").fadeIn();

                },1000);

            });

        }

        $('html,body').animate({

            scrollTop: (this).offset().top

        }, 1500);

    });
    
});