const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors())
const db  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  port            : '3306',
  user            : 'root',
  password        : '21082',
  database        : 'kjmdplants'
});

app.get('/', (req, res) => {
  db.query("INSERT INTO users (username, password) VALUES ('Testing', '123')", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
    }
  })
})

app.listen(8080, () => {
  console.log('server listening on port 8080');
})