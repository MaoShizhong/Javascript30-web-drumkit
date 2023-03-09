window.addEventListener('keydown', function(e) {
    if (e.repeat) {return};
    
    const audio = document.querySelector(`audio[data-code="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0; // "resets" any currently playing audio (otherwise key inputs will not process until the current sound has finished playing)
    audio.play();

    const key = document.querySelector(`.key[data-code="${e.code}"]`);
    key.classList.add('playing');   
});

window.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.key[data-code="${e.code}"]`);
    key.classList.remove('playing');
})