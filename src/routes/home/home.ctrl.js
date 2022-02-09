"use strict";

const ctrlindex = (req,res)=>{
    res.render("home/index"); // views\home
};

const ctrllogin = (req,res)=>{
    res.render("home/login"); // views\home
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    ctrlindex,
    ctrllogin,
};