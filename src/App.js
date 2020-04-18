import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Homepage from './components/views/Homepage/Homepage';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    secondary: {
      main: '#c0c0c0',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBooking} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={TablesBooking} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrder} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
