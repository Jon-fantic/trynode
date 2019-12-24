const express = require("express");
const http = require("http");
const app = express();
const router = express.Router();
const user = require("./routers/user");
const mongoose = require("mongoose");
const fs = require("fs")
var ws = require("ws");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
// app.use('/', function (req, res, next) {
//   res.send("eeeee")
// });

mongoose.connect('mongodb://127.0.0.1:27017/user',{useUnifiedTopology: true,useNewUrlParser: true});
const db = mongoose.connection
db.once("open", function () {
    console.log("数据库连接成功");
})
db.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.on('disconnected', function () {
    console.log('数据库连接断开');
})

/* GET Home page. */
app.use("/api/user",user)

const server1 = http.createServer(app)
server1.listen(3001);
// 