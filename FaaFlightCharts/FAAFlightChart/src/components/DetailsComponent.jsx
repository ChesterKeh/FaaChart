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

  const token =
    "patTvUzdUJ2NAazjE.73450dd0809ae9b13031466645839cc73f38954411a1de2c9c88f82e2839e291";
  const url = "https://api.airtable.com/v0/appC6QkMUSDhFdLlq/SavedFlights";

  const handleAddtoSave = async (flight) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fields: {
          Airline: flight.airline?.name || "", // Replace "" with a default value if needed
          FlightNumber: flight.flight?.number || "", // Replace "" with a default value if needed
          date: flight.departure?.scheduled || "",
        },
      }),
    });

    if (!response.ok) {
      console.error(
        "Error adding to save:",
        response.status,
        response.statusText
      );
    }
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
                    </div>
                  </li>
                  <div>
                    <button onClick={() => handleAddtoSave(flight)}>
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
    </>
  );
}

export default DetailsComponent;
