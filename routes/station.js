const express = require("express");
const router = express.Router();

const stationController = require("../controllers/stationController");

//get all data
//http://localhost:8000/sensor
router.get("/1/filter/:Count", stationController.getByCount);
router.get("/1/get/all", stationController.getAll)
// router.get("/map", sensorController.map);

module.exports = router;