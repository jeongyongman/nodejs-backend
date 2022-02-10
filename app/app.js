'use strict'; //ecma script 준수하겠다

// 모듈
const express = require("express");
const bodyParser = require("body-parser"); // ← 추가
const app = express();

// port를 위로 빼자
const PORT = 3000;

// 라우팅
const home = require("./src/routes/home"); // index.js // routes폴더가 src폴더 안에 있다

// 앱 세팅
app.set("views", "./src/views"); // views폴더 위치 // views폴더가 src폴더 안에 있다
app.set("view engine", "ejs"); // view 엔진을 ejs 사용 - HTML과 비슷
app.use(express.static(`${__dirname}/src/public`)); // 현재 디렉토리 네임을 가져와서 /src/public폴더로 만들어주자
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",home);  // use → 미들 웨어를 등록해주는 메서드.

// 서버 가동 부분 bin\www.js 별도 파일 만듬

module.exports = app; // 외부파일에서 사용할 수 있도록 보내기