import { getDevlogs } from './server_requests'
import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'

let devlogSummaries


getDevlogs().then(results => {
    devlogSummaries = results.data.map(r =>{
        return <div dangerouslySetInnerHTML={{__html: r.summary}}></div>
    })
    console.log(devlogSummaries)
})



$('#devlog_but').on('click', () =>{
    $("#browser").load("./src/html/devlog.html", () => {
        ReactDOM.render(devlogSummaries[0], document.getElementById('devlogSummaries'))
    }); 
    $(".sidebar").toggleClass("side"); 
    $(".toggle-button").toggleClass("fa-times");
    
})
