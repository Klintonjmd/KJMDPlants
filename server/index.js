const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); //for parsing url encoded data from a form
app.use(bodyParser.json()); //parsing json data
app.use(cors());
const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  port: "3306",
  user: "root",
  password: "21082",
  database: "kjmdplants",
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ username: username }); //send this back so it can be used later
      }
    }
  );
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
