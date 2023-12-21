import React, { useState, useEffect } from "react";

export default function SaveFlights() {
  const [savedFlights, setSavedFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token =
    "patTvUzdUJ2NAazjE.73450dd0809ae9b13031466645839cc73f38954411a1de2c9c88f82e2839e291";
  const url = "https://api.airtable.com/v0/appC6QkMUSDhFdLlq/SavedFlights";

  const fetchSavedFlights = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching saved flights: ${response.statusText}`);
      }

      const data = await response.json();
      setSavedFlights(data.records);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedFlights();
  }, []);

  return (
    <div className="SavedFlightsContainer">
      <h1>Saved Flights</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching saved flights: {error.message}</p>}
      {!loading && !error && savedFlights.length > 0 && (
        <ul>
          {savedFlights.map((savedFlight, index) => (
            <li key={index}>
              <p>
                <strong>Airline:</strong> {savedFlight.fields.Airline}
              </p>
              <p>
                <strong>Flight Number:</strong>{" "}
                {savedFlight.fields.FlightNumber}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
