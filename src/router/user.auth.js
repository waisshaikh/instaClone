const express = require ('express');
const userModel = require('../models/user.model');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require ('cookieparser')


const authRouter = express.Router();

authRouter.post("/register",async(req,res)=>{
    const{username,email,password,bio,profilePicture}=req.body
    const isUserExist =await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    });

    if(isUserExist){
        return res.status(409).json({
            message:"User Alredy exist"+(isUserExist.username?"with this username":"with this email")
        });
    }

    const haspassword  = await bcrypt.hash(password,10);

    const user =await  userModel.create({
        username,
        email,
        password:haspassword,
        bio,
        profilePicture
    });

    const jwt_token = jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET,{expiresIn:'id'}
);

res.cookie("jwt", jwt_token)

res.status(201).json({
    message:"User created Sucsessfully",
    user,
    jwt_token
    
})

});

module.exports = authRouter