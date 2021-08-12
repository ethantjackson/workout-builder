const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

var dotenv = require('dotenv');
dotenv.config();
var url = process.env.MONGO_URI;

const app = express();
app.set('view engine', 'ejs');

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);

const workoutRouter = require('./routes/Workout');
app.use('/workout', workoutRouter);

app.listen(5000, function () {
  console.log('Server started on port 5000');
});
