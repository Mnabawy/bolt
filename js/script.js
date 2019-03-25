//number onne
    var c = document.getElementById("myCanvas1");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,-2,1*Math.PI);
    ctx.stroke();

    //number tow

    var c = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,-2,1*Math.PI);
    ctx.stroke();
   
   

    //number three

    var c = document.getElementById("myCanvas3");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,-2,1*Math.PI);
    ctx.stroke();

    //number four
    
    var c = document.getElementById("myCanvas4");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,-2,1*Math.PI);
    ctx.stroke();
    
    $(document).ready(function(){
        $("#slide").click(function(){
            $("#content").fadeToggle("slow");
        });

    });