import React, { useEffect, useRef } from 'react';
import dialogPolyfill from 'dialog-polyfill';

import PropTypes from 'prop-types';

import Coupon from './Coupon';
import Subscribe from './Subscribe';

const MainDialog = ({ show, setShowDialog }) => {
  const dialog = useRef(null);

  useEffect(() => {
    dialogPolyfill.registerDialog(dialog.current);
    dialog.current.addEventListener('close', () => {
      // need to update the parent container state representation of this dialog.
      // otherwise this will cause a bug where clicking the same movie after closing
      // dialog won't open the dialog
      setShowDialog(false);
    });
  }, [setShowDialog]);

  // this check is needed in Firefox that is using the polyfill
  if (show && setShowDialog.current && !dialog.current.hasAttribute('open')) {
    dialog.current.showModal();
  }

  const renderDialogContent = () => {
    return (
      <div>
        <i
          role="button"
          aria-hidden="true"
          className="close-button fas fa-times-circle"
          onClick={closeModal}
        />

        <div className="modal-body clearfix">
          <Coupon dialog={dialog} />
          <Subscribe dialog={dialog} />
        </div>
      </div>
    );
  };

  const closeModal = () => {
    dialog.current.close();
  };

  return (
    <dialog id="info-dialog" ref={dialog} open={show}>
      {renderDialogContent()}
    </dialog>
  );
};

MainDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired
};

export default MainDialog;
