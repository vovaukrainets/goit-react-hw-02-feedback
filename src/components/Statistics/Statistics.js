import React from 'react';
import style from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  bad,
  neutral,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={style.statistic__box}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
