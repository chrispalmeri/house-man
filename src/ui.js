// src/ui.js

export default new function() {
  this.read = function() {
    return {
      item_id: document.getElementById('item_id').value,
      item_name: document.getElementById('item_name').value,
      item_quantity: document.getElementById('item_quantity').value,
      reorder_point: document.getElementById('reorder_point').value,
      reorder_store: document.getElementById('reorder_store').value,
      reorder_link: document.getElementById('reorder_link').value
    };
  };

  this.write = function(data) {
    document.getElementById('item_id').value = data.item_id;
    document.getElementById('item_name').value = data.item_name;
    document.getElementById('item_quantity').value = data.item_quantity;
    document.getElementById('reorder_point').value = data.reorder_point;
    document.getElementById('reorder_store').value = data.reorder_store;
    document.getElementById('reorder_link').value = data.reorder_link;
    
    document.getElementById('display_store').innerHTML = `In store at ${data.reorder_store}`;
    document.getElementById('display_link').innerHTML = `<a href="${data.reorder_link}">Order online</a>`;
  };

  this.delete = function() {
    document.getElementById('item_id').value = '';
    document.getElementById('item_name').value = '';
    document.getElementById('item_quantity').value = '';
    document.getElementById('reorder_point').value = '';
    document.getElementById('reorder_store').value = '';
    document.getElementById('reorder_link').value = '';
  };
}