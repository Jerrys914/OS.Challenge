const mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  sport: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  association: { type: String, required: true},
  team: { type: String, required: true },
  interests: { type: String, required: true },
  charities: { type: String },
  married: { type: Boolean, required: true },
  drink: { type: Boolean, required: true }
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
