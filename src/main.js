// src/main.js

import dialog from './dialog.js';
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
    dialog.close('edit');
    inventory.load();
  });

  document.querySelector('#show').addEventListener('click', () => {
    dialog.open('edit');
  });

  document.querySelector('#can').addEventListener('click', () => {
    ui.delete();
    dialog.close('edit');
  });
  
  inventory.load();
});