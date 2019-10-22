import React from 'react';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components import
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => (
  <Router>
    <Nav />
    <Route exact path='/' component={Home} />
    <main>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </main>
  </Router>
);

export default App;
