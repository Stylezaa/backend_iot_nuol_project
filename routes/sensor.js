const express = require("express");
const router = express.Router();

const sensorController = require("../controllers/sensorController");

//get all data
//http://localhost:8000/sensor
router.get("/1/", sensorController.index_1);
router.get("/1/all", sensorController.getAll_1)
// router.get("/map", sensorController.map);

module.exports = router;
