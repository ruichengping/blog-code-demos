import React from 'react';
import {Route} from 'react-router';
import Login from '@/pages/login';
import User from '@/pages/user';


const routes = (<div>
  <Route path="/user" component={User}></Route>
  <Route path="/login" component={Login}></Route>
</div>)
export default routes;

