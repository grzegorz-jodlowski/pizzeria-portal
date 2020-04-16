import React from 'react';
import styles from './NewOrder.module.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



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

const productsNames = {};

for (let product of demoProducts) {
  productsNames[product.id] = false;
}

class NewOrder extends React.Component {
  state = {
    ...productsNames,
    order: [],
  };


  handleListItemClick = (product, value) => () => {
    //TODO: Fix bug with state
    console.log(product, value);
    this.setState({
      ...this.state,
      order: [
        ...this.state.order,
        {
          [product]: [value],
        },
      ],
    });

  };

  handleProductClick = product => () => {
    this.setState({
      ...this.state,
      [product]: !this.state[product],
    });
  }


  render() {
    return (
      <div className={styles.component}>
        <FormControl required className={styles.formControl}>
          <InputLabel id="table-select-label">Table</InputLabel>
          <Select
            labelId="table-select-label"
            id="table-select"
          >
            {demoTables.map(table => (
              <MenuItem key={table.id} value={table.id}>{table.id}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={styles.listsBox}>
          {demoProducts.map(product =>
            <List
              component="div"
              className={styles.list}
              key={product.id}
            >
              <ListItem button onClick={this.handleProductClick(product.id)} className={product.id}>
                <ListItemText primary={product.id} />
                {this.state[product.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state[product.id]} timeout="auto" unmountOnExit>
                {product.options.map((option, i) =>
                  <List component="div" disablePadding key={option} className={styles.subList}>
                    <ListItem key={option} role={undefined} dense button onClick={this.handleListItemClick(product.id, option)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': i }}
                        />
                      </ListItemIcon>
                      <ListItemText id={option} primary={option} />
                    </ListItem>
                  </List>
                )}
              </Collapse>
            </List>
          )
          }
        </div>
      </div>
    );
  }
}

export default NewOrder;
