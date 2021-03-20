import React from 'react';
import Button from '@material-ui/core/Button';
import {Routes} from './Routes/Routes';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

console.log('Router', Router);

function App() {
  const pathFind : any = Routes.path;
  return (
    <Router>
    <div>
   
      <Switch>
        <Route path={Routes.path}>
          < />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
