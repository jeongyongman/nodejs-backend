"use strict";

const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");    // 컨트롤러는 유저스토리지에 접근하지 않는다 지워주자

const ctrloutput = {
    ctrlindex: (req,res)=>{
        res.render("home/index"); // views\home
    },
    
    ctrllogin: (req,res)=>{
        res.render("home/login"); // views\home
    },

    register: (req,res)=>{
        res.render("home/register"); // views\home
    },
};

// const users = {
//     id: ["newstep", "miero", "김팀장"],
//     psword: ["1234","1234","123456"],
// };

const ctrlprocess = {
    ctrllogin: (req,res)=>{
        const user = new User(req.body); // app>src>models>User.js의 constructor(body)로 들어온다 // 인스턴스를 만들면
        const response = user.login();
        // console.log(response);

        return res.json(response);
    },
    register: (req,res)=>{
        const user = new User(req.body);
        const response = user.register(); // ←
        // console.log(response);

        return res.json(response);
    }
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    ctrloutput,
    ctrlprocess,
};