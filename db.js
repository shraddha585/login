const mongoose=require('mongoose');
const url='mongodb://localhost:27017/login';
mongoose.connect(url);
const db=mongoose.connection;

db.on('connected',()=>{
 console.log("database connected");
})
db.on('error',(err)=>{
    console.log("error for connection");
})
db.on('disconnected',()=>{
    console.log("database disconnected");
})

module.exports=db;