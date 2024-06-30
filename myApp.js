let express = require("express");
let app = express();
// #1
console.log("Hello World");

// #2
app.get("/", (req, res) => {
  res.send("Hello Express1");
});

module.exports = app;
