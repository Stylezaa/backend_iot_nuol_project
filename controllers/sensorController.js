const Sensor = require("../models/sensorModel_1");

exports.index_1 = async (req, res, next) => {
  // const sensor = await Sensor.find().sort({ _id: -1 }).limit(1); //get last 5 record
  const sensor = await Sensor.find().sort({ _id: -1 }).limit(15); //get all record
  // console.log(sensor);

  res.status(200).json(sensor);
};

exports.getAll_1 = async (req, res, next) => {
  const sensorList = await Sensor.find().sort({ _id: -1 });

  res.status(200).json(sensorList)
}