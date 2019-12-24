const express = require("express");
const http = require("http");
const app = express();
const user = require("./routers/user");
const mongoose = require("mongoose");
const chokidar = require('chokidar');
const fs = require("fs")
var ws = require("ws");
var net = require("net");
// One-liner for current directory, ignores .dotfiles
/* var ws = require("nodejs-websocket");
const broadcast = (server, info) => {
  console.log(server)
  
}
const createServer = () => {
  let server = ws.createServer(connection => {
    connection.on('connect', function(code) {
      console.log('开启连接', code)
    })
    connection.on('close', function(code) {
      console.log('关闭连接', code)
    })
    connection.on('error', function(code) {
      // 某些情况如果客户端多次触发连接关闭，会导致connection.close()出现异常，这里try/catch一下
      try {
        connection.close()
      } catch (error) {
        console.log('close异常', error)
      }
      console.log('异常关闭', code)
    })
  }).listen(5566);
  server.on('close', () => {
  })
  return server
}
ws
const server = createServer() */
// var sock = new ws("ws://localhost:5566");
/* sock.on("open", function () {
  // sock.send("HelloWorld1");
});

sock.on("error", function(err) {
	console.log("error: ", err);
});

// sock.on("close", function() {
// 	console.log("close");
// });

sock.on("message", function(data) {

}); */
let isready = false;
chokidar.watch('E:\\test').on("ready", () => {
  isready = true;
})
.on("add", (path,e)=>{
  if(!isready){
    return
  }
  console.log(path)
  client.write(JSON.stringify({
    "type":0,
    "data":path
  }));
    // server.connections.forEach(function(conn) {
      // var sock = new ws("ws://localhost:5566");
      // sock.on("open", function () {
      //   // sock.send("HelloWorld1");
      //   sock.send(JSON.stringify(a))
      // });
      // conn.sendText(JSON.stringify(a))
    // })
})
.on("err", err => {
  console.log(err);
});



// mongoose.connect('mongodb://127.0.0.1:27017/user',{useUnifiedTopology: true,useNewUrlParser: true})
// app.use("/api/user",user)
// let i = 0;
// var dataBuffer = Buffer.from(base, "base64");
// setInterval(() =>{
//   fs.writeFile("E:\\test" + "\\" + ++i + ".jpg", dataBuffer, err=>{
//     if(err){
  
//     }
//   });
// },10000)
// let port = 8090;
// let host = "10.41.5.50"
// var socket = net.createConnection(port, host);

//     socket.on('error', function(error) {
//       console.log(err)
//       // send404(res, host, port);
//     })

//     socket.on('connect', function(connect) {

//       // socket.write(_post);
//       socket.on('end', function() {
//         console.log('socket closing...')
//       })
//     })
// let sendmsg = (con)=>{
//   console.log(con)
//   setTimeout(()=>{
//     con.write("OK")
//   },1000)
// }
// let obj = {
//   name:"dsadasdsadsa",
//   value:123123123,
//   ip:"10.12.31.32"
// }
const client = net.createConnection({port:5566}, () => {
  // 'connect' 监听器
  console.log('已连接到服务器');
  
});
client.on('data', (data) => {
  console.log(data.toString());

  // client.end();
});
client.on('end', () => {
  console.log('已从服务器断开');
});
// net.createServer((socket) => {
//   console.log('textClient connected');

//   socket.on('data', (data) => {
//       // console.log(`Socket textData: ${data.toString()}`);
//       sendmsg(socket)
//   });

//   socket.on('end', () => {
//       console.log('textClient disconnected');
//   });
// }).listen(5566, () => {
//   console.log('Socket server for text started on port 8081');
// });
const server1 = http.createServer(app)
server1.listen(3000);
// 