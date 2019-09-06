


var endbar = function(item){
    console.log(item)
    item.srcElement.style.borderRight = "0px";
}
document.getElementById("heading-primary-main").addEventListener('animationend',endbar, false);
document.getElementById("heading-primary-sub").addEventListener('animationend',endbar, false);


$(function(){
    $("#includedContent").load("./html/index.html"); 
});
$(function (){
    $(".toggle-button").on("click", function(){
            $(".body-shift").toggleClass(".body-unshift"); 
    }) 
});