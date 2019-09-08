
function init_stream(){
    new Twitch.Embed("twitch-embed", {
        width: '100%',
        height: 720,
        channel: (channels && channels.data[0]) ? channels.data[0].user_name : "hackjobgames"
    });
}

var check = setInterval(() => {
    if(typeof Twitch !== 'undefined'){
        init_stream();
        clearInterval(check);
    }
}, 1000);

