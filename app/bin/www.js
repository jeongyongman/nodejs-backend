'use strict'; //ecma script 준수하겠다
// 이 www.js 파일에서는 app 이라는 부분을 찾을 수 없어서 연결해주자
const app = require("../app"); // 상위폴더에 있는 app.js
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000;

// app.js 서버 가동 부분 잘라서 가져오고
app.listen(PORT, ()=>{
    // console.log("서버 가동");
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});