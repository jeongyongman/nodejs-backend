"use strict";

const UserStorage = require("../../models/UserStorage");

const ctrloutput = {
    ctrlindex: (req,res)=>{
        res.render("home/index"); // views\home
    },
    
    ctrllogin: (req,res)=>{
        res.render("home/login"); // views\home
    },
};

// const users = {
//     id: ["newstep", "miero", "김팀장"],
//     psword: ["1234","1234","123456"],
// };

const ctrlprocess = {
    ctrllogin: (req,res)=>{
        const id = req.body.id,
            psword = req.body.psword;
        
            const users = UserStorage.getUsers("id","psword");        // ← 이 부분 수정

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    ctrloutput,
    ctrlprocess,
};