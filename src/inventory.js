// src/canvas.js

export default new function() {
  this.load = function() {
    fetch('/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });
  }
}