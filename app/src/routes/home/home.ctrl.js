"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");    // 컨트롤러는 유저스토리지에 접근하지 않는다 지워주자

const ctrloutput = {    // get 메서드에 해당
    ctrlindex: (req,res)=>{
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index"); // views\home
    },
    
    ctrllogin: (req,res)=>{
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login"); // views\home
    },
    
    register: (req,res)=>{
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/register"); // views\home
    },
};

// const users = {
//     id: ["newstep", "miero", "김팀장"],
//     psword: ["1234","1234","123456"],
// };

const ctrlprocess = {
    ctrllogin: async (req,res)=>{
        const user = new User(req.body); // app>src>models>User.js의 constructor(body)로 들어온다 // 인스턴스를 만들면
        const response = await user.login();
        if (response.err) 
            logger.error(
                `POST / 200 Response: "success: ${response.success}, ${response.err}"`
            );
        else
        // console.log(response);
            logger.info(
                `POST / 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        return res.json(response);
    },
    register: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.register(); // ←
        // console.log(response);
        if (response.err) 
            logger.error(
                `POST / 200 Response: "success: ${response.success}, ${response.err}"`
            );
        else
            logger.info(
                `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        return res.json(response);
    },
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    ctrloutput,
    ctrlprocess,
};