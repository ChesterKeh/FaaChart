import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { InputBar } from "./components/InputBar";
import { FlightTicketInformation } from "./components/PlaneTicket/FlightTicketInformation";
import { DepartureData } from "./components/DepartureData";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleSearch = (input) => {
    setUserInput(input);
  };

  return (
    <>
      <InputBar onSearch={handleSearch} />
      <FlightTicketInformation />
      <DepartureData userInput={userInput} />
    </>
  );
}

export default App;
