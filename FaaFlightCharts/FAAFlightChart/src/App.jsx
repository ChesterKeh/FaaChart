import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { InputBar } from "./components/InputBar";
import { FlightTicketInformation } from "./components/PlaneTicket/FlightTicketInformation";
import { DepartureData } from "./components/DepartureData";
import "./App.css";
// import Temp from "./components/temp";
import { SearchBar } from "./components/searchBar";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleSearch = (input) => {
    setUserInput(input);
  };

  return (
    <>
      {/* <Temp /> */}
      <InputBar onSearch={handleSearch} />
      <FlightTicketInformation />
      <DepartureData userInput={userInput} />
      <SearchBar />
    </>
  );
}

export default App;
