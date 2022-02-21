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
        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id);

        if(id){
            if ( id === client.id && psword === client.psword){
                return { success: true};
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디 입니다."};

    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;