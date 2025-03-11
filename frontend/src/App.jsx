import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import StoriesPage from "./components/StoriesPage";
import Navbar from "./components/Navbar";
import UpdateEntity from "./components/UpdateEntity";
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/update-entity" element={<UpdateEntity />} />
      </Routes>
    </Router>
  );
};

export default App;



