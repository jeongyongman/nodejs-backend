"use strict"; //ecma script 준수하겠다

const express = require("express");
const router = express.Router(); // 라우터를 사용할려면 express의 Router를 불러와주어야 한다

const ctrl = require("./home.ctrl");
// app.js 라우팅 부분 잘라오기
// app.get("/",(req,res)=>{
    //     res.render("home/index");
    // });
    
    // app.get("/login",(req,res)=>{
        //     res.render("home/login");
// });

router.get("/",ctrl.ctrlindex);

router.get("/login",ctrl.ctrllogin);

module.exports = router; // 외부파일에서 사용할 수 있도록 보내기