import { useEffect, useState } from "react";

export function DepartureData({ userInput }) {
  //   const {
  //     flight_date,
  //     flight_status,
  //     departure,
  //     airport,
  //     timezone,
  //     icao,
  //     terminal,
  //     gate,
  //     delay,
  //     scheduled,
  //     estimated,
  //     actual,
  //     estimated_runway,
  //     actual_runway,
  //   } = props;

  let apiLimit = new URLSearchParams({
    access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
    limit: 15,
  });
  const apiLink = "http://api.aviationstack.com/v1/flights?";
  console.log(apiLink); // Add this line to log the apiLink

  const [airlines, setAirlines] = useState([]);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.aviationstack.com/v1/flights?${apiLimit}`
        );
        const result = await response.json();

        // Extract airline and flight information
        const extractedAirlines = result.data.map((flight) => flight.airline);
        const extractedFlights = result.data.map((flight) => flight.flight);

        setAirlines(extractedAirlines);
        setFlights(extractedFlights);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Flight Information</h1>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            <p>Airline: {airlines[index]?.name}</p>
            <p>Flight Number: {flight.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
