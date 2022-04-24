const express = require("express");
const router = express.Router();

const mapController = require("../controllers/mapController");

//get all data
//http://localhost:8000/sensor
router.get("/", mapController.index);

module.exports = router;
