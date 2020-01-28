import { getDevlogs } from './server_requests'
import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'

let devlogSummaries = []

const devlogReact = () => {
    return devlogSummaries
}

getDevlogs().then(results => {
    let keyNum = 0
    results.data.forEach(r =>{
        keyNum += 1
        devlogSummaries.push(<div align='center' key={keyNum} dangerouslySetInnerHTML={{__html: r.summary}}></div>)
    })
}).catch(err => {
    console.log(err)
})

$('#devlog_but').on('click', () =>{
    $("#browser").load("./src/html/devlog.html", () => {
        ReactDOM.render(devlogReact(), document.getElementById('devlogSummaries'))
    }); 
    $(".sidebar").toggleClass("side"); 
    $(".toggle-button").toggleClass("fa-times");
    
})
