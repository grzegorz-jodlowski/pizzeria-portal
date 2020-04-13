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
      <Link to={`/tables/booking/new`} className={styles.link}>
        New
      </Link>
      <Link to={`/tables/booking/${state.id}`} className={styles.link}>
        Edit booking
      </Link>
    </div>
  );
};

export default Tables;
