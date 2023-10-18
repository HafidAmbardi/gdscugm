import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Falcon9 from "./components/Falcon9";
import Footer from "./components/Footer";
import FalconHeavy from "./components/FalconHeavy";
import Dragon from "./components/Dragon";
import Bonus from "./components/Bonus";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="falcon_9" element={<Falcon9 />} />
        <Route path="falcon_heavy" element={<FalconHeavy />} />
        <Route path="dragon" element={<Dragon />} />
        <Route path="bonus" element={<Bonus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
