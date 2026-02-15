const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        // unique:[true,"User already registerd with this Username"],
        
    },
    email:{
        type:String,
        unique:[true, "Already exist with this email id"]
    },
    password:String,
    bio:String,
    profilePicture:{
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
    }
});

const userModel = mongoose.model('data',userSchema);

module.exports=userModel;