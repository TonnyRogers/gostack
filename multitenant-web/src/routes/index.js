import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

const Routes = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/" exact component={Main} />
  </Switch>
);

export default Routes;
