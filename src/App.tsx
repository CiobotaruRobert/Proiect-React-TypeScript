import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../src/components/PrivateRoute';
import { history } from './helpers/history';
import { LoginPage, UsersListPage , DynamicFormPage } from '../src/pages';
import { HomePage } from '../src/pages';
import { RegisterForm } from '../src/pages';
import '@reduxjs/toolkit';



function App() {
  return (
          <Router history={history}>
            <Switch>
              {/* <ReusableButton />{" "} */}
              <Route exact path="/formpage" component={RegisterForm} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/dynamic-form" component={DynamicFormPage} />
              <PrivateRoute exact path="/">
                <Redirect to={{ pathname: '/v1' }} />
              </PrivateRoute>
              <PrivateRoute path="/v1" component={UsersListPage} />
            </Switch>
          </Router>
  );
}

export default App;