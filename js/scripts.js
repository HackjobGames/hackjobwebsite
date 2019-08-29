

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
$(function (){
    $(".toggle-button").on("click", function(){
            $(".sidebar").toggleClass("side"); 
            $(".toggle-button").toggleClass("toggle-button-off");
    }) 
});
//end_main

//games
function load_game(page){
    $("#games_browser").load(page); 
}
//end_games


//bird_info

function load_bird(page){
    $("#bird_browser").load(page); 
}


//end bird_info

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