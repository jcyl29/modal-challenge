import React, { useState, useEffect } from 'react';
import copyTextToClipboard from './clipboardCopy';
import PropTypes from 'prop-types';
import logo from './logo.png';
import './coupon.css';

const Coupon = ({ dialog }) => {
  const couponCode = 'DDFD-FFDX-2234-5SXS';
  const [buttonCopy, setButtonCopy] = useState('Copy');
  const copyText = () => {
    copyTextToClipboard(couponCode).then(() => {
      setButtonCopy('Copied!');
    });
  };

  useEffect(() => {
    dialog.current.addEventListener('close', () => {
      // reset the test
      setButtonCopy('Copy');
    });
  }, [dialog, setButtonCopy]);

  return (
    <div className="coupon-info">
      <img alt="logo" src={logo} />
      <h2>Check out my coupon!</h2>
      <p>
        Here is some more info about the coupon. Here is some more info about
        the coupon.
      </p>
      <div className="input-group">
        <input readOnly value={couponCode} />
        <button onClick={copyText}>{buttonCopy}</button>
      </div>
    </div>
  );
};

Coupon.propTypes = {
  dialog: PropTypes.object.isRequired
};

export default Coupon;
