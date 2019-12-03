import React, { useState, useEffect } from "react";
import "./main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

// components import
import Home from "./components/Home/Home";
import Authentication from "./components/Authentication/Authentication";
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
import Milestones from "./components/Milestones/Milestones";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // Navigation Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add empty array to prevent app from rerunning function, acts like componentDidMount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Alert />
      <Router>
        <Switch>
          <Route
            exact
            path="/authentication"
            render={() => <Route component={Authentication} />}
          />
          <div className="page-container">
            <Nav
              isMenuOpen={isMenuOpen}
              onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
            <Route exact path="/" component={Home} />
            <main className="main">
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/milestones" component={Milestones} />
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
