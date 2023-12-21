import DetailsComponent from "./DetailsComponent";
import InputBar from "./InputBar";
import FlightCompare from "./FlightCompare";
import { useState, useEffect } from "react";

export default function FlightTracker() {
  const [flightData, setFlightData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [userInput, setUserInput] = useState({});

  //!API Section //
  const apiLimit = new URLSearchParams({
    access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
    limit: 10,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.aviationstack.com/v1/flights?${apiLimit}`
      );
      const result = await response.json();
      setFlightData(result.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };
  //!API Section //

  const handleSearch = (userInput) => {
    setUserInput(userInput);

    const matchedFlights = comparedFlights(userInput);

    setSearchResults(matchedFlights);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <FlightCompare
          userInput={userInput}
          flightData={flightData}
        />
        <InputBar onSearch={handleSearch} />
        <DetailsComponent flightData={flightData} />
      </div>
    </>
  );
}
