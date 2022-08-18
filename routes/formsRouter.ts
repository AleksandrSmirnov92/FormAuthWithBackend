import express from "express";
const path = require("path");
const fs = require("fs");
const Router = express.Router();
const toursJson = JSON.parse(
  fs.readFileSync(`${path.join(__dirname, "../../dev-data", "/AuthUser.json")}`)
);
//  функции
const getForms = (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, "../", "index_forms.html"));
  console.log(req.cookies);

  req.session.isAuth = true;
  console.log(req.session);
  console.log(req.session.id);
};
//  //////////////////////////////////////////////////////////////
const postForms = (req: any, res: any) => {
  if (req.body.Login && req.body.Password && req.body.Repeat_password) {
    const newObg = Object.assign({ id: Math.random() }, req.body);
    toursJson.push(newObg);
    for (let item of toursJson) {
      if (item.Login === req.body.Login) {
        const name = "такой пользователь уже существует ";
        return res.status(400).json({
          status: "error",
          message: "Такой пользователь уже существует",
        });
        //Нужно добавить редирект на страничку регистрации
      } else {
        const newname: any = "Мы создали нового пользователя";
        return res.send(JSON.stringify(newname));
        // fs.writeFile(
        //   `${path.join(__dirname, "../../dev-data", "/AuthUser.json")}`,
        //   JSON.stringify(toursJson),
        //   (err: Error) => {
        //     res
        //       .status(201)
        //       .cookie("username", req.body.Login, { secure: true })
        //       .json({
        //         status: "success",
        //         body: { УСПЕШНО: toursJson },
        //       });
        //   }
        // );
      }
    }
  }
  //  else
  //   [
  //     res.status(404).json({
  //       status: "error",
  //       body: "Ошибка форма не до конца заполнена",
  //     }),
  //   ];
};
//  ///////////////////////////////////////////////////////////////////
Router.route("/forms").get(getForms).post(postForms);
module.exports = Router;
