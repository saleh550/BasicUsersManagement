const express=require('express')
const router=express.Router()
const {registrUser,loginUser}=require('../Controllers/userControllers')

router.post('/',registrUser)

router.post('/login',loginUser)

module.exports=router
