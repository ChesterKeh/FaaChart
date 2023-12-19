import { useRef } from "react";
import "../Styling/DisplayInformation.css";

export function FlightTicketInformation(props) {
  const {
    flight_date,
    flight_status,
    depature,
    airport,
    timezone,
    icao,
    terminal,
    gate,
    delay,
    scheduled,
    estimated,
    actual,
    estimated_runway,
    actual_runway,
  } = props;

  const tempId = "ABC123";
  const tempAirlineCodes = "SIA";
  const tempDepartureTime = "12:00 PM";
  const tempDuration = "2 hours";
  const tempDepartureAirportCode = "JFK";
  const tempArrivalAirportCode = "LAX";
  const tempDepartureDate = "2022-01-01";
  const tempArrivalDate = "2022-01-02";

  return (
    <>
      {/* Depature */}
      <div id="informationContainer">
        <div id="depatureContainer">
          <div className="location">
            <span>Depature</span>
          </div>
          <div className="timing">
            <div className="Scheduled">
              <span>Scheduled</span>
            </div>
            <div className="estimated">
              <span>Estimated</span>
            </div>
            <div className="actual">
              <span>Actual</span>
            </div>
            <div className="runway">
              <span>Runway</span>
            </div>
          </div>
          <div className="terminal_gate">
            <div className="terminal">
              <span>Terminal</span>
            </div>
            <div className="gate">
              <span>Gate</span>
            </div>
          </div>
        </div>

        {/* Arrival */}
        <div id="arrivalContainer">
          <div className="location">
            <span>Arrival</span>
          </div>
          <div className="timing">
            <div className="Scheduled">
              <span>Scheduled</span>
            </div>
            <div className="estimated">
              <span>Estimated</span>
            </div>
            <div className="actual">
              <span>Actual</span>
            </div>
            <div className="runway">
              <span>Runway</span>
            </div>
          </div>
          <div className="terminal_gate">
            <div className="terminal">
              <span>Terminal</span>
            </div>
            <div className="gate">
              <span>Gate</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
