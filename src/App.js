import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from './components/Users';


function App() {
  return (
    <Switch>
      <Route path="/users" component={Users} />
    </Switch>
  );
}

export default App;
