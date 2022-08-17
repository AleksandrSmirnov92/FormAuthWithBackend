import express from "express";
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");

const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}`));
app.use(cookieParser());
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
  console.log(req.cookies);
});
app.post("/forms", (req: any, res) => {
  if (req.body.Login && req.body.Password && req.body.Repeat_password) {
    res
      .status(200)
      .cookie("username", req.body.Login, { secure: true })
      .json({
        status: "success",
        body: { УСПЕШНО: req.body },
      });
  } else
    [
      res.status(404).json({
        status: "error",
        body: "Ошибка",
      }),
    ];
});
app.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
