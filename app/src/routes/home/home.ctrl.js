"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");    // 컨트롤러는 유저스토리지에 접근하지 않는다 지워주자

const ctrloutput = {    // get 메서드에 해당
    ctrlindex: (req,res)=>{
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index"); // views\home
    },
    
    ctrllogin: (req,res)=>{
        logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("home/login"); // views\home
    },
    
    register: (req,res)=>{
        logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
        res.render("home/register"); // views\home
    },
};

const ctrlprocess = {
    ctrllogin: async (req,res)=>{
        const user = new User(req.body); // app>src>models>User.js의 constructor(body)로 들어온다 // 인스턴스를 만들면
        const response = await user.login();

        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
    register: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.register(); // ←
        // console.log(response);
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409 : 201,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    ctrloutput,
    ctrlprocess,
};

const log = (response, url) => {
    if (response.err) {
        logger.error(
            // `POST / 200 Response: ${response.success}, ${response.err}"`
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        );
    }
};