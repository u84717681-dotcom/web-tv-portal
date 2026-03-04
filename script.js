const player = document.getElementById("tvPlayer");
const channelList = document.getElementById("channelList");
const searchInput = document.getElementById("searchInput");

/* Load Channels */

function loadChannels(list){

channelList.innerHTML="";

list.forEach(channel=>{

const card=document.createElement("div");

card.className="channel-card";

card.innerHTML=`

<img src="${channel.logo}">
<span>${channel.name}</span>

`;

card.onclick=()=>{

player.src=channel.url;

};

channelList.appendChild(card);

});

}

/* Filter Category */

function filterChannels(category){

if(category==="all"){

loadChannels(channels);

return;

}

const filtered=channels.filter(c=>c.category===category);

loadChannels(filtered);

}

/* Search */

searchInput.addEventListener("keyup",()=>{

const term=searchInput.value.toLowerCase();

const filtered=channels.filter(c=>

c.name.toLowerCase().includes(term)

);

loadChannels(filtered);

});

/* Fullscreen */

function fullscreenPlayer(){

player.requestFullscreen();

}

/* Default Channel */

window.onload=()=>{

loadChannels(channels);

player.src=channels[0].url;

};