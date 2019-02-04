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
      console.log(json);
    });
  }
}