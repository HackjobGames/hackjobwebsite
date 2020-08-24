import React from 'react'

const endbar = function(item){
  item.srcElement.style.borderRight = "0px";
}
const startbar = function(item){
  item.srcElement.style.visibility = "visible";
}

export class Splash extends React.Component {
  componentDidMount() {
    const main = document.getElementById("heading-primary-main");
    main.addEventListener('animationend',endbar, false);
    const sub = document.getElementById("heading-primary-sub");
    sub.addEventListener('animationend',endbar, false);
    sub.addEventListener('animationstart', startbar, false);
  }
  render() {
    return (
      <div>
        <div className="body-shift"/>
        <header className="head-main">
          <div className="text-box">
            <h1 id="heading-primary">
              <span id="heading-primary-main">Hackjob Games</span>
              <span id="heading-primary-sub">Making sub-par games since 2019</span>
            </h1>
          </div>
        </header>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    )
  }
}
