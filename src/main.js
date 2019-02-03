// src/main.js

import inventory from './inventory.js';

window.addEventListener("load", () => {
  document.querySelector('#loadInv').addEventListener('click', () => {
    inventory.load();
  });
});