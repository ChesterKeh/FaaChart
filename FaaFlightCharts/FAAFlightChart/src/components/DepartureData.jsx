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

  //   let apiLimit = new URLSearchParams({
  //     access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
  //     limit: 15,
  //   });
  //   const apiLink = "http://api.aviationstack.com/v1/flights?";

  //   console.log(apiLink); // Add this line to log the apiLink

  //   useEffect(() => {
  //     fetch(`http://api.aviationstack.com/v1/flights?${apiLimit}`)
  //       .then((response) => response.json())
  //       .then(console.log);
  //   }, []);

  return <div></div>;
}
