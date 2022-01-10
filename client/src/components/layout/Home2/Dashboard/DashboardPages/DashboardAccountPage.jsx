import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../DashboardStyles/dashboard_home.css";
import "../DashboardStyles/dashboard_account.css";
function DashboardAccountPage() {
  const [activeBg, setActiveBg] = useState("accounts");
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  return (
    <div className="other2" style={{ paddingBottom: "0em" }}>
      <section className="no-bg" style={{ paddingBottom: "0em" }}>
        <div className="container">
          <div className="dashboard_account_page_area">
            <div className="account_toggle_heading">
              <span
                id="accounts"
                onClick={changeBg}
                className={
                  activeBg == "accounts"
                    ? "account_toggle account_toggle_active"
                    : "account_toggle"
                }
              >
                Accounts
              </span>
              <span
                id="security"
                onClick={changeBg}
                className={
                  activeBg == "security"
                    ? "account_toggle account_toggle_active"
                    : "account_toggle"
                }
              >
                Security
              </span>
            </div>
            <div className="account_toggle_body_area">
              <div className="account_toggle_body_area1">
                <div className="account_toggle_body_area1_title">
                  Personalize
                </div>
                <div className="account_toggle_body_area1_txts_input">
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  <div className="toggle_body_area1_cont1">
                    <div className="toggle_body_area1_cont1_txts">
                      Change Profile Picture{" "}
                      <span className="toggle_body_area1_cont1_sub_txts">
                        {" "}
                        Choose a new avatar to be used across Egoras
                      </span>
                    </div>
                    <div className="toggle_body_area1_cont1_input">
                      {" "}
                      <img
                        src="/img/profile_img.jpeg"
                        alt=""
                        className="user_upload_img"
                      />
                    </div>
                  </div>
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  <div className="toggle_body_area1_cont1">
                    <div className="toggle_body_area1_cont1_txts">
                      Full Name
                      <span className="toggle_body_area1_cont1_sub_txts">
                        {" "}
                        Customize your account name
                      </span>
                    </div>
                    <div className="toggle_body_area1_cont1_input"> </div>
                  </div>
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                </div>
              </div>
              <div className="account_toggle_body_area2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardAccountPage;
