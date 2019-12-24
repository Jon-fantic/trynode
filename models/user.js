const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  "userId":String,
  "userName":String,
  "userPwd":String,
  "phone":Number
})
module.exports = mongoose.model("user",userSchema)