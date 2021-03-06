"use strict"; //ecma script 준수하겠다

const express = require("express");
const router = express.Router(); // 라우터를 사용할려면 express의 Router를 불러와주어야 한다

const ctrl = require("./home.ctrl");

router.get("/",ctrl.ctrloutput.ctrlindex);
router.get("/login",ctrl.ctrloutput.ctrllogin); // 아랫줄 post 추가해서 login 중복이 발생
router.get("/register",ctrl.ctrloutput.register); // 아랫줄 post 추가해서 login 중복이 발생

router.post("/login",ctrl.ctrlprocess.ctrllogin); // post 추가 // process로 수정 // ← error catch 일부러 주석처리
router.post("/register",ctrl.ctrlprocess.register); // 

module.exports = router; // 외부파일에서 사용할 수 있도록 보내기