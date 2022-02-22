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
import Wallet from "../Wallet/Wallet";
import axios from "axios";
import { PRODUCT_LOADED, API_URL2 as api_url2 } from "../../../actions/types";
import Item_details_main2 from "./AdminPages/items";

import "./AdminStyles/admin.css";
import Page from "./AdminPages/dashboardIn";
import ItemsPage2 from "./AdminPages/items";

const Admin = ({ isAuthenticated, loading }) => {
  const [splashScreen, setSplashScreen] = useState(true);
  const [roleDisplay, setRoleDisplay] = useState({
    Role: "",
  });

  const { Role } = roleDisplay;
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


  const dapp =  window.location.pathname;
  const dapp2 = window.location.pathname;

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/info", null, config)
      .then((data) => {
        console.log(data.data.user, "line_ful");
        setRoleDisplay({
          Role: data.data.user.role,
        });
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

           

              {Role === "MEDIA" ? (
               <> 
               <Route
                  exact
                  path="/super_admin"
                  component={AdminUploadProducts}
                />
                {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
              </>
              ) : Role === "BUSINESS_ADMIN" ? (
              <>
                <Route
                  exact
                  path="/super_admin/register_user"
                  component={RegisterCustomer}
                />
                {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
              </>
              ) : Role === "CASHIER" || Role === "CUSTOMER_SERVICE" ? (
                <>
                  <Route
                    exact
                    path="/super_admin/all_user"
                    component={AdminCustomer}
                  />

                <Route
                exact
                path="/super_admin/overview"
                // path="/dashboard/products/details/:id/:name"
                // / dashboard/products/details/:id/:name
                component={Page}
              />

               {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
                  <Route
                    exact
                    path="/super_admin/user_wallet"
                    component={Wallet}
                  />

                  <Route
                    exact
                    path="/super_admin/details/:id/:name"
                    component={Item_details_main2}
                  />
                </>
              ) : Role === "HOD_MEDIA" ? (
                <><Route
                  exact
                  path="/super_admin/all_products"
                  component={AdminAllProducts}
                />
                {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
              </>
              ) :  <Route
              exact
              path="/super_admin/all_products_view/:id/:name"
              // path="/dashboard/products/details/:id/:name"
              // / dashboard/products/details/:id/:name
              component={AdminAllView}
            />

                }

                  

              

             
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
