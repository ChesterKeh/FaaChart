import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import FlightTracker from "./components/FlightTracker";

function App() {
  return (
    // <FlightTracker />
    <BrowserRouter>
      <Routes>
        <Route
          path="/FlightTracker"
          element={<FlightTracker />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
