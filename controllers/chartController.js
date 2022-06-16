const Chart = require("../models/chartModel");

//================================================================
//===================== For Barchart Data ========================
//================================================================
exports.getByCount = async (req, res, next) => {
  
  const {Count} = req.params;

  const chart = await Chart.find().sort({ _id: -1 }).limit(parseInt(Count));

  res.status(200).json({
    station_1: chart
  });
};

exports.getAll = async (req, res, next) => {
  const chart = await Chart.find().sort({ _id: -1 });

  res.status(200).json(chart)
}