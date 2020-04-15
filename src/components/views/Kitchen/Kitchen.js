import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const demoContent = [
  { order: 123, table: '1', remote: null, dishes: ['pizza margarita', 'nachos'] },
  { order: 234, table: null, remote: '999', dishes: ['dumplings', 'tomato soup'] },
  { order: 345, table: '4', remote: null, dishes: ['tomato soup'] },
  { order: 678, table: '1', remote: null, dishes: ['pizza margarita', 'dumplings'] },
  { order: 912, table: '3', remote: null, dishes: ['pizza margarita', 'dumplings', 'pizza margarita', 'dumplings'] },
  { order: 111, table: null, remote: '888', dishes: ['dumplings', 'pizza margarita', 'dumplings'] },
];


const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Table/Remote</TableCell>
            <TableCell>Dishes</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.order}>
              <TableCell component="th" scope="row">
                {row.order}
              </TableCell>
              <TableCell>
                {row.table || row.remote}
              </TableCell>
              <TableCell>
                {`${row.dishes.length}: ${row.dishes.join(' | ')}`}
              </TableCell>
              <TableCell>
                <Button>Mark done</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;
