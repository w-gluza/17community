import React from 'react';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// components import
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Alert from './components/Alert/Alert';

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Route exact path='/' component={Home} />
      <main>
        <Alert />
        <Switch>
          <Route exact path='/Login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </main>
    </Router>
  </Provider>
);

export default App;
