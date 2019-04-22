$("q1").click(function(){
    if ( clicked == $("q1b")) {
        $(this).css('background-color', 'green');
    } else {
        $(this).css('background-color', 'red')
    }
});