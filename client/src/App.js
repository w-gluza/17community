import React, { useEffect } from 'react';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utilities/setAuthToken';

// components import
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Alert from './components/Alert/Alert';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // Add empty array to prevent app from rerunning function, acts like componentDidMount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
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
};

export default App;
