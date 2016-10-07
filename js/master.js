// Put all your page JS here

$(function (){
    $('.enter_link').click(function() {
        $('#slickQuiz').slickQuiz({
            questionCountText: 'Frage %current of %total',
            preventUnansweredText: 'You must select at least one answer.',
            checkAnswerText:  'Prüfen diese Fragen' +
            '!',
        });
        $('.theory').hide();
        $('#slickQuiz').show();

    });
    $('.enter_theory').click(function() {

        $('#splashscreen').hide();
        $('.theory').show();

    });
});

$('#a').keyup(function () {
    var a = $('#a').val();
    var b = $('#b').val();
    a = parseInt(a);
    b = parseInt(b);
    if (!isNaN(a) && !isNaN(b)) {
        calculateY(a, b);
        drawLine(a, b);
    }
});

$('#b').keyup(function () {
    var a = $('#a').val();
    var b = $('#b').val();
    a = parseInt(a);
    b = parseInt(b);
    if (!isNaN(a) && !isNaN(b)) {
        calculateY(a, b);
        drawLine(a, b);
    }
});
function calculateY (a, b)  {
    $('#td22').html(a*0+b);
    $('#td23').html(a*1+b);
    $('#td24').html(a*-1+b);
    $('#td25').html(a*2+b);
    $('#td26').html(a*-2+b);


}
function drawLine(a, b) {
    $('.graph div').remove();
    var x0 = 55;
    var y0 = 0;
    var x1 = 295;
    var y1 = 0;
    y0 = a * -4 + b;
    y1 = a * 4 + b;
    y0 *= 32.8;
    y1 *=32.8;

    $('.graph').line(x0, y0, x1, y1, {color: "black", zindex: 1});
}

