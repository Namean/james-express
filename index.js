const express = require("express");
const app = express();
const port = 3000;

// HTTP VERBS
// GET, POST, PUT, DELETE,

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

const person = {
  name: "John",
  age: 42,
  address: "115 e tremont dr.",
};

app.get("/data", (req, res) => {
  res.json(person);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
