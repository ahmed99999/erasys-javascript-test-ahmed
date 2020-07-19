import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from './components/Users';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/users" component={Users} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
