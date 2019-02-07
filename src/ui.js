// src/ui.js

export default new function() {
  this.read = function() {
    return {
      item_id: document.querySelector('#item_id').value,
      item_name: document.querySelector('#item_name').value,
      item_quantity: document.querySelector('#item_quantity').value,
      reorder_point: document.querySelector('#reorder_point').value,
      reorder_store: document.querySelector('#reorder_store').value,
      reorder_link: document.querySelector('#reorder_link').value
    };
  };

  this.write = function(data) {
    document.querySelector('#item_id').value = data.item_id;
    document.querySelector('#item_name').value = data.item_name;
    document.querySelector('#item_quantity').value = data.item_quantity;
    document.querySelector('#reorder_point').value = data.reorder_point;
    document.querySelector('#reorder_store').value = data.reorder_store;
    document.querySelector('#reorder_link').value = data.reorder_link;
  };

  this.delete = function() {
    document.querySelector('#item_id').value = '';
    document.querySelector('#item_name').value = '';
    document.querySelector('#item_quantity').value = '';
    document.querySelector('#reorder_point').value = '';
    document.querySelector('#reorder_store').value = '';
    document.querySelector('#reorder_link').value = '';
    document.querySelector('#mask').style.display = 'none';
  };

  this.show = function() {
    document.querySelector('#mask').style.display = 'flex';
  }
}