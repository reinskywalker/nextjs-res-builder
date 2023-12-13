import React, { useState } from 'react';
import Modal from 'react-modal';

const MessageDialog = ({ isOpen, message, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Message Dialog"
    >
      <div>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default MessageDialog;
    