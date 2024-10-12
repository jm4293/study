const express = require("express");
// const path = require("path");

const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/study/:page", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("study");
});

app.get("/html", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
