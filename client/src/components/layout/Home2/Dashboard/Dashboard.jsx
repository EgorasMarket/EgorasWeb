import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import DashboardHomePage from "./DashboardPages/DashboardHomePage";
import Wallet from "../../Wallet/Wallet";
import DashboardSidebar from "./DashboardSidebar";
import ItemDetailsPage from "../item_details_page/ItemDetailsPage";
import DashboardSavingsPage from "./DashboardPages/DashboardSavingsPage";
import DashboardCart from "./DashboardPages/DashboardCart";
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
  console.log(isAuthenticated, loading);
  useEffect(() => {
    // console.log(isAuthenticated,'77777');
    if (isAuthenticated == false) {
      // return <Redirect to="/" />;
      return window.location.replace("/login");
    } else if (isAuthenticated == true) {
      // console.log('trueee');
      const timer = setTimeout(() => {
        setSplashScreen(false);
      }, 1000);
    }

    // setSplashScreen(true);
  }, [isAuthenticated]);

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
                component={DashboardSavingsPage}
              />
              <Route
                exact
                path="/dashboard/wallet/withdrawal"
                component={Withdrawal}
              />
              <Route exact path="/dashboard/cart" component={DashboardCart} />
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
                path="/dashboard/products/categories/id-phone"
                component={PhonesCatPage}
              />

              <Route
                exact
                path="/dashboard/products/details/:id/:name"
                component={ItemDetailsPage}
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
