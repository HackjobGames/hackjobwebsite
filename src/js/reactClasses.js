import React from 'react'
import ReactDom from 'react-dom'
import marked from 'marked'
class Devlog {
    constructor(markdown){
        this.markdown = markdown
    }
    render() {
        return <div dangerouslySetInnerHTML={{__html: marked(this.markdown)}}></div>
    }
}

export { Devlog }