import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import createBrowserHistory from "./history";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Admin from "./components/Admin";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import MentionsLegales from "./components/MentionsLegales";
import ProductDetail from "./components/ProductDetail";
import BateauCreate from "./components/BateauCreate";
import BateauEdit from "./components/BateauEdit";
import BateauList from "./oldComponents/BateauList";
import BateauDelete from "./components/BateauDelete";
import NouvellePageAccueil from "./components/NouvellePageAccueil";
import Vente from "./components/Vente";
import SurMesure from "./components/Sur-mesure";
import { connect } from "react-redux";

function App(props) {
  //allows to secure the private routes
  const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          authed === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/admin", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };

  return (
    <div className="app">
      <Router history={createBrowserHistory}>
        <Navbar />
        <Switch>
          <Route exact path="/aboutus" component={AboutUs} />
          <PrivateRoute
            authed={props.isSignedIn}
            path="/bateaucreate"
            component={BateauCreate}
          />
          <PrivateRoute
            authed={props.isSignedIn}
            path="/bateaulist"
            component={BateauList}
          />
          <PrivateRoute
            authed={props.isSignedIn}
            path="/bateauedit/:_id"
            component={BateauEdit}
          />
          <PrivateRoute
            authed={props.isSignedIn}
            path="/bateaudelete/:_id"
            component={BateauDelete}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/vente" component={Vente} />
          <Route exact path="/sur-mesure" component={SurMesure} />
          <Route exact path="/mentionslegales" component={MentionsLegales} />
          <Route exact path="/productDetail/:_id" component={ProductDetail} />
          <Route exact path="/" component={NouvellePageAccueil} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {})(App);
