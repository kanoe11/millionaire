$( document ).ready(function() {
    $(".q1r").click(function(e){
        if ($(".q1").data("charger" , "enabled") == 0){
            $(".q1".data("charger"));
        }
        else 
        $(".q1").data("charger" , "enabled");
            if ( e.target.textContent == "B:Tesla" ){
            $(this).css('background-color', 'green');
        } else {
            $(this).css('background-color', 'red');
        }
    });
});