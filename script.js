let songindex = 0;
let vry = true;
let audio = new Audio('/songs/1.mp3')
let audioplay = document.getElementById("play")
let progress1 = document.getElementById("progresss")
let gif = document.getElementById("gif")
let songitem = Array.from(document.getElementsByClassName("first"))
let mastersong = document.getElementById("mastersong")
let songvalue = Array.from(document.getElementsByClassName('time'))
let player = true;
let song = [
    { songName: 'song1 from ncs', songpath: '/songs/1.mp3' ,songtime:`00:00`},
    { songName: 'song2 from ncs', songpath: '/songs/2.mp3' ,songtime:'00:00'},
    { songName: 'song3 from ncs', songpath: '/songs/3.mp3' ,songtime:'00:00'},
    { songName: 'song4 from ncs', songpath: '/songs/4.mp3' ,songtime:'00:00'},
    { songName: 'song5 from ncs', songpath: '/songs/5.mp3' ,songtime:'00:00'},
    { songName: 'song6 from ncs', songpath: '/songs/6.mp3' ,songtime:'00:00'},
    { songName: 'song7 from ncs', songpath: '/songs/7.mp3' ,songtime:'00:00'},
    { songName: 'song8 from ncs', songpath: '/songs/8.mp3' ,songtime:'00:00'},
    { songName: 'song9 from ncs', songpath: '/songs/9.mp3' ,songtime:'00:00'},
    { songName: 'song10 from ncs', songpath: '/songs/10.mp3' ,songtime:'00:00'},


]
songitem.forEach((element, i) => {

    element.getElementsByClassName("songname")[0].innerText = song[i].songName
});





audioplay.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play()
        audioplay.classList.remove('fa-play-circle')
        audioplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else {
        audio.pause()
        audioplay.classList.add('fa-play-circle')
        audioplay.classList.remove('fa-circle-pause')
        gif.style.opacity = 0;

    }
})
audio.addEventListener('timeupdate', () => {
    progress321 = parseInt((audio.currentTime / audio.duration) * 100);
    progress1.value = progress321;
});
audio.addEventListener('timeupdate',dilshad = (element)=>{
    let currentminute , currentseconds , totalminute , totalseconds;
    currentminute = Math.floor((audio.currentTime / 60))
    totalminute = Math.floor((audio.duration / 60))
    currentseconds = Math.floor((audio.currentTime % 60))
    totalseconds = Math.floor((audio.duration % 60))
     currrenttime1 = currentminute + ":" + currentseconds
    totaltime = totalminute + ":" + totalseconds
   songtime = currrenttime1 + ":" + totaltime
   document.getElementsByClassName('time')[0].innerText  = currrenttime1 + ":" + totaltime
    
    console.log(songtime) 

})

progress1.addEventListener('change', () => {
    audio.currentTime = progress1.value * audio.duration / 100

})
const markplay = () => {
    Array.from(document.getElementsByClassName('pause1')).forEach((element) => {
        audio.pause()

        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-play-circle')
        gif.style.transition = "opacity 1s ease-in"
        gif.style.opacity = 0;
        audioplay.classList.add('fa-play-circle')
        audioplay.classList.remove('fa-circle-pause')

    })
}
Array.from(document.getElementsByClassName('pause1')).forEach((element) => {
    element.addEventListener('click', (e) => {

        if (audio.paused) {
            let row = '';
            songindex = parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-circle-pause')

            audio.src = `/songs/${songindex + 1}.mp3`

            mastersong.innerText = song[songindex].songName

            audio.currentTime = 0;
            audio.play()

            audioplay.classList.add('fa-circle-pause')
            audioplay.classList.remove('fa-play-circle')
            gif.style.opacity = 1;
            gif.style.transition = "opacity 1s ease-in"
        }
        else {
            markplay();

        }



    })
})

document.getElementById("pravious").addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0
    }
    else {
        songindex -= 1;
    }

    audio.src = `/songs/${songindex + 1}.mp3`
    mastersong.innerText = song[songindex].songName

    audio.currentTime = 0;
    audio.play()
    audioplay.classList.add('fa-circle-pause')
    audioplay.classList.remove('fa-play-circle')
})
document.getElementById("next").addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    audio.src = `/songs/${songindex + 1}.mp3`
    mastersong.innerText = song[songindex].songName

    audio.currentTime = 0;
    audio.play()
    audioplay.classList.add('fa-circle-pause')
    audioplay.classList.remove('fa-play-circle')
})