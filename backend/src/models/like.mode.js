const mongoose = require ('mongoose');
const { applyTimestamps } = require('./follow.model');

const likeSchema = new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:[true,"required"]
    },
    user:{
        type:String
    },
    
},{timestamps:true});

likeSchema.index({postId:1,user:1},{unique:true});

const likeModel = mongoose.model("like",likeSchema);

module.exports=likeModel