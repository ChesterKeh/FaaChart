import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { InputBar } from "./components/InputBar";
import { FlightTicketInformation } from "./components/PlaneTicket/FlightTicketInformation";
import "./App.css";
import { DepartureData } from "./components/DepartureData";

function App() {
  const [flightData, setFlightData] = useState([]);

  //! too call the actual api//

  // useEffect(() => {
  //   const FlightAPI =
  //     // "https://api.flightapi.io/roundtrip/657d513f57d0fa338ac322be/HAN/SGN/2024-04-10/2024-04-12/1/0/1/Economy/USD";

  //   const makeApiCall = () => {
  //     fetch(FlightAPI)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("FlightApi", data);
  //         setFlightData(data);
  //       });
  //   };
  //   makeApiCall();
  // }, []);

  let apiLimit = new URLSearchParams({
    access_key: "11cf52b0e24e20b9f7df637f5692dfc4",
    limit: 10,
  });
  const apiLink = "http://api.aviationstack.com/v1/flights?";

  console.log(apiLink); // Add this line to log the apiLink

  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?${apiLimit}`)
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return (
    <>
      <InputBar />
      <FlightTicketInformation />
    </>
  );
}

export default App;
