'use strict';

/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */

const keys = Array.from (document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 
