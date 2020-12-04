import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SingUp from '../pages/SingUp';
import Create from '../pages/create';

import Dashboard from '../pages/Dashboard';



export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register"  component={SingUp} />
      <Route path="/post/create" component={Create} isPrivate />
      <Route path="/post/create" component={Dashboard} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate/>   
    </Switch>
  );
}