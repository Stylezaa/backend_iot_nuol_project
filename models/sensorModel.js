const mongoose = require("mongoose");
const { Schema } = mongoose;
var id = mongoose.Types.ObjectId();

const schema = new Schema(
  {
    sensor: {
      pH: { type: Number },
      DO: { type: Number },
      EC: { type: Number },
    },
    name: { type: String },
    wifiName: { type: String },
    coordinates: { 
      latitude: { type: String },
      longitude: { type: String },
    },
    last_update: { type: Date, default: Date.now },
  },
  {
    toJSON: {virtuals: true},   
    timestamp: true,
    collection: "sensor_1",
  }
);

const sensor = mongoose.model("Sensor", schema);

module.exports = sensor;
