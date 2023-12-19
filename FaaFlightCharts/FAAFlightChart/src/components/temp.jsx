// import { useEffect, useState } from "react";
// import "./Styling/DisplayInformation.css";
// import "./Styling/InputBar.css";
// import "./Styling/TicketPrice.css";

// export default function Temp() {
//   const [apiData, setApiData] = useState(null);

//   let apiLimit = new URLSearchParams({
//     access_key: "4a120c97de1aa4fe4b39008d0d76bb59",
//     limit: 15,
//   });
//   fetch(`http://api.aviationstack.com/v1/flights?${apiLimit}`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Filter API data based on user input
//       const filteredData = data.data.filter((flight) => {
//         return (
//           flight.airline.iata === airline &&
//           flight.flight.iata === airport &&
//           flight.flight_date === date
//         );
//       });

//       // Output filtered data
//       console.log(filteredData);
//     });

//   const [airline, setAirline] = useState("");
//   const [airport, setAirport] = useState("");
//   const [date, setDate] = useState("");

//   const handleAirlineChange = (e) => {
//     setAirline(e.target.value);
//   };

//   const handleAirportChange = (e) => {
//     setAirport(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     const selectedDate = new Date(e.target.value);
//     const today = new Date();
//     const nextThreeDays = new Date();
//     nextThreeDays.setDate(today.getDate() + 3);

//     if (selectedDate >= today && selectedDate <= nextThreeDays) {
//       setDate(e.target.value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the user input here
//     console.log(airline, airport, date);
//   };

//   const handleSearch = () => {
//     onSearch(userInput);
//   };

//   //! Date by chatgpt
//   const generateDateOptions = () => {
//     const options = [];
//     const currentDate = new Date();
//     const endDate = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);

//     for (
//       let date = new Date(currentDate);
//       date <= endDate;
//       date.setDate(date.getDate() + 1)
//     ) {
//       options.push(
//         <option
//           key={date.toISOString().split("T")[0]}
//           value={date.toISOString().split("T")[0]}
//         >
//           {date.toISOString().split("T")[0]}
//         </option>
//       );
//     }

//     return options;
//   };

//   {
//   }

//   return (
//     <>
//       <h1>Welcome to LazyPlane Tracker</h1>
//       <hr />
//       <form
//         action="text"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           id="airline"
//           placeholder="Airline (e.g Singapore Airlines)"
//           value={airline}
//           onChange={handleAirlineChange}
//         />
//         <input
//           type="text"
//           id="flight"
//           placeholder="Flight Number (e.g SIA321)"
//           value={airport}
//           onChange={handleAirportChange}
//         />

//         {/* //! Date input by ChatGPT // */}
//         <select
//           id="date"
//           value={date}
//           onChange={handleDateChange}
//         >
//           {generateDateOptions()}
//         </select>
//         <button
//           type="submit"
//           onClick={handleSearch}
//         >
//           Search Flight
//         </button>
//       </form>
//       <hr />
//       /* Depature */
//       <div id="informationContainer">
//         <div id="depatureContainer">
//           <div className="location">
//             <span>Depature</span>
//           </div>
//           <div className="timing">
//             <div className="Scheduled">
//               <span>Scheduled</span>
//             </div>
//             <div className="estimated">
//               <span>Estimated</span>
//             </div>
//             <div className="actual">
//               <span>Actual</span>
//             </div>
//             <div className="runway">
//               <span>Runway</span>
//             </div>
//           </div>
//           <div className="terminal_gate">
//             <div className="terminal">
//               <span> Terminal </span>
//             </div>
//             <div className="gate">
//               <span> Gate </span>
//             </div>
//           </div>
//         </div>

//         {/* Arrival */}
//         <div id="arrivalContainer">
//           <div className="location">
//             <span>Arrival</span>
//           </div>
//           <div className="timing">
//             <div className="Scheduled">
//               <span>Scheduled</span>
//             </div>
//             <div className="estimated">
//               <span>Estimated</span>
//             </div>
//             <div className="actual">
//               <span>Actual</span>
//             </div>
//             <div className="runway">
//               <span>Runway</span>
//             </div>
//           </div>
//           <div className="terminal_gate">
//             <div className="terminal">
//               <span>Terminal</span>
//             </div>
//             <div className="gate">
//               <span>Gate</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
