import { useEffect, useState } from "react";
import "./Styling/DetailsComponent.css";

export function DetailsComponent({ flightData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const extractData = (data) => {
    return data.map((flight) => ({
      airline: flight.airline,
      flight: flight.flight,
      departure: flight.departure,
      scheduled: flight.scheduled,
      actual: flight.actual,
      estimatedRunway: flight.estimated_runway,
      terminal: flight.terminal,
      gate: flight.gate,
      airport: flight.airport,
    }));
  };

  return (
    <>
      <h1>Flight Information</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching flight data: {error.message}</p>}
      {!loading &&
        !error &&
        flightData &&
        Array.isArray(flightData) &&
        flightData.length > 0 && (
          <div className="FlightDetailsContainer">
            <ul>
              {flightData.map((flight, index) => (
                <div className="FlightContainer">
                  <li key={index}>
                    <div className="DepatureFlights">
                      <h3>Departure</h3>
                      <hr />
                      <p>Airline: {flight.airline?.name}</p>
                      <p>Flight Number: {flight.flight.number}</p>
                      <p>Airport: {flight.departure?.airport}</p>
                      <p>Departure: {flight.departure?.iata}</p>
                      <p>
                        Scheduled:
                        <br /> {flight.departure?.scheduled}
                      </p>
                    </div>
                    <hr />
                    <div className="ArrivalFlights">
                      <h3>Arrival </h3>
                      <hr />
                      <p>Airline: {flight.airline?.name}</p>
                      <p>Flight Number: {flight.flight.number}</p>
                      <p>Airport: {flight.arrival?.airport}</p>
                      <p>Arrival: {flight.arrival?.iata}</p>
                      <p>Scheduled: {flight.arrival?.scheduled}</p>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
    </>
  );
}

export default DetailsComponent;
