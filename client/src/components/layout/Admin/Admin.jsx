import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminTest from "./AdminPages/AdminTest";
import AdminUploadProducts from "./AdminPages/AdminUploadProducts";
import AdminSideBar from "./AdminSideBar";

import "./AdminStyles/admin.css";
const Admin = () => {
  return (
    <div>
      <Route>
        <div className="admin">
          <AdminSideBar />
          <Switch>
            <Route exact path="/super_admin" component={AdminUploadProducts} />
            <Route exact path="/super_admin/admin" component={AdminTest} />
          </Switch>
        </div>
      </Route>
    </div>
  );
};

export default Admin;
