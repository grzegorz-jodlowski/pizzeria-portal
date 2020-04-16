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

const demoProducts = [
  { id: 'doughnut', price: 10, options: [] },
  { id: 'breakfast', price: 15, options: ['latte', 'espresso'] },
  { id: 'pizza', price: 20, options: ['olives', 'salami', 'peppers'] },
  { id: 'salad', price: 15, options: ['cucumber', 'cheese', 'tomatoes'] },

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
      <FormControl required className={styles.formControl}>
        <InputLabel id="product-select-label">Product</InputLabel>
        <Select
          labelId="product-select-label"
          id="product-select"
        // value={age}
        // onChange={handleChange}
        >
          {demoProducts.map(product => (
            <MenuItem key={product.id} value={product.id}>{product.id}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default NewOrder;
