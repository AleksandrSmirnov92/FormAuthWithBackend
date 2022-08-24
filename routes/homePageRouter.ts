import express from "express";
const path = require("path");
const Router = express.Router();
const fs = require("fs");

const authUser = JSON.parse(
  fs.readFileSync(`${path.join(__dirname, "../../dev-data", "/AuthUser.json")}`)
);

const getHomePage = (req: any, res: any) => {
  // if (req.session.authenticated) {
  return res.sendFile(path.resolve(__dirname, "../", "index_forms.html"));
  // res.redirect("/forms");
  // }
  // return res.redirect("/forms");
};
const postHomePage = (req: any, res: any) => {
  if (
    req.body.state.Login &&
    req.body.state.Password &&
    req.body.state.Repeat_password
  ) {
    const newObg = Object.assign({ id: Math.random() }, req.body);
    authUser.push(newObg);
    for (let item of authUser) {
      if (item.Login === req.body.state.Login) {
        return res.status(400).json({
          status: "error",
          message: "Такой пользователь уже существует",
        });
        // Нужно добавить редирект на страничку регистрации
      } else {
        return res
          .status(200)
          .cookie("username", req.body.state.Login)
          .json({
            status: "success",
            body: { УСПЕШНО: authUser },
          });
      }
      //       fs.writeFile(
      //         `${path.join(__dirname, "../../dev-data", "/AuthUser.json")}`,
      //         JSON.stringify(authUser),
      //         (err: Error) => {
      //           res
      //             .status(201)
      //             .cookie("username", req.body.Login, { secure: true })
      //             .json({
      //               status: "success",
      //               body: { УСПЕШНО: authUser },
      //             });
      //         }
      //       );
      //     }
      // else {
      //   req.session.authenticated = true;
      //   req.session.user = {
      //     login: req.body.Login,
      //   };
      //   return res.json(req.session);
      // Если сессия не существует то этот ответ
      // }
    }
  }
};
//   }
// };
//  else
//   [
//     res.status(404).json({
//       status: "error",
//       body: "Ошибка форма не до конца заполнена",
//     }),
//   ];
// };

Router.route("/home").get(getHomePage).post(postHomePage);
module.exports = Router;
