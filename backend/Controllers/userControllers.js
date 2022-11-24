const asyncHandler =require('express-async-handler')

//@desc register a new user
//@route POST /api/users
//@access public
const registrUser=asyncHandler( async (req,res)=>{
    if(true)
    res.json(req.body.name)
    else{
        throw new Error("not found")
    }
    
 
 })
 
 //@desc login with existing user
//@route POST /api/users/login
//@access publice
const loginUser=asyncHandler( async (req,res)=>{
    if(false)
    res.json(req.body.name)
    else{
        throw new Error("not found")
    }
    
 
 })

module.exports={
    registrUser,
    loginUser
}
