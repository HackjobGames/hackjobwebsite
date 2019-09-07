

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
    $("#stream_but").on("click", function(){
            $("#browser").load("./html/stream.html"); 
            $(".sidebar").toggleClass("side"); 
            (".toggle-button").toggleClass("toggle-button-off");
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
//stream

let init = function(){
    let live = document.getElementById('live_img');
    console.log(live);
    $.ajax({ 
        url:'https://api.twitch.tv/helix/streams?client_id=6369pt9m8t9fbisq4qww1mdejejvn4&user_login=hackjobgames',
        headers: {
            "Client-ID": "6369pt9m8t9fbisq4qww1mdejejvn4"
        },
        success:function(channel) { 
            if(channel.data.length > 0){
                live.style.visibility = "visible";
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

var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);






// end stream