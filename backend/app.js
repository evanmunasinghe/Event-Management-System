//console.log("Welcome");
//pass- 8yiRgiHqyKltCgEx

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/MerchRoute");


const app = express();

//Middleware
app.use(express.json());
app.use("/merch", routes);



mongoose.connect("mongodb+srv://admin:yx5htkBmT1S84Qxp@cluster0.idqotjc.mongodb.net/")
.then(() => console.log("Database Connection Successfull !"))
.then(() => {
    app.listen(3000);
})
.catch((err) => console.log((err)));







