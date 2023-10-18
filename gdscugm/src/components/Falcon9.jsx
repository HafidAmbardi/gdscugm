import React from "react";
import "../App.css";
const Falcon9 = () => {
  return (
    <>
      <section className="section-animate bg-falcon-9"></section>
      <div className="section-inner-center">
        <h3>Falcon 9</h3>
        <p>First orbital className rocket capable of reflight</p>
      </div>

      <div className="stats">
        <div>
          <span className="counter" data-target="3">
            3
          </span>
          <h4>Total Launches</h4>
        </div>
        <div>
          <span className="counter" data-target="7">
            7
          </span>
          <h4>Total Landings</h4>
        </div>
        <div>
          <span className="counter" data-target="3">
            3
          </span>
          <h4>Total Reflights</h4>
        </div>
      </div>
    </>
  );
};

export default Falcon9;
