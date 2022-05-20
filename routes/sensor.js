const express = require("express");
const router = express.Router();

const sensorController = require("../controllers/sensorController");

//get all data
//http://localhost:8000/sensor
router.get("/1/filter/:Count", sensorController.getByCount);
router.get("/1/get/all", sensorController.getAll)

module.exports = router;
