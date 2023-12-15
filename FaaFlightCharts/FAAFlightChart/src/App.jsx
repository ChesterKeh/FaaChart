import React from "react";
import { useState } from "react";

import { InputBar } from "../components/InputBar";
import "./App.css";
import { DisplayInformation } from "../components/DisplayInformation";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to FlightChart Getter</h1>
      <hr />
      <p>Country of Origin</p>
      <InputBar />
      <hr />
      <DisplayInformation />
      <p className="read-the-docs">
        Welcome to get your FlightCharts & maybe out of date
      </p>
    </>
  );
}

export default App;
