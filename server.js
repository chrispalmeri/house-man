const express = require('express');
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('database.db');
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS main (
    id INTEGER PRIMARY KEY,
    name TEXT,
    interval INTEGER,
    category TEXT,
    date INTEGER,
    count INTEGER
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS inv (
    item_id INTEGER PRIMARY KEY,
    item_name TEXT,
    item_category TEXT,
    item_quantity INTEGER,
    reorder_point INTEGER,
    reorder_store TEXT,
    reorder_link TEXT,
    order_date INTEGER,
    order_quantity INTEGER,
    order_count INTEGER,
    order_interval INTEGER,
    order_pending INTEGER,
    inactive INTEGER,
    expire_date INTEGER,
    price REAL,
    cooler INTEGER,
    prefer_store INTEGER

  )`);
  db.run(`CREATE TABLE IF NOT EXISTS jan (
    id INTEGER PRIMARY KEY,
    name TEXT,
    interval INTEGER,
    category TEXT,
    date INTEGER,
    count INTEGER
  )`);
});

let app = express();
app.use(express.static('www'));
app.use(express.json());

app.get('/items', (req, res) => {
  db.all(`SELECT item_id, item_name, item_quantity FROM inventory
    ORDER BY item_quantity ASC`,
  (err, rows) => {
    res.json(rows);
  })
});

app.get('/items/:id', (req, res) => {
  db.all(`SELECT * FROM inventory WHERE item_id = "${req.params.id}"`, (err, rows) => {
    res.json(rows);
  })
});

app.post('/items', (req, res) => {
  db.run(`INSERT INTO inventory (
    item_name,
    item_quantity,
    reorder_point,
    reorder_store,
    reorder_link
  ) VALUES (
    "${req.body.item_name}",
    "${req.body.item_quantity}",
    "${req.body.reorder_point}",
    "${req.body.reorder_store}",
    "${req.body.reorder_link}"
  )`, (err) => {
    res.status(200).end();
  });
  // SELECT last_insert_rowid()
});

app.post('/items/:id', (req, res) => {
  let sql = 'UPDATE inventory SET ';
  for(key in req.body) {
    sql += `${key} = "${req.body[key]}", `;
  }
  sql = sql.replace(/,\s*$/, '');
  sql += ` WHERE item_id = "${req.params.id}"`;

  db.run(sql, (err) => {
    res.status(200).end();
  });
  // SELECT last_insert_rowid()
});

app.delete('/items/:id', (req, res) => {
  db.run(`DELETE FROM inventory WHERE item_id = "${req.params.id}"`, (err) => {
    res.status(200).end();
  });
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});