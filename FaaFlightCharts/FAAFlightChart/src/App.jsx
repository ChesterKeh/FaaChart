import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { InputBar } from "./components/InputBar";
import { FlightTicketInformation } from "./components/PlaneTicket/FlightTicketInformation";
import { DepartureData } from "./components/DepartureData";
import "./App.css";
// import Temp from "./components/temp";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleSearch = (searchInput) => {
    setUserInput(searchInput);
  };

  return (
    <>
      {/* <Temp /> */}
      <InputBar onSearch={handleSearch} />
      <FlightTicketInformation onSearch={handleSearch} />
      <DepartureData />
      {/* <SearchBar /> */}
    </>
  );
}

export default App;
