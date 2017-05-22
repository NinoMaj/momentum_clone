const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    indes: true
  },
  quotes: {type: Array, default: []},
  links: {type: Array, default: []},
  backgroundHistory: [{
    date: Date,
    link: String,
    favorite: Boolean
  }]
});

UserSchema.methods.generateJWT = function () {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    name: this.name,
    exp: parseInt((expiry.getTime() * 10000000) / 1000)
  }, process.env.SECRET);
}


const User = mongoose.model('User', UserSchema);

module.exports = User;
