const express = require('express');
const app = express();
const userRoute = express.Router();

// Felhasználó model
let User = require('../Model/Felhasznalo');

// Felhasználó hozzáadása
userRoute.route('/addUser').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.json(data)
    }
  })
});

// Az összes termék beszerzése
userRoute.route('/getallUser').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Egyetlen felhasználó lekérése
userRoute.route('/getUser/:id').get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Felhasználó frissítése
userRoute.route('/updateUser/:id').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
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

// Felhasználó törlése
userRoute.route('/deleteUser/:id').delete((req, res, next) => {
  User.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;
