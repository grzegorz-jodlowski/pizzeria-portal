import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  const state = {
    id: 'abc',
  };

  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className={styles.link}>
        New booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/${state.id}`} className={styles.link}>
        Edit booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className={styles.link}>
        New event
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/${state.id}`} className={styles.link}>
        Edit event
      </Link>
    </div>
  );
};

export default Tables;
