import React from "react";
import "./Styling/DetailsComponent.css";

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

  const matchedFlights = compareFlights();

  return (
    <div className="FlightCompareOutput">
      {matchedFlights.length > 0 ? (
        <ul>
          {matchedFlights.map((flight, index) => (
            <div key={index}>
              <div className="DepartureFlights">
                <h3>Departure</h3>
                <hr />
                <p>
                  <strong>Airline:</strong> {flight.airline?.name}
                </p>
                <p>
                  <strong>FlightNumber:</strong> {flight.flight.number}
                </p>
                <p>
                  <strong>Airport:</strong> {flight.departure?.airport}
                </p>
                <p>
                  <strong>Departure:</strong> {flight.departure?.iata}
                </p>
                <p>
                  <strong>Scheduled:</strong> {flight.departure?.scheduled}
                </p>
              </div>
              <hr />
              <div className="ArrivalFlights">
                <h3>Arrival</h3>
                <hr />
                <p>
                  <strong>Airline:</strong> {flight.airline?.name}
                </p>
                <p>
                  <strong>Flight Number:</strong> {flight.flight.number}
                </p>
                <p>
                  <strong>Airport:</strong> {flight.arrival?.airport}
                </p>
                <p>
                  <strong>Arrival:</strong> {flight.arrival?.iata}
                </p>
                <p>
                  <strong>Scheduled:</strong> {flight.arrival?.scheduled}
                </p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No flights found for the given criteria.</p>
      )}
    </div>
  );
}
