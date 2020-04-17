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
  { id: '1', type: 'Event', duration: 2, startTime: 9, people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '2', type: 'Booking', duration: 1, startTime: 11, people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '3', type: 'Event', duration: null, startTime: 11, people: 4, name: 'John Smith', table: '3', status: 'waiting' },
  { id: '4', type: 'Booking', duration: 1.5, startTime: 14, people: 4, name: 'John Smith', table: '4', status: 'waiting' },
  { id: '5', type: 'Booking', duration: 2, startTime: 15, people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '6', type: 'Event', duration: 2, startTime: 17, people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '7', type: 'Event', duration: 2, startTime: 19, people: 4, name: 'John Smith', table: '3', status: 'waiting' },
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
      <Paper className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {tables.map(column => (
                <TableCell key={column.id}>{column.id}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.order && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                      {row.order}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {/* {renderActions(row.status)} */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
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
