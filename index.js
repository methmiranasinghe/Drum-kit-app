var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
   this.style.color="white";
  });
}

// list.onclick = function(e) {
//   e.preventDefault();

//   var elm = e.target;
//   var audio = document.getElementById('audio');

//   var source = document.getElementById('audioSource');
//   source.src = elm.getAttribute('sounds/tom-1.mp3');

//   audio.load(); //call this to just preload the audio without playing
//   audio.play(); //call this to play the song right away
// };

// const playSequence = (sounds) => {
//     const playNextSound = () => {
//       audio.src = sounds[currentSoundIndex++];
//       audio.currentTime = 0;
//       audio.play();
//     };

//     let currentSoundIndex = 0;
//     if (document.querySelectorAll(".drum").length) {
//       const audio = new Audio();
//       playNextSound();

//       audio.addEventListener('ended', () => {
//         if (currentSoundIndex < document.querySelectorAll(".drum").length) {
//           playNextSound();
//         }
//       });
//     }
//   }

//   playSequence(['sounds/crash.mp3', 'sounds/kick-bass.mp3', 'snare.mp3','tom-1.mp3','tom-2.mp3,tom-3.mp3']);
