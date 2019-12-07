import React from 'react';
import Home from './views/home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
function Layout() {
  return (
      <BrowserRouter>
        <Switch>
              <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default Layout;
