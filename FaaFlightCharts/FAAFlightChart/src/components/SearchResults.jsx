// import React, { useState, useEffect } from "react";

// const SearchResults = ({ userInput, flightData }) => {
//   const [filteredFlights, setFilteredFlights] = useState([]);

//   useEffect(() => {
//     // Filter flights based on user input
//     const filtered = flightData.filter((flight) => {
//       const airlineName = flight.airline?.name || "";
//       const flightNumber = flight.flight.number || "";
//       const departureDate = flight.departure?.scheduled || "";
//       return (
//         airlineName.toLowerCase().includes(userInput.toLowerCase()) ||
//         flightNumber.toLowerCase().includes(userInput.toLowerCase()) ||
//         departureDate.toLowerCase().includes(userInput.toLowerCase())
//       );
//     });

//     setFilteredFlights(filtered);
//   }, [userInput, flightData]);

//   return (
//     <div className="SearchResultsContainer">
//       {filteredFlights.length === 0 ? (
//         <p>No matching flights found</p>
//       ) : (
//         <ul>
//           {filteredFlights.map((flight, index) => (
//             <li key={index}>
//               <hr />
//               <p>Airline: {flight.airline?.name}</p>
//               <p>Flight Number: {flight.flight.number}</p>
//               <p>Airport: {flight.departure?.airport}</p>
//               <p>Departure: {flight.departure?.iata}</p>
//               <p>Scheduled: {flight.departure?.scheduled}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

import React, { useEffect, useState } from "react";

const SearchResults = ({ userInput, flightData }) => {
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    const filtered = flightData.filter(() => {});

    setFilteredFlights(filtered);
  }, [userInput, flightData]);

  // Render the filtered flights
  return (
    <div>
      {filteredFlights.map((flight, index) => (
        <div key={index}>
          <p>Airline: {flight.airline?.name}</p>
          <p>Flight Number: {flight.flight.number}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
