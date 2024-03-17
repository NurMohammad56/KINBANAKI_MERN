const express = require("express");
const router = require("./src/route/api")
const app = new express();
const bodyParser = require("body-parser")
const cookie = require('cookie-parser')
const JWT = require('jsonwebtoken')

// Security middleware 
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const xss  = require("xss-clean");


// Database
const mongoose = require("mongoose");




// all security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());


// Body-parser
app.use(bodyParser.json());
app.use(cookie())



// Rate limit
const limit = rateLimit({
    windoMs: 15*60*100,
    max:3000
})
app.use(limit)



// Database Connection
let mongoURI = 'mongodb+srv://E-Commerce:E-Commerce@e-commerce.e53krif.mongodb.net/E-Commerce';
// let OPTION = {user:"CRUD", pass:"CRUD", autoIndex:true};

mongoose.connect(mongoURI)
    .then( ()=>
        console.log("Connected to mongo Successful")
    )



// Managing FrontEnd Api
// app.use(express.static("client/dist"))
// app.get('*',function (req,res) {
//     res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
// })





// Managing BackEnd Api 
app.use("/api/v1", router);


module.exports=app;