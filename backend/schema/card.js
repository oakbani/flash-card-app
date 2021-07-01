const mongoose = require('mongoose');

let cardSchema = new mongoose.Schema({
    name: String
});

let Card = new mongoose.model('Card', cardSchema);

module.exports = Card;