const Sensor = require("../models/sensorModel");

exports.index = async (req, res, next) => {
  // const sensor = await Sensor.find().sort({ _id: -1 }).limit(1); //get last 5 record
  const map = await Sensor.find().sort({ _id: -1 }).limit(1); //get all record
  // console.log(sensor);

  res.status(200).json({
    data: map,
  });
};