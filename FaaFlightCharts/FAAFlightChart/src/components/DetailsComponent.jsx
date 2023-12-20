import { useEffect, useState } from "react";

export function DetailsComponent({ userInput }) {
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
  const [departure, setDeparture] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [actual, setActual] = useState([]);
  const [runway, setRunway] = useState([]);
  const [terminal, setTerminal] = useState([]);
  const [gate, setGate] = useState([]);

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
        const extractedDeparture = result.data.map(
          (flight) => flight.departure
        );
        const extractedSchedule = result.data.map((flight) => flight.scheduled);
        const extractedActual = result.data.map((flight) => flight.actual);
        const extractedRunway = result.data.map(
          (flight) => flight.estimated_runway
        );
        const extractedTerminal = result.data.map((flight) => flight.terminal);
        const extractedGate = result.data.map((flight) => flight.gate);

        setAirlines(extractedAirlines);
        setFlights(extractedFlights);
        setDeparture(extractedDeparture);
        setSchedule(extractedSchedule);
        setActual(extractedActual);
        setRunway(extractedRunway);
        setTerminal(extractedTerminal);
        setGate(extractedGate);
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
            <p>Departure: {departure[index]?.iata}</p>
            <p>Scheduled: {schedule[index]}</p>
            <p>Actual: {actual[index]}</p>
            <p>Runway: {runway[index]}</p>
            <p>Terminal: {terminal[index]}</p>
            <p>Gate: {gate[index]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
