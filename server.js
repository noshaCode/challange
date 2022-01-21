const express = require('express');
const mongoose =require("mongoose");
require('dotenv').config()

const router = require("./routes")
const app = express();
const databaseUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pwc4b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`


mongoose.connect(databaseUrl)
.then((result)=>{
    app.listen(4000, () => {
        console.log('Listening to port4000 ...');
    })
})
.catch((err)=>console.log(err));

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(router);
