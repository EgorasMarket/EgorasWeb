import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminTest from "./AdminPages/AdminTest";
import AdminUploadProducts from "./AdminPages/AdminUploadProducts";
import AdminAllProducts from "./AdminPages/AdminAllProducts";
import RegisterCustomer from "./AdminPages/RegisterCustomer";
import AdminSideBar from "./AdminSideBar";

import "./AdminStyles/admin.css";
const Admin = () => {
  const currentPage = window.location.pathname;
  const [pathName, setPathName] = useState("/");
  const linksActive = window.location.pathname;
  return (
    <div>
      <Route>
        <div className="admin">
          <AdminSideBar />
          <Switch>
            <Route exact path="/super_admin" component={AdminUploadProducts} />
            <Route exact path="/super_admin/admin" component={AdminTest} />
            <Route
              exact
              path="/super_admin/register_user"
              component={RegisterCustomer}
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
