import React from 'react';
import PropTypes from 'prop-types';
import './RestStep.css';

const RestCard = ({ count }) => {
  return (
    <div className='row'>
      <div className='col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3'>
        <div className='restCard'>
          <h1 className='restHeader'>REST</h1>
          <p className={'restCount' + (count % 2 === 0 ? ' flashColor' : '')}>
            {count}
          </p>
        </div>
      </div>
    </div>
  );
};

RestCard.propTypes = {
  count: PropTypes.number.isRequired,
};

export default RestCard;
