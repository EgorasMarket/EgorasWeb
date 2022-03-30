import React, { useEffect } from "react";
import "./print_page.css";
export const PrintPage = () => {
  //   useEffect(() => {
  //     return window.print();
  //   }, []);
  return (
    <div>
      <section className="printable_section">
        <div className="container">
          <form action="">
            <label htmlFor="name">
              Name
              <input type="text" />
            </label>

            <label htmlFor="name">
              First name
              <input type="text" />
            </label>
            <label htmlFor="name">
              address
              <input type="text" />
            </label>
            <label htmlFor="name">
              office branch
              <input type="text" />
            </label>
          </form>
        </div>
      </section>
    </div>
  );
};
