const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  nev: {
    type: String
  },
  felhNev: {
    type: String
  },
  jelszo: {
    type: String
  },
  email: {
    type: String
  },
  Szulid: {
    type: Date
  }
}, {
  gyujtemeny: 'users'
})

module.exports = mongoose.model('users', User)
