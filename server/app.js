const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

var dotenv = require('dotenv');
dotenv.config();
var url = process.env.MONGO_URI;

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Successfully connected to database');
  }
);
mongoose.set('useCreateIndex', true); //get rid of deprecation warning

const userRouter = require('./routes/User');
app.use('/user', userRouter);

const workoutRouter = require('./routes/Workout');
app.use('/workout', workoutRouter);

app.listen(5000, function () {
  console.log('Server started on port 5000');
});
