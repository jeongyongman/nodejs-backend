"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {         // 생성자
        this.body = body;
    }

    login(){
        // const { id, psword } = UserStorage.getUsers("id","psword");
        // const a = UserStorage.getUserInfo("miero");
        // console.log(a);
        // const { id, psword } = UserStorage.getUsers("miero");
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);

        if(id){
            if ( id === body.id && psword === body.psword){
                return { success: true};
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디 입니다."};

    }
}

module.exports = User;