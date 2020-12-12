'use strict';

/**
 * changes the program's separator value
 * @param {Event} event - triggered whenever a user types in the separator input area
 */
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together

  key.classList.add('playing');
  audio.currentTime = 0; // rewind to the start
  audio.play();
  
}
