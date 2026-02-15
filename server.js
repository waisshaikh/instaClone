require('dotenv').config();
const app = require('./src/app');


app.listen(3000,()=>{
    console.log("servr is running on port number 3000");
    
})