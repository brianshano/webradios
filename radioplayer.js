/* Radio player management */
/* it depends on mrp.js */
var playerConfig = {
        "codec":"mp3",
        "elementId": "player-wrapper",
        "volume":100,
        "autoplay":true,
        "jsevents":true,
        "buffering":0,
        "wmode":"transparent",
        "skin":"cassette",
        "width":200,
        "height":120
};
var defaultRadio = {
        title:"PBB",
        url:"http://relay1.bide-et-musique.com:9100/;",
        metadataMode:"shoutcast"
};

function returnPlayerConfig() {
    playerConfig.title = defaultRadio.title;
    playerConfig.url = defaultRadio.url;
    playerConfig.metadataMode = defaultRadio.metadataMode;
    return playerConfig;
}

function returnPlayer(){
    MRP.insert(returnPlayerConfig());
}

function loadTrack(title, url){
    MRP.setUrl(url);
    MRP.setTitle(title);
    MRP.play();
}
