import React from 'react';
import styles from './Ordering.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Ordering = ({ id }) => {
  return (
    <div className={styles.component}>
      <h2>Ordering view</h2>
      <Link to={`/ordering/new`} className={styles.link}>New</Link>
      <Link to={`/ordering/order/${id}`} className={styles.link}>Order nr</Link>
    </div>
  );
};

Ordering.propTypes = {
  id: PropTypes.string,
};

export default Ordering;
