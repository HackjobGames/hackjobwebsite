


var endbar = function(item){
    item.srcElement.style.borderRight = "0px";
}
var startbar = function(item){
    item.srcElement.style.visibility = "visible";
}
if(typeof main === 'undefined'){
    const main = document.getElementById("heading-primary-main");
    main.addEventListener('animationend',endbar, false);
}
if(typeof sub === 'undefined'){
    const sub = document.getElementById("heading-primary-sub");
    sub.addEventListener('animationend',endbar, false);
    sub.addEventListener('animationstart', startbar, false);
}

$(function(){
    $("#includedContent").load("./html/index.html"); 
});
$(function (){
    $(".toggle-button").on("click", function(){
            $(".body-shift").toggleClass(".body-unshift"); 
    }) 
});