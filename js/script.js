$( document ).ready(function() {
    function initialization(){
       /*  for(var i = 2 ; i < 4 ; i++){
            $(".question-"+i).hide();   
        } */
       /*$.ajax({
        url: 
        method:"GET"
       })*/
    }
    $(".q1r").click(function(){
        CheckAttribute(this);
    });       
    function CheckAttribute(context){
        var i = 1;
        if ($(context).attr("data-response") == "yes"){
            $(context).addClass("vrai");
            $(".question-"+i).show();
            i= i +1;  
            console.log($(".question-"+i).show());
        } else {
            $(context).addClass("faux");
            alert("Vous avez perdu");
        }     
    } 
   initialization();
});
