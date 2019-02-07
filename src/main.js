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
  
  document.querySelector('#upInv').addEventListener('click', () => {
    inventory.update(ui.read());
    ui.delete();
    inventory.load();
  });

  document.querySelector('#show').addEventListener('click', () => {
    ui.show();
  });

  document.querySelector('#can').addEventListener('click', () => {
    ui.delete();
  });
  
  inventory.load();
});