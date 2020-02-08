import { getDevlogs, login } from './server_requests'
import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import marked from 'marked'
import { Devlog } from './reactClasses'
let rawResults = []
let devlogSummaries = []


const devlogReact = () => {
    return devlogSummaries
}



getDevlogs().then(results => {
    let keyNum = 0
    rawResults = results.data
    console.log(results)
    results.data.forEach(r =>{
        keyNum += 1
        devlogSummaries.push(<div align='center' key={keyNum} dangerouslySetInnerHTML={{__html: r.summary}}>
                            </div>)
    })
}).catch(err => {
    console.log(err)
})

$('#devlog_but').on('click', () =>{
    $("#browser").load("./src/html/devlog.html", () => {
        ReactDOM.render(devlogReact(), document.getElementById('devlogSummaries'))
        const username = document.getElementById('userEntry')
        const password = document.getElementById('passEntry')
        const newPost = document.getElementById('newPost')
        newPost.style.display = 'none'
        $('#createNewPost').on('click', () => {
            login({
                username: username.value,
                password: password.value
            }).then(results => {
                console.log('Login Successful: ', results)
            })
        })
    })
    $(".sidebar").toggleClass("side")
    $(".toggle-button").toggleClass("fa-times")
})



// let text = document.getElementById('newPost').value
// text = text.split('\n')
// const title = text[0]
// const rest = text.slice(1).join('\n')
// console.log(title)
// console.log(rest)