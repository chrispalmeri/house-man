const express = require('express');
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('database.db');
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS items (
    item_id INTEGER PRIMARY KEY,
    item_name TEXT,
    item_quantity INTEGER,
    reorder_point INTEGER,
    reorder_store TEXT,
    reorder_link TEXT,
    order_date TEXT,
    order_quantity INTEGER,
    order_count INTEGER
  )`);
  db.run(`INSERT OR REPLACE INTO items(
    item_id,
    item_name,
    item_quantity
  ) VALUES (
    "1",
    "Test Item",
    "3"
  )`);
});

let app = express();
app.use(express.static('www'));

app.get('/items', (req, res) => {
  db.all('SELECT item_id, item_name, item_quantity FROM items', (err, rows) => {
    res.json(rows);
  })
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});