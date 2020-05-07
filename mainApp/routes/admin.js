const express = require('express');
const router = express.Router(); 
const adminService = require("../service/adminService");
router.post('/login',async function(req, res, next) {
    const admin = req.body;
  
    const data = await adminService.login(admin);
    res.send(data);
    
  });
  router.post('/register',async function(req, res, next) {
    const admin = req.body;
  
    const data = await adminService.register(admin);
    res.send(data);
    
  });
  module.exports=router