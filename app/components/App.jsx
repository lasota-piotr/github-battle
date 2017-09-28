import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';

export default function App() {
  return (
    <Router>
      <div className="o-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
          <Route path="/popular" component={Popular} />
          <Route render={
            () => (
              <h1 className="o-flex o-flex--justify-content-center u-margin-top">
                404 | Not Found
              </h1>
            )
          }
          />
        </Switch>
      </div>
    </Router>
  );
}
