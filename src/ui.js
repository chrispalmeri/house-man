// src/ui.js

export default new function() {
  this.read = function() {
    // use current.js for more of this
    // check for empty values
    // only post what you need to
    return {
      item_id: document.getElementById('item_id').value,
      item_name: document.getElementById('item_name').value,
      item_quantity: document.getElementById('item_quantity').value,
      reorder_point: document.getElementById('reorder_point').value,
      reorder_store: document.getElementById('reorder_store').value,
      reorder_link: document.getElementById('reorder_link').value,
      order_quantity: document.getElementById('order_quantity').value
    };
  };

  this.write = function(data) {
    document.getElementById('item_id').value = data.item_id;
    document.getElementById('item_name').value = data.item_name;
    document.getElementById('item_quantity').value = data.item_quantity;
    document.getElementById('reorder_point').value = data.reorder_point;
    document.getElementById('reorder_store').value = data.reorder_store;
    document.getElementById('reorder_link').value = data.reorder_link;
    
    let script = 'Order';
    if(data.reorder_link) {
      script += ` <a target="_blank" href="${data.reorder_link}">online</a> or`;
    }
    script += ' in store';
    if(data.reorder_store) {
      script += ` at ${data.reorder_store}`;
    }
    script += '.';
    document.getElementById('order_script').innerHTML = script;
    document.getElementById('order_quantity').value = data.order_quantity;
  };

  this.delete = function() {
    document.getElementById('item_id').value = '';
    document.getElementById('item_name').value = '';
    document.getElementById('item_quantity').value = '';
    document.getElementById('reorder_point').value = '';
    document.getElementById('reorder_store').value = '';
    document.getElementById('reorder_link').value = '';

    document.getElementById('order_script').innerHTML = '';
    document.getElementById('order_quantity').value = '';
  };
}