import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductAdmin from "./components/ProductAdmin";
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ForgotPasswordVerification from "./components/auth/ForgotPasswordVerification";
import ChangePassword from "./components/auth/ChangePassword";
import ChangePasswordConfirm from "./components/auth/ChangePasswordConfirm";
import Welcome from "./components/auth/Welcome";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faEdit);

class App extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  setAuthStatus = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.state.setAuthStatus,
      setUser: this.state.setUser,
    };
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar authProps={authProps} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Home {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/products"
                component={Products}
                render={(props) => <Products {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/admin"
                component={ProductAdmin}
                render={(props) => <ProductAdmin {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/login"
                component={LogIn}
                render={(props) => <LogIn {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/register"
                component={Register}
                render={(props) => <Register {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/forgotpassword"
                component={ForgotPassword}
                render={(props) => (
                  <ForgotPassword {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/forgotpasswordverification"
                component={ForgotPasswordVerification}
                render={(props) => (
                  <ForgotPasswordVerification {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/changepassword"
                component={ChangePassword}
                render={(props) => (
                  <ChangePassword {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/changepasswordconfirmation"
                component={ChangePasswordConfirm}
                render={(props) => (
                  <ChangePasswordConfirm {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/welcome"
                component={Welcome}
                render={(props) => <Welcome {...props} auth={authProps} />}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
