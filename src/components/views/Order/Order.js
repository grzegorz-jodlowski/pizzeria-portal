import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ id }) => {
  return (
    <div className={styles.component}>
      <h2>Order view: {id}</h2>
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.string,
};

export default Order;
