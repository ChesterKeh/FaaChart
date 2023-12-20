import React from "react";

const DepatureCard = () => {
  // Your component code here
  return (
    <>
      <div id="informationContainer">
        <div id="depatureContainer">
          <div className="location">
            <p>Depature</p>
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
              <p> Terminal </p>
            </div>
            <div className="gate">
              <p> Gate </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepatureCard;
