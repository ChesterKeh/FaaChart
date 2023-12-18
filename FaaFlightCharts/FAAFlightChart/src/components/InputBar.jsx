import React, { useState } from "react";
import "./Styling/InputBar.css";

export function InputBar() {
  const [airline, setAirline] = useState("");
  const [airport, setAirport] = useState("");
  const [date, setDate] = useState("");

  const handleAirlineChange = (e) => {
    setAirline(e.target.value);
  };

  const handleAirportChange = (e) => {
    setAirport(e.target.value);
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const nextThreeDays = new Date();
    nextThreeDays.setDate(today.getDate() + 3);

    if (selectedDate >= today && selectedDate <= nextThreeDays) {
      setDate(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the user input here
    console.log(airline, airport, date);
  };

  return (
    <>
      <h1>Welcome to LazyPlane Tracker</h1>
      <hr />
      <form
        action="text"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="airline"
          placeholder="Airline (e.g Singapore Airlines)"
          value={airline}
          onChange={handleAirlineChange}
        />
        <input
          type="text"
          id="flight"
          placeholder="Flight Number (e.g SIA321)"
          value={airport}
          onChange={handleAirportChange}
        />

        {/* //! Date input by ChatGPT // */}
        <input
          type="date"
          id="date"
          placeholder="Date"
          value={date}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]}
          max={
            new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split("T")[0]
          }
        />
        <button type="submit">Search Flight</button>
      </form>
      <hr />
    </>
  );
}

// const UserInputComponent = ({ id, name, initialValue, label }) => {
//   const [inputValue, setInputValue] = useState(initialValue);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the user input here
//     console.log(inputValue);
//   };

// return (
//   <>
//     <h1>LazyPlane Tracker</h1>
//     <hr />
//     <p>Where would you like to go?</p>

//     <header style={{ display: "flex", justifyContent: "center" }}>
//       <form
//         action="text"
//         style={{ display: "flex", flexDirection: "row" }}
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           id="fname"
//           airline={inputValue}
//           onChange={handleInputChange}
//           style={{ marginRight: "10px" }}
//         />
//         <select
//           id="currency"
//           name="currency"
//           style={{ marginRight: "10px" }}
//           value={inputValue}
//           onChange={handleInputChange}
//         >
//           <option>---Pick an airport---</option>
//           <option value="SGN">Ho Chi Minh City </option>
//           <option value="HAN">Hanoi</option>
//         </select>
//         <button type="submit">Search</button>
//       </form>
//     </header>
//     <br />
//     <hr />
//     <h5>Temporary Place holder for plane ticket</h5>
//   </>
// );
