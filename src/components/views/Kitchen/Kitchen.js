import React from 'react';
import styles from './Kitchen.module.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const demoContent = [
  { order: 123, table: '1', remote: null, dishes: [] },
  { order: 234, table: null, remote: '999', dishes: [] },
  { order: 345, table: '4', remote: null, dishes: [] },
  { order: 678, table: '1', remote: null, dishes: [] },
  { order: 912, table: '3', remote: null, dishes: [] },
  { order: 111, table: null, remote: '888', dishes: [] },
];


const Kitchen = () => {
  return (
    <div className={styles.component}>
      <h2>Kitchen view</h2>
    </div>
  );
};

export default Kitchen;
