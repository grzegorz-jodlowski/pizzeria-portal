import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvent.module.scss';

const TablesEvent = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>TablesEvent view: {match.params.id}</h2>
    </div>
  );
};

TablesEvent.propTypes = {
  match: PropTypes.object,
};

export default TablesEvent;
