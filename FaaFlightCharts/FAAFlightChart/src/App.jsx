import React, { useEffect, useState } from "react";
import "./App.css";
import { DetailsComponent } from "./components/DetailsComponent";
import { InputBar } from "./components/InputBar";
// import Temp from "./components/temp";

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchInput) => {
    setUserInput(searchInput);
  };

  return (
    <>
      <InputBar onSearch={handleSearch} />
      <DetailsComponent searchResults={searchResults} />
    </>
  );
}

export default App;
