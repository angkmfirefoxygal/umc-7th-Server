import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import mysql from "mysql2/promise"; // pool 및 db 사용 시 필요한 import 문
import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleStoreUpload } from "./controllers/store.controller.js";
import { handleReviewUpload } from "./controllers/review.controller.js";



dotenv.config();

const app = express();
const port = process.env.PORT;
// pool 사용 전 미리 pool 선언! 순서 중요함. 
const pool = mysql.createPool({ //user 를 root 로 적용해야함.
  host: "localhost",
  user: "root",
  password: "rose8511@!",
  database: "umc-7th-db",
});



app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석
app.set("pool", pool)




app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 1 - user uploading api
app.post("/api/v1/users/signup", handleUserSignUp);
// 2 - store uploading api
app.post("/api/regions/:region_id/stores", handleStoreUpload);
// 3 - review uploding for store api
app.post("/api/v1/reviews", handleReviewUpload);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});







