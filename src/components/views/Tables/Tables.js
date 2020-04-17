import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const today = new Date();

const tables = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
];

const demoContent = [
  { id: '1', type: 'Event', time: '9-11', people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '2', type: 'Booking', time: '11-13', people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '3', type: 'Event', time: '11-16', people: 4, name: 'John Smith', table: '3', status: 'waiting' },
  { id: '4', type: 'Booking', time: '14-16', people: 4, name: 'John Smith', table: '4', status: 'waiting' },
  { id: '5', type: 'Booking', time: '15-17', people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '6', type: 'Event', time: '17-19', people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '7', type: 'Event', time: '19-20', people: 4, name: 'John Smith', table: '3', status: 'waiting' },
];

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
          className={styles.dateField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      {/* <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className={styles.link}>
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
      </Link> */}
    </div>
  );
};

export default Tables;
