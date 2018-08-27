t1=Math.random()*10000;
t2=Math.random()*10000;
if(t1>t2){
    t=t1;
}
else{
    t=t2;
}
$(function(){
    $("td:odd:odd").not(":odd").css("background-color","white")
    $("td:odd:odd").not(":even").css("background-color","black")
    $("td:even:even").not(":odd").css("background-color","black")
    $("td:even:even").not(":even").css("background-color","white")
    $("td:odd:even").not(":odd").css("background-color","white")
    $("td:odd:even").not(":even").css("background-color","black")
    $("td:even:odd").not(":odd").css("background-color","black")
    $("td:even:odd").not(":even").css("background-color","white")

    $("body").on('click',function(e){
        console.log(performance.now())
        t0=performance.now();
$("body").on('keyup',function(e){
    console.log(e.key)
    if(e.key==6&&$("#car1").css("left")!="1125px"){
        $("#car1").css("left","+="+15+"px")

        t1=performance.now();
    }
    if((e.key=="a"||e.key=="A")&&$("#car2").css("left")!="1125px"){
        $("#car2").css("left","+="+15+"px")
      
        t2=performance.now();
    }
    setTimeout( function(){
        if($("#car1").css("left")=="1125px"&&$("#car2").css("left")=="1125px")
        {tc1=t1-t0;
        tc2=t2-t0;
        if(tc1>tc2){
            $("#result").html("<h3 style='color:red'>car 2 won</h3><br><h3 style='color:red'>car 2 : "+(tc2/1000).toFixed(2)+"s</h3>"+"<br><h3 style='color:blue'>car 1: "+(tc1/1000).toFixed(2)+"s</h3>")  
        }
        else{
            $("#result").html("<h3 style='color:blue'>car 1 won</h3><br><h3 style='color:blue'>car 1 : "+(tc1/1000).toFixed(2)+"s</h3>"+"<br><h3 style='color:red'>car 2: "+(tc2/1000).toFixed(2)+"s</h3>")  
        }
    }})
     
 
})
    }
)
    
}
)