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
    timestamp: true,
    collection: "chart",
  }
);

// // Duplicate the ID field.
// Schema.virtual('id').get(function(){
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// Schema.set('toJSON', {
//   virtuals: true
// });

const chart = mongoose.model("Chart", schema);

module.exports = chart;
