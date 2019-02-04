// src/main.js

import inventory from './inventory.js';

window.addEventListener("load", () => {
  document.querySelector('#addInv').addEventListener('click', () => {
    inventory.add({
      item_name: 'Some other item',
      item_quantity: 7
    });
    inventory.load();
  });
  
  inventory.load();
});