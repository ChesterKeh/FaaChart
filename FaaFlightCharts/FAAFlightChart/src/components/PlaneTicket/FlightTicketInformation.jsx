import { useRef } from "react";
import { TicketPrice } from "./TicketPrice";
import "../Styling/DisplayInformation.css";

export function FlightTicketInformation(props) {
  const {
    id,
    airlineCodes,
    departureTime,
    departureDate,
    duration,
    departureAirportCode,
    arrivalAirportCode,
    arrivalDate,
  } = props;

  const tempId = "ABC123";
  const tempAirlineCodes = "XYZ";
  const tempDepartureTime = "12:00 PM";
  const tempDuration = "2 hours";
  const tempDepartureAirportCode = "JFK";
  const tempArrivalAirportCode = "LAX";
  const tempDepartureDate = "2022-01-01";
  const tempArrivalDate = "2022-01-02";

  return (
    <>
      <div id="planebox">
        <div id="Planeticket">
          <h4 className="ticket-id">{tempId}</h4>
          <p className="airline-codes">{tempAirlineCodes}</p>
          <p className="departure-time">{tempDepartureTime}</p>
          <p className="duration">{tempDuration}</p>
          <p className="departure-airport-code">{tempDepartureAirportCode}</p>
          <p className="arrival-airport-code">{tempArrivalAirportCode}</p>
          <p className="departure-date">{tempDepartureDate}</p>
          <p className="arrival-date">{tempArrivalDate}</p>
        </div>
        <TicketPrice />
      </div>
      <p className="read-the-docs">
        Welcome to get your FlightCharts & maybe out of date
      </p>
    </>
  );
}
