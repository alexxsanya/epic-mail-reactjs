import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './Mainstore/Store';
import { Auth } from './Auth';
import './App.scss';
import Header from './common/components/Header';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Auth.login} />
        <Route path="/login" component={Auth.login} />
        <Route path="/signup" component={Auth.signup} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
