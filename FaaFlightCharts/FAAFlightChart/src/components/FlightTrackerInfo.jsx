import { useRef, useState, useEffect } from "react";
import ArrivalCard from "./ArrvialCard";
import DepatureCard from "./DepatureCard";

export function FlightTicketInfor({ onSearch }) {
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
      <div className="FlightContainerCota">
        <ArrivalCard />
        <DepatureCard />
      </div>
    </>
  );
}
