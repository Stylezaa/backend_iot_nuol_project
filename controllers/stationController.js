const Station = require("../models/stationModel");

exports.getByCount = async (req, res, next) => {
  
  const {Count} = req.params;

  const station = await Station.find().sort({ _id: -1 }).limit(parseInt(Count));

  res.status(200).json({
    station_status: station
  });
};

exports.getAll = async (req, res, next) => {
  const station = await Station.find().sort({ _id: -1 });

  res.status(200).json(station)
}