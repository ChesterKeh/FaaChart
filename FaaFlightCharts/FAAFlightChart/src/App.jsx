import React, { useEffect, useState } from "react";
import "./App.css";
import FlightTracker from "./components/FlightTracker";
// import Temp from "./components/temp";

function App() {
  const [userInput, setUserInput] = useState("");
  const [onSearch, setOnSearch] = useState("");

  return (
    <>
      <FlightTracker />
    </>
  );
}

export default App;
