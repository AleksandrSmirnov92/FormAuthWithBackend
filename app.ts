import express from "express";

const cookieParser = require("cookie-parser");
// const path = require("path");
const loginRouter = require("./routes/loginRouter");
const formsRouter = require("./routes/formsRouter");
const session = require("express-session");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}`));
app.use(cookieParser());
app.use(
  session({
    secret: "key that will sign our cookes",
    resave: false,
    saveUninitialized: false,
  })
);
const port = 3000;
app.use("/", formsRouter);
app.use("/", loginRouter);
app.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
