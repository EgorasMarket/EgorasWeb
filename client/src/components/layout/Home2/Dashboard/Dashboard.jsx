import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DashboardHomePage from "./DashboardPages/DashboardHomePage";
import DashboardSidebar from "./DashboardSidebar";
import DashboardSavingsPage from "./DashboardPages/DashboardSavingsPage";
import DashboardInvestPage from "./DashboardPages/DashboardInvestPage";
import DashboardAccountPage from "./DashboardPages/DashboardAccountPage";
import PhonesCatPage from "./DashboardPages/CategoryPages/PhonesCatPage";
import DashboardHomePage from "./DashboardPages/DashboardHomePage";

import "./DashboardStyles/dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <Route>
        <div className="dashboard">
          <DashboardSidebar />
          <Switch>
            <Route exact path="/dashboard" component={DashboardHomePage} />
            <Route
              exact
              path="/dashboard/savings"
              component={DashboardSavingsPage}
            />
            <Route
              exact
              path="/dashboard/products"
              component={DashboardInvestPage}
            />
            <Route
              exact
              path="/dashboard/products/categories/id-phone"
              component={PhonesCatPage}
            />
            <Route
              exact
              path="/dashboard/accounts"
              component={DashboardAccountPage}
            />
          </Switch>
        </div>
      </Route>
    </div>
  );
};

export default Dashboard;
