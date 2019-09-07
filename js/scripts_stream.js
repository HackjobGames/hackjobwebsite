
function init_stream(){
    new Twitch.Embed("twitch-embed", {
        width: '100%',
        height: 720,
        channel: "hackjobgames"
    });
}

var check = setInterval(() => {
    if(typeof Twitch !== 'undefined'){
        init_stream();
        clearInterval(check);
    }
}, 1000);

