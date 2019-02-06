// src/main.js

import inventory from './inventory.js';
import ui from './ui.js';

window.addEventListener("load", () => {
  document.querySelector('#invList').addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      const action = e.target.getAttribute('data-action');
      const id = e.target.getAttribute('data-id');
      inventory[action](id);
      inventory.load();
    }
  })

  document.querySelector('#addInv').addEventListener('click', () => {
    inventory.add(ui.read());
    ui.delete();
    inventory.load();
  });
  
  inventory.load();
});