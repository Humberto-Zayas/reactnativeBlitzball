const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  attack: Number,
  defend: Number,
  block: Number,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
