const express = require('express');
const app = express();
const Player = require('./models/player');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./db');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, slime!');
});

app.get('/players', async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

app.post('/players', async (req, res) => {
  const player = new Player(req.body);
  await player.save();
  res.json(player);
});


const server = app.listen(3000, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
