'use strict'; //ecma script 준수하겠다

// 테스트하기위해서
// console.log("hello");
// console.log("bye");

// login 기능 구현 - 프론트 단 기능 구현
// 아이디와 비밀번호 입력 받고
// 로그인 버튼이 눌릴 때 server로 전달이 된다
// 아이디와 패스워드를 javascript로 처리해야 된다

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

// console.log(id);
// console.log("hello");

loginBtn.addEventListener("click",login); // 두 번째 인수는 함수이다

function login(){
    // console.log("bye");
    // console.log(id.value);
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
};