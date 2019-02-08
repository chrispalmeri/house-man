// src/dialog.js

export default new function() {
  this.open = function(el) {
    var dialog = document.getElementById(el);
    var mask = document.createElement('div');
    mask.className = 'modal';

    dialog.style.display = 'block';
    mask.appendChild(dialog);

    document.body.appendChild(mask);
  };

  this.close = function(el) {
    var dialog = document.getElementById(el);
    var mask = dialog.parentElement;

    document.body.appendChild(dialog);
    dialog.style.display = 'none';

    document.body.removeChild(mask)
  }
}