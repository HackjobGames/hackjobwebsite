

//main
$(function (){
    if(document.referrer.includes('birds')){
        $("#browser").load("./html/games.html"); 
    }
    else{
        $("#browser").load("./html/main.html");  
    }
    
});
$(function (){
    $("#main_but").on("click", function(){
            $("#browser").load("./html/main.html"); 
            $(".sidebar").toggleClass("side"); 
            $(".toggle-button").toggleClass("fa-times");
    }) 
});
$(function (){
    $("#about_but").on("click", function(){
            $("#browser").load("./html/about.html"); 
            $(".sidebar").toggleClass("side"); 
            $(".toggle-button").toggleClass("fa-times");
    }) 
});
$(function (){
    $("#games_but").on("click", function(){
            $("#browser").load("./html/games.html");
            $(".sidebar").toggleClass("side"); 
            $(".toggle-button").toggleClass("fa-times");
    }) 
});
$(function (){
    $("#stream_but").on("click", function(){
            $("#browser").load("./html/stream.html"); 
            $(".sidebar").toggleClass("side"); 
            $(".toggle-button").toggleClass("fa-times");
    }) 
});
$(function (){
    $(".toggle-button").on("click", function(){
            $(".sidebar").toggleClass("side"); 
            $(".toggle-button").toggleClass("fa-times");
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
//stream
var channels;
const liveCheck = function(){
    let live = document.getElementById('live_img');
    $.ajax({ 
        url:'https://api.twitch.tv/helix/streams?client_id=6369pt9m8t9fbisq4qww1mdejejvn4&user_login=hackjobgames&user_login=captain_ezekiel&user_login=greengogg&user_login=rjpurple&user_login=gampleton',
        headers: {
            "Client-ID": "6369pt9m8t9fbisq4qww1mdejejvn4"
        },
        success:function(channel) {
            if(channel.data.length > 0){
                live.style.visibility = "visible";
                channels = channel;
            }
            else{
                live.style.visibility = "hidden";
            }
        },
        error:function() {
            //request failed
        }
    });
}
setInterval(function() {
        liveCheck();
}, 10000)

$(document).ready(function() { 
    liveCheck();
});
//end stream