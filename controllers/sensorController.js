const Sensor = require("../models/sensorModel");

exports.getByCount = async (req, res, next) => {
  
  const {Count} = req.params;

  const sensor = await Sensor.find().sort({ _id: -1 }).limit(parseInt(Count)).select({id: 1, name: 1, wifiName: 1, sensor: 1, last_update: 1, coordinates: 1});

  res.status(200).json({
    station_1: sensor
  });
};

exports.getAll = async (req, res, next) => {
  const sensor = await Sensor.find().sort({ _id: -1 });

  res.status(200).json(sensor)
}