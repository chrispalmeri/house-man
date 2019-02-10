// src/main.js

import dialog from './dialog.js';
import inventory from './inventory.js';
import ui from './ui.js';

window.addEventListener("load", () => {
  document.getElementById('add').addEventListener('click', () => {
    dialog.open('edit');
  });

  document.getElementById('items').addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      const action = e.target.getAttribute('data-action');
      const id = e.target.getAttribute('data-id');
      inventory.get(id);
      dialog.open(action);
      inventory.all();
    }
  });

  document.getElementById('doEdit').addEventListener('click', () => {
    inventory.set(ui.read());
    ui.delete();
    dialog.close('edit');
    inventory.all();
  });
  document.getElementById('noEdit').addEventListener('click', () => {
    ui.delete();
    dialog.close('edit');
  });
  
  document.getElementById('doOrder').addEventListener('click', () => {
    let data = ui.read();
    data.ordered = true;
    inventory.set(data);
    ui.delete();
    dialog.close('order');
    inventory.all();
  });
  document.getElementById('noOrder').addEventListener('click', () => {
    ui.delete();
    dialog.close('order');
  });
  
  document.getElementById('doDelete').addEventListener('click', () => {
    let id = document.getElementById('item_id').value;
    inventory.delete(id);
    
    ui.delete();
    dialog.close('delete');
    inventory.all();
  });
  document.getElementById('noDelete').addEventListener('click', () => {
    ui.delete();
    dialog.close('delete');
  });
  
  inventory.all();
});