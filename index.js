// Wait for 3 seconds before playing the sound
setTimeout(() => {
  const audio = new Audio("assets/backsound.mp3");
  audio.loop = true;
  audio.play();
  document.body.appendChild(audio); // Append the audio element to the document body
}, 3000);

setTimeout(() => {
  // Stop the current backsound
  const backsound = document.querySelector("audio");
  backsound.pause();
  backsound.currentTime = 0; // Reset the audio to the start to ensure it can be replayed if needed

  // Start playing the tv sound
  const tvSound = new Audio("assets/tv.mp3"); // Adjust the file name/path as necessary
  tvSound.loop = false;
  tvSound.play();
  document.body.appendChild(tvSound); // Append the new audio element to the document body

  //Hide overlay and parent Show tech screen after 14 sec
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".overlay3").style.display = "block";
  document.querySelector(".parent").style.display = "none";
  document.querySelector(".title").style.display = "none";
}, 14000);

// Wait for 16 seconds to mute the sound and show/hide elements
setTimeout(() => {
  document.querySelectorAll("audio").forEach((audio) => {
    audio.muted = true;
  });

  //Hide overlay 3 , show overlay2 and stuff
  document.querySelector(".overlay3").style.display = "none";
  document.querySelector(".overlay2").style.display = "block";
  document.getElementById("back").style.display = "block";
  document.querySelector(".X").style.display = "flex";
  document.querySelectorAll(".X div").forEach((div) => {
    div.style.display = "flex";
  });
}, 17000);

// Toggle mute status when mute button is clicked
const muteButton = document.getElementById("mutedBtn");
muteButton.addEventListener("click", () => {
  const audio = document.querySelector("audio");
  audio.muted = !audio.muted;
  muteButton.querySelector("img").src = audio.muted
    ? "assets/sound off.png"
    : "assets/sound.png";
});

// Function to show the popup
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Add click event listener to the div.xiv2 to show the popup
document.querySelector('.xiv2').addEventListener('click', showPopup);

// Add click event listener to the close button inside the popup
document.getElementById('closePopup').addEventListener('click', closePopup);


//Function to reset the scene and restart the sequence
function resetAndStartScene() {
  // Stop and remove any existing audio from the document
  document.querySelectorAll("audio").forEach(audio => {
    audio.pause();
    document.body.removeChild(audio);
  });

  // Reset the visibility of elements to their initial state
  document.querySelector(".overlay").style.display = "";
  document.querySelector(".overlay3").style.display = "none";
  document.querySelector(".overlay2").style.display = "none";
  document.querySelector(".parent").style.display = "";
  document.querySelector(".title").style.display = "";
  document.querySelector(".X").style.display = "none";
  document.getElementById("back").style.display = "none"; 

  // Restart the audio and animations
  setTimeout(() => {
    const audio = new Audio("assets/backsound.mp3");
    audio.loop = true;
    audio.play();
    document.body.appendChild(audio);
  }, 3000);

  // You might need to restart any other timeouts or intervals here
}

// Adding the event listener to the back button
document.getElementById("back").addEventListener("click", resetAndStartScene);
