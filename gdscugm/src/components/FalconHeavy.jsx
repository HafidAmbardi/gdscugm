import React from "react";

const FalconHeavy = () => {
  return (
    <>
      <section class="section-animate bg-falcon-heavy"></section>
      <div class="section-inner-center">
        <h3>Falcon Heavy</h3>
        <p>The world's most powerful rocket</p>
      </div>

      <div class="stats">
        <div>
          <span class="counter" data-target="3">
            3
          </span>
          <h4>Total Launches</h4>
        </div>
        <div>
          <span class="counter" data-target="7">
            7
          </span>
          <h4>Total Landings</h4>
        </div>
        <div>
          <span class="counter" data-target="3">
            3
          </span>
          <h4>Total Reflights</h4>
        </div>
      </div>
    </>
  );
};

export default FalconHeavy;
