import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminUploadProducts from "./AdminPages/AdminUploadProducts";
import AdminAllProducts from "./AdminPages/AdminAllProducts";
import RegisterCustomer from "./AdminPages/RegisterCustomer";
import AdminCustomer from "./AdminPages/AdminCustomer";
import AdminSideBar from "./AdminSideBar";

import "./AdminStyles/admin.css";
const Admin = () => {
  const [pathName, setPathName] = useState("/");
  const linksActive = window.location.pathname;
  return (
    <div>
      <Route>
        <div className="admin">
          <AdminSideBar />
          <Switch>
            <Route exact path="/super_admin" component={AdminUploadProducts} />

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
      </Route>
    </div>
  );
};

export default Admin;
