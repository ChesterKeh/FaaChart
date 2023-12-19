import { React, useState, useEffect } from "react";

export function SearchBar() {
  const [input, setInput] = useState("");
  //   let apiLimit = new URLSearchParams({
  //     access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
  //     limit: 15,
  //   });
  const apiLink =
    "http://api.aviationstack.com/v1/flights?access_key=4a120c97de1aa4fe4b39008d0d76bb59";

  const fetchData = (value) => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          const results = data.data.filter((item) => {
            return (
              value &&
              item.airline &&
              item.airline.name &&
              item.airline.iata &&
              item.flight &&
              item.flight.number &&
              item.flight.iata
            );
          });
          console.log(results);
        } else {
          console.error(
            'Invalid data format: "data" property is not an array.'
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div className="input-wrapper">
        <input
          placeholder="Type to Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}
