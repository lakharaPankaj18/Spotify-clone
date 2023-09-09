console.log('Welcome to Spotify');
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Cartoon - On & On", filePath: "songs/1.mp3", coverPath: "music/1.jpg"},
    {songName: "Lost Sky - Fearless", filePath: "songs/2.mp3", coverPath: "music/1.jpg"},
    {songName: "Warriyo - Mortals", filePath: "songs/3.mp3", coverPath: "music/1.jpg"},
    {songName: "Invisible", filePath: "songs/4.mp3", coverPath: "music/1.jpg"},
    {songName: "Control", filePath: "songs/5.mp3", coverPath: "music/1.jpg"},
    {songName: "Superhero", filePath: "songs/6.mp3", coverPath: "music/1.jpg"},
]

// audioElement.play();

// Handle play/pause click
masterplay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
}
})

// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTIme/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = audioElement.duration * myProgressBar.value/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');

})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       makeAllPlays();
       songIndexindex = parseInt(e.target.id)
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = 'songs/${songIndex+1}.mp3';
       audioElement.currentTime = 0;
       audioElement.play();
       masterplay.classList.remove('fa-circle-play');
       masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementsById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementsById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})