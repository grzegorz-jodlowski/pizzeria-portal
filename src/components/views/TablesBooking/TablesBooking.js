import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';

const demoContent = [
  { id: '1', type: 'event', duration: 2, startTime: 9, people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '2', type: 'booking', duration: 1, startTime: 11, people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '3', type: 'event', duration: null, startTime: 11, people: 4, name: 'John Smith', table: '3', status: 'waiting' },
  { id: '4', type: 'booking', duration: 1.5, startTime: 14, people: 4, name: 'John Smith', table: '4', status: 'waiting' },
  { id: '5', type: 'booking', duration: 2, startTime: 15, people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '6', type: 'event', duration: 2, startTime: 17, people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '7', type: 'event', duration: 2, startTime: 19, people: 4, name: 'John Smith', table: '3', status: 'waiting' },
];

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
