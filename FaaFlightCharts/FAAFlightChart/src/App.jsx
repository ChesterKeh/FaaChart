import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { InputBar } from "./components/InputBar";
import { FlightTicketInformation } from "./components/PlaneTicket/FlightTicketInformation";

function App() {
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    const FlightAPI =
      // "https://api.flightapi.io/roundtrip/657d513f57d0fa338ac322be/HAN/SGN/2024-04-10/2024-04-12/1/0/1/Economy/USD";

    const makeApiCall = () => {
      fetch(FlightAPI)
        .then((res) => res.json())
        .then((data) => {
          console.log("FlightApi", data);
          setFlightData(data);
        });
    };
    makeApiCall();
  }, []);

  return (
    <>
      <InputBar />
      <FlightTicketInformation />
    </>
  );
}

export default App;
