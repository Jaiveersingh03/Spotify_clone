console.log("Welcome To Spotify");
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogression=document.getElementById('myprogression');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'))

let songs=[
    {songName:'Panga',filePath:"songs/1.mp3",coverPath:"photo/panga.jpg"},
    {songName:'Antidote',filePath:'songs/2.mp3',coverPath:'photo/antitode.webp'},
    {songName:'Clash',filePath:'songs/3.mp3',coverPath:'photo/clash.jpeg'},
    {songName:'Desi kalakaar',filePath:'songs/4.mp3',coverPath:'photo/desi.jpg'},
    {songName:'Goliyan',filePath:'songs/5 2.mp3',coverPath:'photo/goliyan.jpg'},
    {songName:'Jatt Mehkma',filePath:'songs/6.mp3',coverPath:'photo/jatt mehkma.jpg'},
    {songName:'Jhanjar',filePath:'songs/7.mp3',coverPath:'photo/jhanjar.jpeg'},
    {songName:'Panjab',filePath:'songs/8.mp3',coverPath:'photo/panjab.jpg'},
    {songName:'Us',filePath:'songs/9.mp3',coverPath:'photo/us.jpeg'},
    {songName:'Winning Speech',filePath:'songs/10.mp3',coverPath:'photo/winning.jpeg'}, 
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogression.value=progress;

})
myprogression.addEventListener('change',()=>{
    audioElement.currentTime=myprogression.value*audioElement.duration/100;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


})
}   

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})