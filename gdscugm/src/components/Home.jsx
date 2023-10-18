import React from "react";
import "../App.css";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import SectionE from "./SectionE";
import SectionF from "./SectionF";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <body>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
    </body>
  );
};

export default Home;
