import express from "express";
import { json } from "stream/consumers";
const path = require("path");
const session = require("express-session");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}`));
app.use(
  session({
    secret: "key for our cookies ",
    resave: false,
    saveUninitialized: false,
  })
);
const port = 3000;
console.log(path.resolve(`${__dirname}/index.html`));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "", "index.html"));
});
app.get("/forms", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, "", "index_forms.html"));
});
app.post("/forms", (req: any, res) => {
  let b = req.body;
  console.log(b);
  let { Login, Password, Repeat_password, Email } = req.body;

  res.status(200).json({
    status: "succes",
    body: { УСПЕШНО: req.body },
  });
});
app.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
