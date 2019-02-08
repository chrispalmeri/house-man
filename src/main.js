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
  
  document.querySelector('#noOrder').addEventListener('click', () => {
    dialog.close('order');
  });
  
  document.querySelector('#doDelete').addEventListener('click', () => {
    let id = document.querySelector('#delete_id').value;
    inventory.really(id);
    document.querySelector('#delete_id').value = '';
    dialog.close('delete');
    inventory.load();
  });
  document.querySelector('#noDelete').addEventListener('click', () => {
    document.querySelector('#delete_id').value = '';
    dialog.close('delete');
  });
  
  inventory.load();
});