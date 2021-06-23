const express=require("express");
const clickCount=require("../controller/clickhandler.controller");
const route=express.Router();
route.get('/',clickCount.buttons);
route.post('/buttonClick',clickCount.incrementButton);
module.exports=route;