import React, { useState, useEffect, Fragment } from "react";

export const CustomAlert = (props) => {
  // const [timeOut, setTimeOuut] = useState(true);
  //console.log(props.alertType);
  // const timer = () => {
  //   if (timeOut == false) {
  //     setTimeout(() => {
  //       setTimeOuut(false);
  //     }, 1000);
  //   } else {
  //     setTimeOuut(true);
  //   }
  // };

  return (
    <div className="alert_cont">
      <div  className={props.alertType === 'danger' ? 'setAlertErr' : 'setAlertSuccess'}>{props.alert}</div>
    </div>
  );
};

// export default CustomAlert
