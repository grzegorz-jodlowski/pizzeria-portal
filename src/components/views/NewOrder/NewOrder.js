import React from 'react';
import styles from './NewOrder.module.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const demoTables = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
];

const NewOrder = () => {
  return (
    <div className={styles.component}>
      <FormControl required className={styles.formControl}>
        <InputLabel id="table-select-label">Table</InputLabel>
        <Select
          labelId="table-select-label"
          id="table-select"
        // value={age}
        // onChange={handleChange}
        >
          {demoTables.map(table => (
            <MenuItem key={table.id} value={table.id}>{table.id}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default NewOrder;
