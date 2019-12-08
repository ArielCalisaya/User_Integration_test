import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Home from './views/home';
import Users from './views/Users';

import injectContext from './store/appContext'


function Layout() {
  return (
      <BrowserRouter>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Users" component={Users} />
        </Switch>
      </BrowserRouter>
  );
}

export default injectContext(Layout);
