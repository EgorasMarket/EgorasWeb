import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminUploadProducts from "./AdminPages/AdminUploadProducts";
import AdminAllProducts from "./AdminPages/AdminAllProducts";
import RegisterCustomer from "./AdminPages/RegisterCustomer";
import AdminCustomer from "./AdminPages/AdminCustomer";
import AdminSideBar from "./AdminSideBar";
import { SplashScreen } from "../SplashScreen/SplashScreen";

import "./AdminStyles/admin.css";
const Admin = ({ isAuthenticated, loading }) => {
  const [splashScreen, setSplashScreen] = useState(true);
  console.log(isAuthenticated, loading);

  useEffect(() => {
    // console.log(isAuthenticated,'77777');
    if (isAuthenticated == false) {
      // return <Redirect to="/" />;
      return window.location.replace("/login/super_admin");
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
          <div className="admin">
            <AdminSideBar />
            <Switch>
              <Route
                exact
                path="/super_admin"
                component={AdminUploadProducts}
              />
              <Route
                exact
                path="/super_admin/register_user"
                component={RegisterCustomer}
              />
              <Route
                exact
                path="/super_admin/all_user"
                component={AdminCustomer}
              />
              <Route
                exact
                path="/super_admin/all_products"
                component={AdminAllProducts}
              />
            </Switch>
          </div>
        )}
      </Route>
    </div>
  );
};

// export default Admin;

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {})(Admin);
