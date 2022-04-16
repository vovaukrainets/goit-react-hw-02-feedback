import React from 'react';
import style from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={style.section__box}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
