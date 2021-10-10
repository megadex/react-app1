import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Edit from './components/Edit';
import Create from './components/Create';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="page">
        <Nav/>

        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/cart" component={Cart}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/create" component={Create}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;