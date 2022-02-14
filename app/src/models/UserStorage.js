"use strict";

class UserStorage {
    static #users = {                        // 변수에 static을 붙여줘야 class에서 변수로 접근 가능
        id: ["newstep", "miero", "김팀장"],
        psword: ["1234","1234","123456"],
        name: ["뉴스텝","미에로","김팀장"],
    };
    
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{ // newUsers 초기값은 마음대로 지정할 수 있다
            if(users.hasOwnProperty(field)){        // users에 해당하는 키 값이 있느냐
                newUsers[field] = users[field];
            };
            return newUsers;    // return 되는 newUsers가 다음 값으로 들어가게 된다
        },{}); // 배열의 메서드 순환하면서 하나씩 반환 // {} 초기값으로 빈 오브젝트
        // console.log(newUsers);
        return newUsers;
    }
};

module.exports = UserStorage;