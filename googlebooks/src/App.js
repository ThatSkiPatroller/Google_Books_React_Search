import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/saved' component={Saved} />
    </Router>
  );
}

export default App;
