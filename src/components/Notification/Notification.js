import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div className={s.notification__box}>
      <h4>{message}</h4>
    </div>
  );
};

export default Notification;

Notification.propTypes = { message: PropTypes.string };
