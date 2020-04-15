import React from 'react';
import styles from './Homepage.module.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const localOrders = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
];

const remoteOrders = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
];

const demoContent = [
  { id: '1', type: 'Event', time: '9-11', people: 4, name: 'John Smith', table: '1' },
  { id: '2', type: 'Booking', time: '11', people: 4, name: 'John Smith', table: '2' },
  { id: '3', type: 'Event', time: '9-11', people: 4, name: 'John Smith', table: '3' },
  { id: '4', type: 'Booking', time: '9-11', people: 4, name: 'John Smith', table: '4' },
  { id: '5', type: 'Booking', time: '9-11', people: 4, name: 'John Smith', table: '1' },
  { id: '6', type: 'Event', time: '9-11', people: 4, name: 'John Smith', table: '2' },
  { id: '7', type: 'Event', time: '9-11', people: 4, name: 'John Smith', table: '3' },
];

const date = new Date();

const Homepage = () => {
  return (
    <main className={styles.component}>
      <section className={styles.ordersBoxes}>
        <Paper className={styles.ordersBox}>
          <Typography component="h2" variant="h6" color="primary">
            Local orders
          </Typography>
          <Typography component="p" variant="h4">
            {localOrders.length}
          </Typography>
          <Typography color="textSecondary">
            {date.toLocaleDateString()}
          </Typography>
        </Paper>
        <Paper className={styles.ordersBox}>
          <Typography component="h2" variant="h6" color="primary">
            Remote orders
          </Typography>
          <Typography component="p" variant="h4">
            {remoteOrders.length}
          </Typography>
          <Typography color="textSecondary">
            {date.toLocaleDateString()}
          </Typography>
        </Paper>
      </section>
      <Paper className={styles.component}>
        <Typography component="h2" variant="h6" color="primary">
          Today&apos;s reservations and events
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>People</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Table</TableCell>
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
    </main>
  );
};

export default Homepage;
