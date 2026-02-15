const express = require('express');
const connectedToDb = require('./config/database');
const authRouter = require('./router/user.auth');
const cookie = require ('cookieparser')


const app = express();
app.use(express.json());
app.use("/api/auth/",authRouter);
app.use(cookie())

app.get('/',async(req,res)=>{
    res.send("hiiii")
})
connectedToDb()


module.exports=app
