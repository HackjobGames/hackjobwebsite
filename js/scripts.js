

//main
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
//end_main

//games
$(function (){
    $("#birds_about").on("click", function(){
            $("#browser").load("./game_info/birdsaway/howto.html"); 
    }) 
});
$(function (){
    $("#birds_howto").on("click", function(){
            $("#browser").load("./game_info/birdsaway/about.html"); 
    }) 
});
//end_games

function hide_show(input){
    var elem = document.getElementById(input);
    console.log(elem.style.display);
    if(elem.style.display == "none"){
        elem.style.display = "inline-block";
    }
    else{
        elem.style.display = "none";
    }
}