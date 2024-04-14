const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

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

const saltRounds = 10;

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      res.status(500).send("Unable to hash password");
    } else {
      db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, hashedPassword],
        (err, result) => {
          if (err) {
            res.status(500).send("Unable to register user");
          } else {
            res.send({ username: username }); //send this back so it can be used later
          }
        }
      );
    }
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      res.status(501).send("Unable to hash password");
    } else {
      db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, hashedPassword],
        (err, result) => {
          if (err) {
            res.status(500).send("Login unsuccessful");
          } else {
            res.send({ username: username }); //send this back so it can be used later
            console.log("Logged in.");
          }
        }
      );
    }
  });
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
