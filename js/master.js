// Put all your page JS here

$(function (){
    $('.enter_link').click(function() {
        $('#slickQuiz').slickQuiz();
        $('#splashscreen').hide();
        $('#slickQuiz').show();

    });
});

