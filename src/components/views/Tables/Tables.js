import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const today = new Date();

const Tables = () => {
  const state = {
    id: 'abc',
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
  };

  return (
    <div className={styles.component}>
      <form className={styles.formContainer} noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={state.date}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
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
