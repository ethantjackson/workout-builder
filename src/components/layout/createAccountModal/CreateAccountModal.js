import React, { useState, useEffect } from 'react';
import CreateAccountForm from './CreateAccountForm';
import CreateAccountInfo from './CreateAccountInfo';
import M from 'materialize-css/dist/js/materialize.min.js';

import './CreateAccountModal.css';

const CreateAccountModal = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {});
  }, []);

  return (
    <div
      id='create-account-modal'
      className='modal createAccountModal'
      style={{ overflow: !showMoreInfo ? 'hidden' : 'auto' }}
    >
      <div className='modal-content'>
        {!showMoreInfo ? (
          <>
            <CreateAccountForm />
            <div
              className='createAccountFooter'
              style={{ right: '10%' }}
              onClick={() => setShowMoreInfo(true)}
            >
              <p>
                More Info{' '}
                <span className='moreInfoIcon'>
                  <i className='material-icons tiny'>chevron_right</i>
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <CreateAccountInfo />
            <div
              className='createAccountFooter'
              style={{ left: '10%' }}
              onClick={() => setShowMoreInfo(false)}
            >
              <p>
                <span className='createAccountIcon'>
                  <i className='material-icons tiny'>chevron_left</i>
                </span>
                Create Account
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAccountModal;
