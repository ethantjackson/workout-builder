import React from 'react';
import EmailImg from '../../../img/email.jpeg';
import CustomImg from '../../../img/custom.jpeg';
import SocialImg from '../../../img/socialMedia.jpeg';
import './CreateAccountModal.css';

const CreateAccountInfo = () => {
  return (
    <div>
      <h1 className='instructionsHeader'>
        What extra features do I get from an account?
      </h1>
      <div className='row'>
        <div className='col s12 xl6 accountFeatureDiv'>
          <img
            className='accountFeatureImg'
            src='https://successiblelife.com/wp-content/uploads/2019/07/Workout-Plan-for-Beginners.jpeg'
            alt='workout-plan-img'
          />
          <h4 className='accountFeatureTitle'>Workout Plans</h4>
          <p className='accountFeatureDescription'>
            Use the in-depth workout finder to build comprehensive workouts. You
            can save these workout plans for future use and edit them as you see
            fit.
          </p>
        </div>
        <div className='col s12 xl6 accountFeatureDiv'>
          <img src={EmailImg} alt='email-img' className='accountFeatureImg' />
          <h4 className='accountFeatureTitle'>Stay On Track!</h4>
          <p className='accountFeatureDescription'>
            Sign up for scheduled email reminders to help you keep the momentum
            going. Send workout plans to make a routine or opt in for periodic
            motivational messages.
          </p>
        </div>
        <div className='col s12 xl6 accountFeatureDiv'>
          <img
            src={CustomImg}
            alt='custom-workout-img'
            className='accountFeatureImg'
          />
          <h4 className='accountFeatureTitle'>Custom Workouts</h4>
          <p className='accountFeatureDescription'>
            Don't see your equipment in the workout finder? Want to work a
            particular muscle group? Creating an account allows you to add
            custom workouts to your own personal workout database.
          </p>
        </div>
        <div className='col s12 xl6 accountFeatureDiv'>
          <img
            src={SocialImg}
            alt='social-media-img'
            className='accountFeatureImg'
          />
          <h4 className='accountFeatureTitle'>Share Your Progress</h4>
          <p className='accountFeatureDescription'>
            Connect to social media to share your custom workouts and workout
            plans. Import other users' custom workouts and plans to add to your
            own collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountInfo;
