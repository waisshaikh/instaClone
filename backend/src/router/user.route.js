const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const userController = require('../controller/user.controller')

const userRoute = express.Router();


userRoute.post('/follow/:username',identifyUser,userController.followerController);

userRoute.post('/unfollow/:username',identifyUser,userController.unfollowController)






module.exports=userRoute
