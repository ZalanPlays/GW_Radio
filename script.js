window.onbeforeunload = function () {return "Biztos kilépsz? Az oldal legközelebbi betöltésénél a lejátszó ugorhat.";}
var audio = document.getElementById("play");
var v = document.getElementById("myRange");

let files = 171;
let vol = v.value / 100;
let last = -1;
let rng;

let pics = ["https://image.fnbr.co/outfit/60755bbd22dda36249e50e7d/icon.png", "https://image.fnbr.co/outfit/5e3a8ba665b8c11684cd30ba/featured.png", "https://image.fnbr.co/outfit/5c77cf5562617938a949f10e/icon.png", "https://cdn.discordapp.com/attachments/628266989076348928/956922277511983124/751735183404695625.png"];

let r1 = Math.floor(Math.random() * pics.length);
let r2 = Math.floor(Math.random() * pics.length);
document.getElementById("pic1").src = pics[r1];
document.getElementById("pic2").src = pics[r2];

setInterval(() => {
    r1 = Math.floor(Math.random() * pics.length);
    r2 = Math.floor(Math.random() * pics.length);
    document.getElementById("pic1").src = pics[r1];
    document.getElementById("pic2").src = pics[r2];
}, 50000);

var zene = new BuildArray(files)
document.writeln("<script type='text/javascript' src='GWMusiks.js'></script>");
function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

audio.onended = function() {  
   do {
       rng = Math.floor(Math.random() * files) + 1;
  } while(rng == last);

   audio.volume = vol;
   audio.setAttribute("src", `${rng}.mp3`);
   audio.volume = vol;

   last = rng;

   if(zene[rng] !== null && zene[rng].length > 1) {
    document.getElementById("aktualis").innerHTML = `<span>${zene[rng]}<span>`
   } else {
    document.getElementById("aktualis").innerHTML = `<span> Műsorszünet <span>`
   }
}

function setVol() {
   audio.volume = v.value / 100;
}

function lower() {
   audio.volume = v.value / 100;
}
