import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

const emptyGame = ()=>
{
    return(
        <div></div>
    )
}

const potatoGame = () => {
    return(
        <iframe frameBorder="0" src="https://itch.io/embed-upload/1776960?color=333333" 
        allowFullScreen={true} width="1000" height="660">
            <a href="https://hackjobgames.itch.io/plant-the-potato">Play Plant The Potato on itch.io</a>
        </iframe>
    )
}


const birdGame = () => {
    return(
        <iframe frameBorder="0" src="https://itch.io/embed-upload/1917788?color=333333"
        allowFullScreen={true} width="1000" height="660">
            <a href="https://hackjobgames.itch.io/birds-away">Play Birds Away on itch.io</a>
        </iframe>
    )
}


const endbar = function(item){
    item.srcElement.style.borderRight = "0px";
}
const startbar = function(item){
    item.srcElement.style.visibility = "visible";
}
const RenderGame = function (options) {
    const gameContainer = document.getElementById(options.containerName)
    ReactDOM.render(options.game(), gameContainer)
}


const loadGamesPage = function() {
    $("#browser").load("./src/html/games.html", () => { 
        $("#games_browser").load("./src/html/game_info/landing_page.html"); 
        $('#bird_button').on('click', ()=>{$("#games_buttons").load('./src/html/game_info/birdsaway/birds_info.html', () => {
            RenderGame({ containerName: 'game_player', game: emptyGame})
            $('#about_birds').on('click', ()=>{$('#info_browser').load('./src/html/game_info/birdsaway/about.html')})
            $('#how_to_birds').on('click', ()=>{$('#info_browser').load('./src/html/game_info/birdsaway/how_to.html')})
            $('#play_birds').on('click', ()=>{
                RenderGame({ containerName: 'game_player', game: birdGame})
            })
            $("#info_browser").load("./src/html/game_info/birdsaway/about.html");  
        })})
        $('#potato_button').on('click', ()=>{$("#games_buttons").load('./src/html/game_info/potato/potato_info.html', () => {
            RenderGame({ containerName: 'game_player', game: emptyGame})
            $('#about_potato').on('click', ()=>{$('#info_browser').load('./src/html/game_info/potato/about.html')})
            $('#how_to_potato').on('click', ()=>{$('#info_browser').load('./src/html/game_info/potato/how_to.html')})
            $('#play_potato').on('click', ()=>{
                RenderGame({ containerName: 'game_player', game: potatoGame})
            })
            $("#info_browser").load("./src/html/game_info/potato/about.html");
        })})  
    }); 
}

$("#browser").load("./src/html/main.html", ()=>{
    const main = document.getElementById("heading-primary-main");
    main.addEventListener('animationend',endbar, false);
    const sub = document.getElementById("heading-primary-sub");
    sub.addEventListener('animationend',endbar, false);
    sub.addEventListener('animationstart', startbar, false);
}); 

$("#main_but").on("click", function(){
        $("#browser").load("./src/html/main.html"); 
        $(".sidebar").toggleClass("side"); 
        $(".toggle-button").toggleClass("fa-times");
}) 

$("#about_but").on("click", function(){
        $("#browser").load("./src/html/about.html"); 
        $(".sidebar").toggleClass("side"); 
        $(".toggle-button").toggleClass("fa-times");
}) 

$("#games_but").on("click", function(){
        loadGamesPage()
        $(".sidebar").toggleClass("side"); 
        $(".toggle-button").toggleClass("fa-times");
}) 

$("#stream_but").on("click", function(){
        $("#browser").load("./src/html/stream.html"); 
        $(".sidebar").toggleClass("side"); 
        $(".toggle-button").toggleClass("fa-times");
})

$(".toggle-button").on("click", function(){
        $(".sidebar").toggleClass("side"); 
        $(".toggle-button").toggleClass("fa-times");
        $(".body-shift").toggleClass(".body-unshift"); 
}) 

//end_main

//stream
let channels;
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

export{ channels }