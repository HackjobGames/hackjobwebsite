$(function (){
    $("#browser").load("./html/main.html");  
});
$(function (){
    $("#main_but").on("click", function(){
            $("#browser").load("./html/main.html"); 
    }) 
});
$(function (){
    $("#about_but").on("click", function(){
            $("#browser").load("./html/about.html"); 
    }) 
});