const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let KertTerm = new Schema({
  nev: {
    type: String
  },
  mennyiseg: {
    type: Number
  },
  ar: {
    type: Number
  }
}, {
  gyujtemeny: 'termekek'
})

module.exports = mongoose.model('KertTerm', KertTerm)
