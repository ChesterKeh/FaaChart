import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import FlightTracker from "./components/FlightTracker";
import About2 from "./pages/About2";
import Homepage from "./pages/homepage";

function App() {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <h1 className="app-title">TheLazyRocket </h1>
        <Link
          to="/"
          className="nav-link"
        >
          Homepage
        </Link>
        <NavLink
          to="About2"
          className="nav-link"
        >
          About
        </NavLink>
        <NavLink
          to="FlightTracker"
          className="nav-link"
        >
          Flight Tracker
        </NavLink>
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
            path="/About2"
            element={<About2 />}
          />
        </Routes>
      </main>
    </header>
  );
}

export default App;
