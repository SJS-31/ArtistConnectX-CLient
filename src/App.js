import React from "react";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Community from "./Pages/Community/Community";
import Profile from './Pages/Profile/Dashboard'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Community" element={<Community />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
