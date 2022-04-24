const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    pH: { type: Number },
    DO: { type: Number },
    EC: { type: Number },
    lastupdate: { type: Date, default: Date.now },
  },
  {
    // timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    collection: "sensordata",
  }
);

const sensor = mongoose.model("Sensordata", schema);

module.exports = sensor;
