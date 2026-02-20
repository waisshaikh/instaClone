const express = require('express');
const connectedToDb = require('./config/database');
const authRouter = require('./router/user.auth');
const cookieParser = require('cookie-parser');
const postRouter = require('./router/post')
const userRoute = require('./router/user.route')
const cors = require('cors')

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({credentials:true,
    origin:"http://localhost:5173"
}))

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/users",userRoute)


app.get('/', (req, res) => {
    res.send("hiiii");
});

connectedToDb();

module.exports = app;
