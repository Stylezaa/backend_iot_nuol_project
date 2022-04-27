const express = require("express");
const router = express.Router();

const sensorController = require("../controllers/sensorController");

//get all data
//http://localhost:8000/sensor
router.get("/", sensorController.index);
router.get("/all", sensorController.getAll)
// router.get("/map", sensorController.map);

module.exports = router;
