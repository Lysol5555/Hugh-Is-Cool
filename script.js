let count = 0

let countEl = document.getElementById("count-el")



function pandas() {
  count+= 1
  countEl.innerText = count
}
function play() {
  console.log("Playing sound");
  let audio = document.getElementById("audio")
  audio.play();
}