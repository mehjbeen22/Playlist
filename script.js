
const playButtons = document.querySelectorAll('.play-btn');
let currentAudio; // Variable to store the currently playing audio

// Attach click event listener to each play button
playButtons.forEach(button => {
  let isPlaying = false; // Variable to track the playing state
  let audio; // Variable to store the audio element
  const icon = button.querySelector('.play-image'); // Play button icon

  button.addEventListener('click', function() {
    // Retrieve the audio file URL associated with the play button
    const audioURL = button.dataset.audio;

    if (currentAudio && currentAudio !== audioURL) {
      // Pause the previously playing audio if it's different from the current one
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = undefined;
    }

    if (!isPlaying) {
      audio = new Audio(audioURL);
      audio.play();
      isPlaying = true;
      icon.src = './image/pause.svg';
      currentAudio = audio;
    } else {
      audio.pause();
      isPlaying = false;
      icon.src = './image/play-btn.svg';
      currentAudio = undefined;
    }
  });
});
