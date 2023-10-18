import React from "react";

const SectionA = () => {
  return (
    <section className="section-a">
      <div className="section-inner">
        <h4>Upcoming Launch</h4>
        <h2>CRS-25 Mission</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>rewatch</span>
        </a>
      </div>
      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="white"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default SectionA;
