const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Plan = require('../models/Plan');

userRouter.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err)
      res.status(500).json({
        message: { msgBody: 'Server error has occured', msgError: true },
      });
    if (user)
      res.status(400).json({
        message: { msgBody: 'Email is already taken', msgError: true },
      });
    else {
      const newUser = new User({ email, name, password });
      newUser.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: 'Error has occured', msgError: true },
          });
        else
          res.status(201).json({
            message: {
              msgBody: 'Account successfully created',
              msgError: false,
            },
          });
      });
    }
  });
});

module.exports = userRouter;
