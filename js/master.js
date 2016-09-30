// Put all your page JS here

$(function (){
    $('.enter_link').click(function() {
        $('#slickQuiz').slickQuiz({
            questionCountText: 'Frage %current of %total',
            preventUnansweredText: 'You must select at least one answer.',
            checkAnswerText:  'Prüfen diese Fragen' +
            '!',
        });
        $('#splashscreen').hide();
        $('#slickQuiz').show();

    });
});

