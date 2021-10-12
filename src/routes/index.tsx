import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routeConstants";
import PrivateRoute from "../components/securedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { Store } from "../redux/Actions";

export default function Routes () {
 
  return (
    <>
      <ToastContainer />
      {/* {isLoggedin && <Header /> } */}
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {publicRoutes.map((item, index) => (
            <Route key={index} {...item} />
          ))}

          {privateRoutes.map((item, index) => (
            <>
              <Header/>
            <PrivateRoute key={index} {...item} />
            </>
          ))}

          <Route render={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
    </>
  );
}
