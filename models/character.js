var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


// models/book.js
var CharacterSchema = new Schema({
  name: String
});

var Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;