import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Homepage from './components/views/Homepage/Homepage';
import Ordering from './components/views/Ordering/Ordering';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewEvent from './components/views/NewEvent/NewEvent';
import Booking from './components/views/Booking/Booking';
import Events from './components/views/Events/Events';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={NewEvent} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Events} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
