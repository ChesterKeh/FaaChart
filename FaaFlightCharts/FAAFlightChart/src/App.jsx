import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import FlightTracker from "./components/FlightTracker";
import About from "./pages/about";
import Homepage from "./pages/homepage";

function App() {
  return (
    <header>
      <nav>
        <h1>HomePage</h1>
        <Link to="/">Homepage </Link>
        <NavLink to="FlightTracker">Flight Tracker</NavLink>
      </nav>
      {/* <FlightTracker /> */}
      <main>
        <Routes>
          <Route
            index
            element={<Homepage />}
          />
          <Route
            path="/FlightTracker"
            element={<FlightTracker />}
          />
          <Route
            path="/About"
            element={<About />}
          />
        </Routes>
      </main>
    </header>
  );
}

export default App;
