const mongoose = require("mongoose");

async function connectionToMongoDB(url){
    const connect =  await mongoose.connect(url).then(()=>{
        console.log("connected!!!")
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = {connectionToMongoDB};
