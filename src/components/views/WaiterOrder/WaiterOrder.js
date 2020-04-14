import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrder.module.scss';

const WaiterOrder = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>WaiterOrder view: {match.params.id}</h2>
    </div>
  );
};

WaiterOrder.propTypes = {
  match: PropTypes.object,
};

export default WaiterOrder;
