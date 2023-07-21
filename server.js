const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const userRouter = require("./routes/user");
const profileRouter = require("./routes/profile");
const path =require("path");
// PORT を指定
const PORT = 3030;

app.get("/chat", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.sendFile(path.join(__dirname, "views", "chatApp.ejs"));
});
  
io.on("connection", (socket) => {
    console.log("ユーザーが接続しました");
});

app.use(express.static("views"));
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// ルーティング
app.use("/user", userRouter);
app.use("/profile", profileRouter);

server.listen(PORT, () => {
    console.log("サーバーが起動しました。");
});
// 他のミドルウェアの後にエラーハンドリングミドルウェアを追加（最後に配置する）
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
});