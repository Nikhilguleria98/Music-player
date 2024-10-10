let progress =  document.querySelector("#progress");
let ctrlIcon = document.querySelector("#img2");
let song = document.querySelector("#song");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    } else {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
}

ctrlIcon.addEventListener("click",playPause());

song.addEventListener('timeupdate', () => {
    setInterval(() => {
        progress.value = song.currentTime; 
    }, 1);
   
});

progress.addEventListener('input', () => {
    song.currentTime = progress.value;
});


