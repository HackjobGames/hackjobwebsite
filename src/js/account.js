import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

$("#account_but").on("click", function(){
    $("#browser").load("./src/html/signIn.html"); 
    $(".sidebar").toggleClass("side"); 
    $(".toggle-button").toggleClass("fa-times");
})