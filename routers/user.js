const express = require("express");
const router = express.Router();
const User = require('../models/user');

router.get("/userinfo",async (req,res)=>{
  console.log(req.query);
  // let {username,userpsd} = req;
  res.status(200).json("heheh")
})
router.post("/register",async (req,res)=>{
  const {userName, userPwd} = req.body
  let doc = await User.findOne({userName})
  try {
    if(doc){
      res.status(200).json({
        code:"0",
        msg:"用户名已存在",
        data:null
      })
    }else{
      let r1 = Math.floor(Math.random() * 10);
      let r2 = Math.floor(Math.random() * 10);
      let userId = `${r1}${(Date.parse(new Date())) / 1000}${r2}`;
      User.insertMany({
        userName,
        userPwd,
        userId
      })
      res.status(200).json({
        code: '1',
        msg: '注册成功',
        data: null
      })
    }
  } catch (error) {
    console.log(error)
  } 
 
})
router.post("/login",async (req,res)=>{
  const {userName, userPwd} = req.body
  let doc = await User.findOne({userName,userPwd})
  try {
    if(!doc){
      res.status(200).json({
        code:"0",
        msg:"用户名或密码错误",
        data:null
      })
    }else{
      res.status(200).json({
        code:"1",
        msg:"登录成功",
        data:null
      })
    }
  } catch (error) {
    console.log(error)
  } 
})
router.post("/changePwd",async (req,res)=>{
  const {userName, userPwd} = req.body
  let doc = await User.updateMany({userName},{
    $set:{userPwd} 
  },(err)=>{
    if(err){
      res.json({
        code:"0",
        msg:err.message,
        data:null
      })
    }
    res.json({
      code:"1",
      msg:"修改成功",
      data:null
    })
  })
})
module.exports = router