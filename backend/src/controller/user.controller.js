const followModel = require ('../models/follow.model');
const userModel = require('../models/user.model')

async function followerController (req,res){
    const follwerUsername = req.user.username
    const follweeUsername = req.params.username

    if(follwerUsername===follweeUsername){
         return res.status(400).json({
            message:"You cannt follow your self"
         })
    }

    const isFolloweeExist = await userModel.findOne({
        username:follweeUsername
    });

    if(!isFolloweeExist){
        return res.status(404).json({
            message:"youre trying to follow not exist user"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower:follwerUsername,
        followee:follweeUsername
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:"you alredy follow this user",
            follow:isAlreadyFollowing
        })
    }

    const followerRecord = await followModel.create({
        follower: follwerUsername ,
        followee:follweeUsername
        
    })

    res.status(201).json({
        message:`you are now following ${follweeUsername}`,
        follow: followerRecord
    })
    
}


async function unfollowController (req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername,

    })

    if(!isUserFollowing){
        return res.status(200).json({
            message:`You are not following ${followeeUsername}`  
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message:`you have unfollowed ${followeeUsername }`
    })

}

module.exports = {
  followerController,
  unfollowController
};
