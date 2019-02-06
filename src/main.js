// src/main.js

import inventory from './inventory.js';

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
    inventory.add({
      item_name: document.querySelector('#item_name').value,
      item_quantity: document.querySelector('#item_quantity').value,
      reorder_point: document.querySelector('#reorder_point').value,
      reorder_store: document.querySelector('#reorder_store').value,
      reorder_link: document.querySelector('#reorder_link').value
    });
    document.querySelector('#item_name').value = '';
    document.querySelector('#item_quantity').value = '';
    document.querySelector('#reorder_point').value = '';
    document.querySelector('#reorder_store').value = '';
    document.querySelector('#reorder_link').value = '';
    inventory.load();
  });
  
  inventory.load();
});