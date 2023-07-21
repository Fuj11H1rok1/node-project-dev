const express = require("express");
const router = express.Router();

router.get("/", mylogger, (req, res) => {
  res.send("ユーザーページ");
});

router.get("/info", (req, res) => {
  res.send("ユーザー情報ページ");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました。`);
});

router.post("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました。`);
});

router.delete("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました。`);
});

// ミドルウェア
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
};

module.exports = router;
