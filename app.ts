import express from "express";
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}`));
const port = 3000;
console.log(path.resolve(`${__dirname}/index.html`));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "", "index.html"));
});
app.post("/forms", (req, res) => {
  res.status(200).json({
    status: "succes",
    body: req.body,
  });
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
