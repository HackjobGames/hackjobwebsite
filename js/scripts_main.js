


var endbar = function(item){
    item.srcElement.style.borderRight = "0px";
}
var startbar = function(item){
    item.srcElement.style.visibility = "visible";
}
document.getElementById("heading-primary-main").addEventListener('animationend',endbar, false);
let sub = document.getElementById("heading-primary-sub")
sub.addEventListener('animationend',endbar, false);
sub.addEventListener('animationstart', startbar, false);



$(function(){
    $("#includedContent").load("./html/index.html"); 
});
$(function (){
    $(".toggle-button").on("click", function(){
            $(".body-shift").toggleClass(".body-unshift"); 
    }) 
});