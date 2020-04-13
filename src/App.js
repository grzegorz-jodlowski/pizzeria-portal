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

function App() {
  return (
    <BrowserRouter basename={`/panel`}>
      <MainLayout>
        <Switch>
          <Route exact path={`/`} component={Homepage} />
          <Route exact path={`/login`} component={Login} />
          <Route exact path={`/tables`} component={Tables} />
          <Route exact path={`/waiter`} component={Waiter} />
          <Route exact path={`/kitchen`} component={Kitchen} />
          <Route exact path={`/ordering`} component={Ordering} />
          <Route exact path={`/ordering/order/:id`} component={Order} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
