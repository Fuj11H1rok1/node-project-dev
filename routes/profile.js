const express = require("express");
// const app = express();
const router = express.Router();

// router.use(mylogger);

// var express = require('express');
// module.exports = router;
// app.set('view engine', 'ejs');

router.get("/", mylogger, (req, res) => {
  res.render("profile");
});
// 作品紹介へのルーティング
router.get("/works", (req, res) => {
  res.render("works");
});
// 学習紹介へのルーティング
router.get("/learningReview", (req, res) => {
  res.render("learningReview");
});
// 今後の目標へのルーティング
router.get("/futureGoals", (req, res) => {
  res.render("futureGoals");
});

// router.get("/:id", (req, res) => {
//   res.send(`${req.params.id}のユーザー情報を取得しました。`);
// });
// router.post("/:id", (req, res) => {
//   res.send(`${req.params.id}のユーザー情報を取得しました。`);
// });
// router.delete("/:id", (req, res) => {
//   res.send(`${req.params.id}のユーザー情報を取得しました。`);
// });

// ミドルウェア
function mylogger(req, res, next){
  console.log(req.originalUrl);
  next();
}

module.exports = router;