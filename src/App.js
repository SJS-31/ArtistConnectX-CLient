import React from "react";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Community from "./Pages/Community/Community";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
