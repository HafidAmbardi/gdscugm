import React from "react";

const Dragon = () => {
  return (
    <>
      <section class="section-animate bg-dragon"></section>
      <div class="section-inner-center">
        <h3>Dragon</h3>
        <p>Sending humans and cargo into space</p>
      </div>

      <div class="stats">
        <div>
          <span class="counter" data-target="34">
            34
          </span>
          <h4>Total Launches</h4>
        </div>
        <div>
          <span class="counter" data-target="31">
            31
          </span>
          <h4>Visits to the ISS</h4>
        </div>
        <div>
          <span class="counter" data-target="13">
            13
          </span>
          <h4>Reflow Missions</h4>
        </div>
      </div>
    </>
  );
};

export default Dragon;
