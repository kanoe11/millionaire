$( document ).ready(function() {
    function initialization(){
        $.ajax({
            url: "question.php",
            //data: data,
            success: function(data){
                    $("#game").append(data)
            },
            //dataType: dataType
          });
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


