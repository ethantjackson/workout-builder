const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Plan = require('../models/Plan');

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: 'ethantjackson',
      sub: userID,
    },
    'ethantjackson',
    { expiresIn: '1hr' }
  );
};

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
        if (err) {
          console.log(err);
          res.status(500).json({
            message: { msgBody: 'Error has occured', msgError: true },
          });
        } else
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

userRouter.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    // console.log(req);
    if (req.isAuthenticated()) {
      const { _id, email, name } = req.user;
      const token = signToken(_id);
      res.cookie('access_token', token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { email, name } });
    }
  }
);

userRouter.get(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { email: '', name: '' }, success: true });
  }
);

userRouter.post(
  '/plan',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const plan = new Plan(req.body);
    plan.save((err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: {
            msgBody: 'Error has occured when adding workout plan',
            msgError: true,
          },
        });
      } else req.user.workoutPlans.push(plan);
      req.user.save((err) => {
        if (err)
          res.status(500).json({
            message: {
              msgBody: 'Error has occured when saving user',
              msgError: true,
            },
          });
        else
          res.status(200).json({
            message: {
              msgBody: 'Successfully created workout plan',
              msgError: false,
            },
          });
      });
    });
  }
);

userRouter.put(
  '/plan/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const planID = req.params.id;
    const newPlan = req.body;

    Plan.findByIdAndUpdate(planID, newPlan, { new: true }, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: {
            msgBody: 'Error has occured when updating workout plan.',
            msgError: true,
          },
        });
      } else {
        res.status(200).json({
          message: {
            msgBody: 'Successfully updated workout plan.',
            msgError: false,
          },
        });
      }
    });
  }
);

userRouter.delete(
  '/plan/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const planID = req.params.id;
    Plan.findByIdAndDelete(planID, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: {
            msgBody: 'Error has occured when deleting workout plan.',
            msgError: true,
          },
        });
      }
      let updatedUser = req.user;
      updatedUser.workoutPlans = updatedUser.workoutPlans.filter(
        (plan) => plan._id != planID
      );
      updatedUser.save((err) => {
        if (err)
          res.status(500).json({
            message: {
              msgBody: 'Error has occured when updating user.',
              msgError: true,
            },
          });
        else {
          res.status(200).json({
            message: {
              msgBody: 'Successfully deleted workout plan.',
              msgError: false,
            },
          });
        }
      });
    });
  }
);

userRouter.get(
  '/plans',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findById({ _id: req.user._id })
      .populate('workoutPlans')
      .exec((err, document) => {
        if (err)
          res.status(500).json({
            message: { msgBody: 'Error has occured', msgError: true },
          });
        else
          res
            .status(200)
            .json({ workoutPlans: document.workoutPlans, authenticated: true });
      });
  }
);

userRouter.get(
  '/authenticated',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { email, name } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { email, name } });
  }
);

module.exports = userRouter;
