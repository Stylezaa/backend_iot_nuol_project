const mongoose = require("mongoose");
const { Schema } = mongoose;
var id = mongoose.Types.ObjectId();

const schema = new Schema(
  {
    name: { type: String },
    wifiName: { type: String },
    pH: { type: Number },
    DO: { type: Number },
    EC: { type: Number },
    latitude: { type: String },
    longitude: { type: String },
    last_update: { type: Date, default: Date.now },
  },
  {
    toJSON: {virtuals: true},   
    timestamps: true,
    collection: "station_status",
  }
);

const station = mongoose.model("Station", schema);

module.exports = station;