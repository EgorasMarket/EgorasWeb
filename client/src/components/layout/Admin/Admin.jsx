import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AdminUploadProducts from "./AdminPages/AdminUploadProducts";
import AdminAllProducts from "./AdminPages/AdminAllProducts";
import RegisterCustomer from "./AdminPages/RegisterCustomer";
import AdminCustomer from "./AdminPages/AdminCustomer";
import AdminAllView from "./AdminPages/AdminAllProductView";
import AdminSideBar from "./AdminSideBar";
import { SplashScreen } from "../SplashScreen/SplashScreen";
import axios from "axios";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../actions/types";

import "./AdminStyles/admin.css";
import DashboardInvestPage from "../Home2/Dashboard/DashboardPages/DashboardInvestPage";
const Admin = ({ isAuthenticated, loading }) => {
  const [splashScreen, setSplashScreen] = useState(true);
  const [roleDisplay,setRoleDisplay]= useState({
    Role:""
  })

  const {Role} = roleDisplay;
  console.log(isAuthenticated, loading);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
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


    
  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/admin/info",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.user, "line_ful");
        setRoleDisplay({
          Role:data.data.user.role,
        })
       
    
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      }); 
  }, []);

  return (
    <div>
      <Route>
        {splashScreen == true ? (
          <SplashScreen />
        ) : (
          <div className="admin">
            <AdminSideBar />
            <Switch>
            {Role === "MEDIA"?  <Route exact path="/super_admin" component={AdminUploadProducts} />: 
               Role === "BUSINESS_ADMIN" ?
               <Route
               exact
               path="/super_admin/register_user"
               component={RegisterCustomer}
               />:

           (( Role === "CASHIER") || (Role === "CUSTOMER_SERVICE" ))?
              <Route
              exact
              path="/super_admin/all_user"
              component={AdminCustomer}
              />:

              Role === "HOD_MEDIA" ?
              <Route
              exact
              path="/super_admin/all_products"
              component={AdminAllProducts}
              />:null}

              <Route
                exact
                path="/super_admin/all_products_view/:id/:name"  
                // path="/dashboard/products/details/:id/:name"
                // / dashboard/products/details/:id/:name
                component={AdminAllView}
                />

                <Route
                  exact
                  path="/super_admin/user_overview"  
                  // path="/dashboard/products/details/:id/:name"
                  // / dashboard/products/details/:id/:name
                  component={DashboardInvestPage}
                  />
            </Switch>
          </div>
        )}
        {/* <Route exact path="/super_admin/admin" component={AdminTest} /> */}
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
