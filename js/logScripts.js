
getHtml 
$(function (){
    $("#main_but").on("click", function(){
            $("#browser").load("./html/main.html"); 
            $(".sidebar").toggleClass("side"); 
            $(".toggle-button").toggleClass("fa-times");
    }) 
});