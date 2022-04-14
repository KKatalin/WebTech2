const express = require('express');
const app = express();
const kertTermRoute = express.Router();

// Kert Termék model
let KertTerm = require('../Model/KertTerm');

// Kert Termék hozzáadása
kertTermRoute.route('/addP').post((req, res, next) => {
  KertTerm.create(req.body, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.json(data)
    }
  })
});

// Az összes kert termék beszerzése
kertTermRoute.route('/getallP').get((req, res) => {
  KertTerm.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Egyetlen kert termék beszerzése
kertTermRoute.route('/getP/:id').get((req, res) => {
  KertTerm.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// kert termék frissítése
kertTermRoute.route('/updateP/:id').put((req, res, next) => {
  KertTerm.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Kert termék törlése
kertTermRoute.route('/deleteP/:id').delete((req, res, next) => {
  KertTerm.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = kertTermRoute;
