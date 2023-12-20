import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [input, setInput] = useState("");

  let apiKey = new URLSearchParams({
    access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
    limit: 15,
  });

  const apiURL = `http://api.aviationstack.com/v1/flights?${apiKey}`;

  const fetchData = (value) => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);

        // Check if json is an array
        if (Array.isArray(json)) {
          const results = json.filter((flight) => {
            // Check if the flight and airline exist before accessing properties
            return (
              flight &&
              flight.airline &&
              flight.airline.name &&
              flight.airline.name
                .toLowerCase()
                .includes(airlineName.toLowerCase())
            );
          });

          console.log("Filtered Results:", results);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // const fetchData = (value) => {
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((user) => {
  //         return (
  //           value &&
  //           user &&
  //           user.name &&
  //           user.name.toLowerCase().includes(value)
  //         );
  //       });
  //       console.log(results);
  //     });
  // };

  // const fetchData = (value) => {
  //     fetch(apiURL)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //       });
  //   };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Airline..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
