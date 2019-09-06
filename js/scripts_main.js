$(function(){
    $("#includedContent").load("./html/index.html"); 
});
$(function (){
    $(".toggle-button").on("click", function(){
            $(".body-shift").toggleClass(".body-unshift"); 
    }) 
});

var endbar;
var elem = document.getElementsByClassName("heading-primary-main");
elem[0].addEventListener('animationend',endbar, false);
endbar = function(event){
    elem[0].style.borderRight = "0px";
}

var endbar2;
var elem2 = document.getElementsByClassName("heading-primary-sub");
elem2[0].addEventListener('animationend',endbar2, false);
endbar2 = function(event){
    elem2[0].style.borderRight = "0px";
}