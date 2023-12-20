import React from "react";

export default function FlightCompare({ userInput, flightData }) {
  const compareFlights = () => {
    console.log("User Input:", userInput);
    console.log("Original Flight Data:", flightData);

    const matchedFlights = flightData.filter((flight) => {
      return (
        flight.airline?.name === userInput.airline &&
        flight.flight?.number === userInput.flight
      );
    });

    // Log the matched flights to the console
    console.log("Matched Flights:", matchedFlights);

    return matchedFlights;
  };

  //   const compareFlights = () => {
  // Temporary hardcoded values for testing
  //     const testUserInput = {
  //       airline: "Virgin Atlantic",
  //       flight: "8480",
  //     };

  //     console.log("User Input (Temporary):", testUserInput);
  //     console.log("Original Flight Data:", flightData);

  //     const matchedFlights = flightData.filter((flight) => {
  //       return (
  //         flight.airline?.name === testUserInput.airline &&
  //         flight.flight?.number === testUserInput.flight
  //       );
  //     });

  //     // Log the matched flights to the console
  //     console.log("Matched Flights:", matchedFlights);

  //     return matchedFlights;
  //   };

  const matchedFlights = compareFlights();

  return (
    <>
      {matchedFlights.length > 0 ? (
        <ul>
          {matchedFlights.map((flight, index) => (
            <li key={index}>
              <p>Airline: {flight.airline?.name}</p>
              <p>Flight Number: {flight.flight.number}</p>
              <p>Airport: {flight.departure?.airport}</p>
              <p>Departure: {flight.departure?.iata}</p>
              <p>Scheduled: {flight.departure?.scheduled}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found for the given criteria.</p>
      )}
    </>
  );
}
