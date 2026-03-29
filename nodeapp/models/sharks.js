const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SharkSchema = new Schema({
  name: { type: String, required: true },
  character: { type: String, required: true }
});

module.exports = mongoose.model('Shark', SharkSchema);
