    // require('dotenv').config({path: './.env'});
    const bodyParser = require('body-parser');


const express = require("express");
const app = express();
const urlRoute = require('./routes/url.route.js')
const {connectionToMongoDB} = require("./connect.js")
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectionToMongoDB("mongodb+srv://ayush:ayush123@cluster0.9h4qgcg.mongodb.net/piyush");

const urlModel =  require('./model/url.model.js')

app.use("/",urlRoute);


app.listen(8181,()=>{
    console.log(`Server is started at Port http://localhost:${process.env.PORT} `);
})