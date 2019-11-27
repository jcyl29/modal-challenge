import React, { useState, useEffect } from 'react';
import logoSmall from './logo-sm.png'; // Tell webpack this JS file uses this image
import './subscribe.css';
import { addEmailAddress } from './api';
import PropTypes from 'prop-types'

const Subscribe = ({ dialog }) => {
  const simpleEmailRegex = new RegExp(/\S+@\S+\.\S+/);
  const [badEmailMessage, showBadEmailMessage] = useState(false);
  const [requestStatusMessage, setRequestStatusMessage] = useState('');

  useEffect(() => {
    dialog.current.addEventListener('close', () => {
      // reset the test
      showBadEmailMessage(false);
      setRequestStatusMessage('');
    });
  }, [dialog, showBadEmailMessage, setRequestStatusMessage]);
  const handleSubmit = evt => {
    evt.preventDefault();

    const email = evt.target.parentNode.querySelector('input').value;

    if (simpleEmailRegex.test(email)) {
      showBadEmailMessage(false);
      addEmailAddress(email)
        .then(() => {
          setRequestStatusMessage('Subscribed successfully!');
        })
        .catch(resp => {
          if (
            resp &&
            Object.prototype.hasOwnProperty.call(resp, 'message') &&
            resp.message === 'email already exists'
          ) {
            setRequestStatusMessage('Looks like you already registered!');
          }
        });
    } else {
      showBadEmailMessage(true);
    }
  };

  return (
    <div className="subscribe-info">
      <img alt="logo" src={logoSmall} />
      <h2>Subscribe to our newsletter!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget mi proin sed
        libero enim sed faucibus turpis in. Arcu cursus vitae congue mauris
        rhoncus aenean vel elit. In nibh mauris cursus mattis molestie a iaculis
        at.
      </p>
      <form action="#" onSubmit={handleSubmit}>
        <input
          placeholder="Enter email address"
          required
          pattern="\S+@\S+\.\S+"
        />
        {badEmailMessage && (
          <span className="error-message">Enter a valid email</span>
        )}
        <button className="subscribe-button" onClick={handleSubmit}>
          Subscribe
        </button>
        {!!requestStatusMessage && (
          <p className="status-message">{requestStatusMessage}</p>
        )}
      </form>
    </div>
  );
};

Subscribe.propTypes = {
  dialog: PropTypes.object.isRequired
};

export default Subscribe;
