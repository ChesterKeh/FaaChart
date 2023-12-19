import { useEffect, useState } from "react";
import { InputBar } from "./InputBar";

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

  const [apiData, setApiData] = useState(null);

  let apiLimit = new URLSearchParams({
    access_key: "11cf52b0e24e20b9f7df637f5692dfc4",
    limit: 10,
  });
  const apiLink = "http://api.aviationstack.com/v1/flights?";

  console.log(apiLink); // Add this line to log the apiLink

  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?${apiLimit}`)
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <h2>Depature</h2>
      {apiData ? (
        <div>
          <p>Result:{apiData.result}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
