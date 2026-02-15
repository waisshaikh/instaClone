const mongoose = require('mongoose');

function connectedToDb(){
     mongoose.connect(process.env.MONGO_URL)
     console.log("Connected to databse");
     

}

module.exports=connectedToDb
