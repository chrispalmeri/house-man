// src/canvas.js

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
        list.innerHTML = list.innerHTML +
        '<li><button>Edit</button> <span>' +
        item.item_name + '</span> <input /> <button>Order</button>' +
        '<button onclick="inventory.delete(' + item.item_id + '); inventory.load();">Delete</button></li>';
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

  this.delete = function(data) {
    fetch('/items/' + data, {
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