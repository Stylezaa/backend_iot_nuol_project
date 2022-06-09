const express = require("express");
const router = express.Router();

const chartController = require("../controllers/chartController");

//get all data
//http://localhost:8000/sensor
router.get("/1/filter/:Count", chartController.getByCount);
router.get("/1/get/all", chartController.getAll)
// router.get("/map", sensorController.map);

module.exports = router;