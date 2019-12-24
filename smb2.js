
const express = require("express");
const http = require("http");
const app = express();
var SMB2 = require('smb2');
var net = require('net');
console.log(net)
const fs = require("fs")
var smb2Client = new SMB2({
  share:'\\\\10.40.1.180\\pic'
, domain:'DOMAIN'
, username:'eladmin'
, password:'mesel123!'
});
var bf = fs.readFileSync('./3213.jpg')
smb2Client.readdir('TCZ\\TestForNPC', function(err, data){
  if(err) throw err;
  console.log(data);
})
fs.readdir("\\\\10.40.1.180\\pic\\TCZ\\TestForNPC",function(err,data){
  console.log(data)
  console.log(err)
})
let pic = fs.readFileSync("\\\\10.40.1.180\\pic\\TCZ\\TestForNPC\\1.jpg");
console.log(pic)

// smb2Client.mkdir('TCZ\\TestForNPC\\folder', function (err) {
//   if (err) throw err;
//   console.log('Folder created!');
// });
// smb2Client.writeFile('TCZ\\TestForNPC\\file.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });
// for(var i=1;i<=2;i++){
//   fs.writeFile("\\\\10.40.1.180\\pic\\TCZ\\TestForNPC\\"+i+".jpg",bf,err=>{
//     console.log(i)
//   })
// }
const server1 = http.createServer(app)
server1.listen(3000);