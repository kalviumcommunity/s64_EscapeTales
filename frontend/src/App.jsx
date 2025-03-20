import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/Pages/LandingPage";
import StoriesPage from "./components/Pages/StoriesPage";
import Navbar from "./components/Common/Navbar";
import UpdateEntity from "./components/Pages/UpdateEntity";
import NotFoundPage from "./components/Pages/NotFoundPage";
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-transition">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/update-entity" element={<UpdateEntity />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;