const express = require("express");
const router = express.Router();
//insert model
const Merch = require("../Models/MerchModel");
//insert controller
const MerchContrller = require("../Controllers/MerchController");


//get all data
router.get("/", MerchContrller.getAllMerch);

//add data
router.post("/", MerchContrller.addMerch);

//get by id
router.get("/:id", MerchContrller.getById);

//update data
router.put("/:id", MerchContrller.updateMerch);

//delete data   
router.delete("/:id", MerchContrller.deleteMerch);  



//export router
module.exports = router;

