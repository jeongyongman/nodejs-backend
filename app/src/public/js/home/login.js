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
    loginBtn = document.querySelector("#button");

// console.log(id);
// console.log("hello");

loginBtn.addEventListener("click",login); // 두 번째 인수는 함수이다

function login(){
    // console.log("bye");
    // console.log(id.value);
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (!psword.value)
      return alert("비밀번호를 입력해주십시오.");
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // console.log(req); // 일반 req 리퀘스트 데이터와
    // console.log(JSON.stringify(req)); // JSON 형태로 감싼 req 리퀘스트 데이터 비교해 보자
    fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 내가 전달하는 데이터의 타입
        },
        body: JSON.stringify(req),
      })
      .then((res) => res.json())        // ← 이 부분 수정하고
      .then((res) => {				// ← 여기 부분
        if(res.success){                                   // 개발하기쉽게 임시로 주석처리 20
          location.href = "/";		// 이동할 링크           // 개발하기쉽게 임시로 주석처리 20
        } else {
          if (res.err) return alert(res.err);
          alert(res.msg);				// 서버에서 전달한 메시지// 개발하기쉽게 임시로 주석처리 20
        }                                                // 개발하기쉽게 임시로 주석처리 20
      })
      .catch((err) => {
        console.error("로그인 중 에러 발생");
        // console.error(new Error("로그인 중 에러 발생"));
      });
};