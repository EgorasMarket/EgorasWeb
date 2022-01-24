import React, { useState, useEffect, Fragment } from "react";

export const CustomAlert = (props) => {
  // const [timeOut, setTimeOuut] = useState(true);

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
      <div className="setAlertDiv">{props.alert}</div>
    </div>
  );
};

// export default CustomAlert
