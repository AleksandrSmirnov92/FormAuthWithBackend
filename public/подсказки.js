"use strict";
/**
 Cookies-parser - анализирует cookies файлы прикрепленные к обьекту запроса и помещает их в req.cookie
 npm i cookies-parser
 res.cookie("имя": значение;)
  
 
npm express-sessions
app.use(sessions({})) - принимает обьект с несколькими параметрами :
1 параметр - secret (это ключь который подписывает файл cooke)
2 параметр - resave (означает что каждый раз когдма мы делаем запрос к серверу он будет создать новый cookie) false если мы этого не хотим true если хотим
3 параметр - saveUninitialized (означет если мы не коснулись или не изменили сеанс то мы не хотим его сохронять)
после этого нам доступны console.log(req.session)
Session {
  cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
}
req.session.isAuth = true; - меняет значение saveUninitialezed на true сохроняет его в браузере
console.log(req.session.id)



































































 */
