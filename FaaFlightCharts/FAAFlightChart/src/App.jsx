import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import FlightTracker from "./components/FlightTracker";
import About from "./pages/About";

function App() {
  return (
    // <FlightTracker />
    <BrowserRouter>
      <Routes>
        <Route
          path="/FlightTracker"
          element={<FlightTracker />}
        />

        <Route
          path="/About"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
