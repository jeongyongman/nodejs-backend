"use strict";

const ctrloutput = {
    ctrlindex: (req,res)=>{
        res.render("home/index"); // views\home
    },
    
    ctrllogin: (req,res)=>{
        res.render("home/login"); // views\home
    },
}

const users = {
    id: ["newstep", "miero", "김팀장"], // ← 서버 대신 데이터 가지고 테스트
    psword: ["1234","1234","123456"],
};

const ctrlprocess = {
    ctrllogin: (req,res)=>{
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {			// id, psword 검증 해주자
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    ctrloutput,
    ctrlprocess,
};