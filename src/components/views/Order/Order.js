import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>Order view: {match.params.id}</h2>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;
