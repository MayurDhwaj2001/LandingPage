const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`hello word from server`);
});

app.get("/about", (req, res) => {
  res.send(`hello word from about`);
});

app.get("/contact", (req, res) => {
  res.send(`hello word from contact`);
});

app.get("/login", (req, res) => {
  res.send(`hello word from login`);
});

app.get("/register", (req, res) => {
  res.send(`hello word from register`);
});

app.listen(3000, () => {
  console.log(" ");
  console.log("Server is running at port 3000");
});
