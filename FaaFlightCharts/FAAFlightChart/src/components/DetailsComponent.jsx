import { useEffect, useState } from "react";
import "./Styling/DetailsComponent.css";

export function DetailsComponent({ userInput }) {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiLimit = new URLSearchParams({
    access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
    limit: 4,
  });

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://api.aviationstack.com/v1/flights?${apiLimit}`
        );
        const result = await response.json();
        const extractedData = extractData(result.data);
        setFlightData(extractedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Flight Information</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching flight data: {error.message}</p>}
      {!loading && !error && (
        <div className="FlightDetailsContainer">
          <ul>
            {flightData.map((flight, index) => (
              <li key={index}>
                <h3>Depature</h3>
                <hr />
                <p>Airline: {flight.airline?.name}</p>
                <p>Flight Number: {flight.flight.number}</p>
                <p>Airport: {flight.departure?.airport}</p>
                <p>Departure: {flight.departure?.iata}</p>
                <p>Scheduled: {flight.departure?.scheduled}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default DetailsComponent;
