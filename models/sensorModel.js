const mongoose = require("mongoose");
const { Schema } = mongoose;
var id = mongoose.Types.ObjectId();

const schema = new Schema(
  {
    pH: { type: Number },
    DO: { type: Number },
    EC: { type: Number },
    lastupdate: { type: Date, default: Date.now },
  },
  {
    toJSON: {virtuals: true},
    timestamps: true,
    collection: "sensordata",
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

const sensor = mongoose.model("Sensordata", schema);

module.exports = sensor;
