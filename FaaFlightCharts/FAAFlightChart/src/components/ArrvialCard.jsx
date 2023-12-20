import React from "react";

const ArrivalCard = () => {
  // Your component code here
  return (
    <div id="arrivalContainer">
      <div className="location">
        <p>Arrival</p>
      </div>
      <div className="timing">
        <div className="Scheduled">
          <p>Scheduled</p>
        </div>
        <div className="estimated">
          <p>Estimated</p>
        </div>
        <div className="actual">
          <p>Actual</p>
        </div>
        <div className="runway">
          <p>Runway</p>
        </div>
      </div>
      <div className="terminal_gate">
        <div className="terminal">
          <p>Terminal</p>
        </div>
        <div className="gate">
          <p>Gate</p>
        </div>
      </div>
    </div>
  );
};
export default ArrivalCard;
