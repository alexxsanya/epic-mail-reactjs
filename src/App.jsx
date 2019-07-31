import React from 'react'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './Mainstore/Store';

const App = () => {
  return ( 
    <p> Hello World, This is the Epic Mail System </p> 
  );
}

export default App;
