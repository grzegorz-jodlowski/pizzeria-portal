import React from 'react';
import styles from './Homepage.module.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const localOrders = [
  { id: '1', status: 'free', order: null },
  { id: '2', status: 'thinking', order: null },
  { id: '3', status: 'ordered', order: 123 },
  { id: '4', status: 'prepared', order: 234 },
  { id: '5', status: 'delivered', order: 345 },
  { id: '6', status: 'paid', order: 456 },
];

const remoteOrders = [
  { id: '1', status: 'free', order: null },
  { id: '2', status: 'thinking', order: null },
  { id: '3', status: 'ordered', order: 123 },
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
    </main>
  );
};

export default Homepage;
