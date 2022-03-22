import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
// import DashboardHomePage from "./DashboardPages/DashboardHomePage";
import Wallet from "../../Wallet/Wallet";

import DashboardSidebar from "./DashboardSidebar";
import ItemDetailsPage from "../item_details_page/ItemDetailsPage";
// import ItemDetailsPage1 from "../item_details_page/detail";
import DashboardSavingsPage from "./DashboardPages/DashboardSavingsPage";
import CheckoutModalComponent from "../item_details_page/CheckoutModalComponent";
// import DashboardCart from "./DashboardPages/DashboardCart";
import DashboardInvestPage from "./DashboardPages/DashboardInvestPage";
import DashboardAccountPage from "./DashboardPages/DashboardAccountPage";
import PhonesCatPage from "./DashboardPages/CategoryPages/PhonesCatPage";
// import dashboardCheckout from "./DashboardPages/dashboardCheckout";
import DashboardHomePage from "./DashboardPages/DashboardHomePage";
import Withdrawal from "../../Wallet/withdrawal";
// import { SplashScreen } from "../../SplashScreen/SplashScreen.js";
// import { SplashScreen } from "../../SplashScreen/SplashScreen";
import { SplashScreen } from "../../SplashScreen/SplashScreen.js";

import "./DashboardStyles/dashboard.css";
import PrivateRoute2 from "../../../routing/PrivateRoute2";
const Dashboard = ({ isAuthenticated, loading }) => {
  const [splashScreen, setSplashScreen] = useState(true);
  //console.log(isAuthenticated, loading);
  useEffect(() => {
    // //console.log(isAuthenticated,'77777');
    if (isAuthenticated == false) {
      // return <Redirect to="/" />;
      return window.location.replace("/login");
    } else if (isAuthenticated == true) {
      // //console.log('trueee');
      const timer = setTimeout(() => {
        setSplashScreen(false);
      }, 1000);
    }

    if (window.location.pathname === "/saving") {
      return <Redirect to="/savings" />;
    }

    // setSplashScreen(true);
  }, [isAuthenticated]);

  // let spaceRemove = "/dashboard/products/details/:id/:name";
  //  let dapp =spaceRemove.replace(/%20/g, "-")

  return (
    <div>
      <Route>
        {splashScreen == true ? (
          <SplashScreen />
        ) : (
          <div className="dashboard">
            <DashboardSidebar />
            <Switch>
              <PrivateRoute2
                exact
                path="/dashboard"
                component={DashboardHomePage}
              />
              <Route
                exact
                path="/dashboard/savings"
                // path={"/dashboard/savings" || "/dashboard/saving"}
                component={DashboardSavingsPage}
              />

              <Route
                exact
                path="/dashboard/wallet/withdrawal"
                component={Withdrawal}
              />
              {/* <Route exact path="/dashboard/cart" component={DashboardCart} /> */}
              <Route exact path="/dashboard/wallet" component={Wallet} />
              <Route
                exact
                path="/dashboard/products"
                component={DashboardInvestPage}
              />
              {/* <Route
                exact
                path="/dashboard/checkout"
                component={dashboardCheckout}
              /> */}
              <Route
                exact
                path="/dashboard/products/categories/:category"
                component={PhonesCatPage}
              />
              <Route
                exact
                path="/dashboard/accounts"
                component={DashboardAccountPage}
              />
              <Route
                name="dash_account_param"
                exact
                path="/dashboard/accounts:action"
                component={DashboardAccountPage}
              />
              <Route
                exact
                // path ={`/dashboard/products/details/:id/:${"name".replace( '','-')}`}
                path={`/dashboard/products/details/:id/:${"name".replace(
                  /\s+/g,
                  ""
                )}`}
                // path={dapp }
                component={ItemDetailsPage}
              />
              {/* <Route
                exact
                path="/products/details/:id/:name"
                component={ItemDetailsPage1}
              /> */}
              <Route
                exact
                path="/dashboard/products/checkout"
                component={CheckoutModalComponent}
              />
            </Switch>
          </div>
        )}
      </Route>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {})(Dashboard);
