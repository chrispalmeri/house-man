// src/inventory.js

import dialog from './dialog.js';
import ui from './ui.js';

export default new function() {
  this.load = function() {
    fetch('/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let list = document.querySelector('#invList');
      if(json.length > 0) {
        list.innerHTML = '';
        json.forEach((item, index) => {
          list.innerHTML = list.innerHTML + `<tr>
            <td>${item.item_name}</td>
            <td><input value="${item.item_quantity}" /></td>
            <td><button data-action="order" data-id="${item.item_id}">Order</button></td>
            <td><button data-action="edit" data-id="${item.item_id}">Edit</button></td>
            <td><button data-action="delete" data-id="${item.item_id}">Delete</button></td>
          </tr>`;
        })
      } else {
        list.innerHTML = 'There are no items';
      }
    });
  }

  this.edit = function(id) {
    fetch('/items/' + id)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      json.forEach((item) => {
        ui.write(item);
      })
      dialog.open('edit');
    });
  }

  this.update = function(data) {
    let url = '/items';

    if(data.item_id) {
      url = '/items/' + data.item_id;
      delete data.item_id;
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // whatever
    });
  }

  this.order = function(id) {
    dialog.open('order');
  }

  this.delete = function(id) {
    document.querySelector('#delete_id').value = id;
    dialog.open('delete');
  }

  this.really = function(id) {
    fetch('/items/' + id, {
      method: "DELETE"
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // whatever
    });
  }
}