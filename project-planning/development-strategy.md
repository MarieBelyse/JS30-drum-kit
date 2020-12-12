# drum-kit Development Strategy


--- 
This site build base on Wes Bos's tutorial code on JavaScript30.
## 0.Setup
- Create repository
- Include a Lisence
- Reconstruct the structure in Separation Of Concern concept. (`handlers`, `listeners`)
---

## 1.User Story: As a user I want to play digital drum with just press a keyboard.
- Display a keyboard.
- Create keydown function to activate audio sound of each key user pressed.

## 2. User Story: As a user I want play sounds.
- Create a `/sounds`folder containing all of the .wav files.
- `handlers play-sound.js` return audio sound of each key user pressed. The event handler linked audio sound.
- `listener play-sound`will trigger the handlers data on `keydown`.
- `handlers remove-transition.js` & `listeners remove-transition.js` will end the sound and remove sound transition on the key release.
## 3. User Story: As a user I want a well-styled page
- Add the background image to `/img` and apply it
- Styled the keys

> 

### REPO
- Generate the JavaScript-30 starter repo.
- Run the project locally
- Push changes
- Turn on GitHub pages