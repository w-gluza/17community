import React, { useEffect } from "react";
import "./main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

// components import
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Nav from "./components/Nav/Nav";
import Alert from "./components/Alert/Alert";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import EditProfile from "./components/EditProfile/EditProfile";
import Profile from "./components/Profile/Profile";
import Profiles from "./components/Profiles/Profiles";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import PrivateRoute from "./components/Routing/PrivateRoute";

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
      <Alert />

      <Router>
        <Switch>
          <Route exact path="/auth" render={() => <Route component={Auth} />} />

          <div className="page-container">
            <Nav />
            <Route exact path="/" component={Home} />

            <main className="main">
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/profiles" component={Profiles} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
            </main>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
