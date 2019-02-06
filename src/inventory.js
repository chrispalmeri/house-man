// src/inventory.js

export default new function() {
  this.load = function() {
    fetch('/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let list = document.querySelector('#invList');
      list.innerHTML = '';
      json.forEach((item, index) => {
        list.innerHTML = list.innerHTML + `<li>
          <button data-action="edit" data-id="${item.item_id}">Edit</button>
          <span>${item.item_name}</span>
          <input value="${item.item_quantity}" />
          <button data-action="order" data-id="${item.item_id}">Order</button>
          <button data-action="delete" data-id="${item.item_id}">Delete</button>
        </li>`;
      })
    });
  }
  
  this.add = function(data) {
    fetch('/items', {
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

  this.edit = function(id, data) {
    console.log('edit', id);
    /*fetch('/items/' + id, {
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
    });*/
  }

  this.order = function(id, data) {
    console.log('order', id);
  }

  this.delete = function(id) {
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