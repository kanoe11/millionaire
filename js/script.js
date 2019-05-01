$( document ).ready(function() {
    $(".question-2").hide();
    $(".q1r").click(function(e){
        // verifier l'etat si l'etat  0 le user n'a jamais clique 
        if ($(".q1").data("enabled") == 0 ){
            if ( e.target.textContent == "B:Tesla" ){
                $(this).css('background-color', 'green');
                $(".question-2").show();
            }  else {
                $(this).css('background-color', 'red');
            }
            $(".q1").data("enabled" , "1");
        }
   });
   $(".q2r").click(function(e){
    // verifier l'etat si l'etat  0 le user n'a jamais clique 
    if ($(".q1").data("enabled") == true ){
        if ( e.target.textContent == "D:Grèce" ){
            $(this).css('background-color', 'green');
            } else {
                $(this).css('background-color', 'red');
            }
            $(".q1").data("enabled" , "false");
        }
    });
});