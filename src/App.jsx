import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BestCity from "./pages/BestCity";
import TopCities from "./pages/TopCity";


function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the BestCity page */}
        <Route path="/" element={<BestCity />} />
        
        {/* Define the route for the TopCities page */}
        <Route path="/top-cities" element={<TopCities />} />
      </Routes>
    </Router>
  );
}

export default App;
