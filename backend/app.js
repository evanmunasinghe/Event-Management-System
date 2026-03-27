//console.log("Welcome");
//pass- 8yiRgiHqyKltCgEx

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/MerchRoute");
const cors = require("cors");
const path = require("path");

const app = express();


//Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/merch", routes);

mongoose
  .connect("mongodb+srv://admin:yx5htkBmT1S84Qxp@cluster0.idqotjc.mongodb.net/")
  .then(() => console.log("Database Connection Successfull !"))
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
