const express = require('express');

let app = express();
app.use(express.static('www'));

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});