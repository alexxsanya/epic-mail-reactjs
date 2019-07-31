/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../CSS/StatusLabel.scss';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

function StatusLabel({ message, tip, variant }) {
  return (
    <Alert variant={variant} className="status-box">
      {message}
      ,
      &nbsp;
      {tip}
    </Alert>
  );
}

StatusLabel.propTypes = {
  message: PropTypes.string,
  tip: PropTypes.string,
  variant: PropTypes.string,
};


StatusLabel.defaultProps = {
  message: 'Hi ',
  tip: 'Try refreshing the page.',
  variant: 'warning',
};

export default StatusLabel;
