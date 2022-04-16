import React from 'react';
import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={style.btn}
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.charAt(0).toUpperCase()}
          {option.slice(1, option.length)}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
