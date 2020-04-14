import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';

const TablesBooking = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>TablesBooking view: {match.params.id}</h2>
    </div>
  );
};

TablesBooking.propTypes = {
  match: PropTypes.object,
};

export default TablesBooking;
