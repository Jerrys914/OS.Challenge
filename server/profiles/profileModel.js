const mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  sport: { type: Array, required: true },
  description: { type: String, required: true },
  location: { type: Array, required: true },
  association: { type: String, required: true},
  team: { type: String, required: true },
  interests: { type: Array, required: true },
  charities: { type: Array },
  married: { type: Boolean, required: true },
  drink: { type: Boolean, required: true }
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
