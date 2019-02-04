const express = require('express');
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('database.db');
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS inventory (
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
  db.run(`INSERT OR REPLACE INTO inventory (
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
app.use(express.json());

app.get('/items', (req, res) => {
  db.all('SELECT item_id, item_name, item_quantity FROM inventory', (err, rows) => {
    res.json(rows);
  })
});

app.post('/items', (req, res) => {
  db.run(`INSERT INTO inventory (
    item_name,
    item_quantity
  ) VALUES (
    $item_name,
    $item_quantity
  )`, {
    $item_name: req.body.item_name,
    $item_quantity: req.body.item_quantity
  }, (err) => {
    res.status(200).end();
  });
  // SELECT last_insert_rowid()
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});