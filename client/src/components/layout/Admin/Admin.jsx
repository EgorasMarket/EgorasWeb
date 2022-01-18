import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          </Switch>
        </div>
      </Route>
    </div>
  );
};

export default Admin;
