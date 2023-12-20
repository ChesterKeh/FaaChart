import { useRef, useState, useEffect } from "react";
import "../Styling/DisplayInformation.css";

export function FlightTicketInformation({ onSearch }) {
  // const userInput = onSearch;
  // console.log(userInput);

  // const [apiData, setApiData] = useState("");

  // let apiLimit = new URLSearchParams({
  //   access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
  //   limit: 15,
  // });
  // const apiLink = "http://api.aviationstack.com/v1/flights?";

  // console.log(apiLink); // Add this line to log the apiLink

  // useEffect(() => {
  //   fetch(`http://api.aviationstack.com/v1/flights?${apiLimit}`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

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
              <span> Terminal </span>
            </div>
            <div className="gate">
              <span> Gate </span>
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
// const {
//   flight_date,
//   flight_status,
//   depature,
//   airport,
//   timezone,
//   icao,
//   terminal,
//   gate,
//   delay,
//   scheduled,
//   estimated,
//   actual,
//   estimated_runway,
//   actual_runway,
// } = props;
