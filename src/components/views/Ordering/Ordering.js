import React from 'react';
import styles from './Ordering.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Ordering = () => {
  const state = {
    id: 'abc',
  };

  return (
    <div className={styles.component}>
      <h2>Ordering view</h2>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`} className={styles.link}>
        New
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/${state.id}`} className={styles.link}>
        Edit order
      </Link>
    </div>
  );
};

Ordering.propTypes = {
  id: PropTypes.string,
};

export default Ordering;
