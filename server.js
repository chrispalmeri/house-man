const express = require('express');
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('database.db');
db.run(`CREATE TABLE IF NOT EXISTS items (
  item_id INT,
  item_name TEXT,
  item_quantity INT,
  reorder_point INT,
  reorder_store TEXT,
  reorder_link TEXT,
  order_date TEXT,
  order_quantity INT,
  order_count INT
)`);

let app = express();
app.use(express.static('www'));

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});