'use strict'; //ecma script 준수하겠다

// 모듈
const express = require("express");
const app = express();

// port를 위로 빼자
const PORT = 3000;

// 라우팅
const home = require("./routes/home"); // index.js

// 앱 세팅
app.set("views", "./views"); // views폴더 위치
app.set("view engine", "ejs"); // view 엔진을 ejs 사용 - HTML과 비슷

app.use("/",home);  // use → 미들 웨어를 등록해주는 메서드.

// 서버 가동 부분 bin\www.js 별도 파일 만듬

module.exports = app; // 외부파일에서 사용할 수 있도록 보내기