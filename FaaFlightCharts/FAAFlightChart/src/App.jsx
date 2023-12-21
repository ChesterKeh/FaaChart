import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import FlightTracker from "./components/FlightTracker";
import About2 from "./pages/About2";
import Homepage from "./pages/Homepage";
import SaveFlights from "./pages/SaveFlights";
import SearchFlight from "./pages/SearchFlight";

function App() {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <Link
          to="/"
          className="nav-link"
        >
          <h1 className="app-title">TheLazyRocket </h1>
        </Link>
        <NavLink
          to="About2"
          className="nav-link"
        >
          About
        </NavLink>
        <NavLink
          to="SearchFlight"
          className="nav-link"
        >
          Search Flights
        </NavLink>

        <NavLink
          to="SaveFlights"
          className="nav-link"
        >
          Saved Flights
        </NavLink>
        <NavLink
          to="FlightTracker"
          className="nav-link"
        >
          Flight Tracker
        </NavLink>
      </nav>
      <hr />

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
            path="/SearchFlight"
            element={<SearchFlight />}
          />

          <Route
            path="/About2"
            element={<About2 />}
          />

          <Route
            path="/SaveFlights"
            element={<SaveFlights />}
          />
        </Routes>
      </main>
    </header>
  );
}

export default App;
