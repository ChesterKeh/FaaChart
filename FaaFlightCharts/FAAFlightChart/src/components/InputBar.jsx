import React, { useState, useEffect } from "react";
import "./Styling/InputBar.css";

export function InputBar({ onSearch }) {
  const [userInput, setUserInput] = useState("");
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");

  //!Fetching api //

  //! -- Event handle change -- //
  const handleAirlineChange = (e) => {
    setAirline(e.target.value);
  };

  const handleFlightNumberChange = (e) => {
    setFlightNumber(e.target.value);
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
    console.log(airline, flightNumber, date);
  };

  const handleSearch = () => {
    if (airline !== "" && flightNumber !== "" && date !== ""  ) {
      onSearch(setUserInput);
    } else {
      // Handle the case where not all information is filled
      console.log("Please fill in all required information.");
    }
  }; //! -- Event handle change -- //

  //! Date by chatgpt
  const generateDateOptions = () => {
    const options = [];
    const currentDate = new Date();
    const endDate = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);

    for (
      let date = new Date(currentDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      options.push(
        <option
          key={date.toISOString().split("T")[0]}
          value={date.toISOString().split("T")[0]}
        >
          {date.toISOString().split("T")[0]}
        </option>
      );
    }

    return options;
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
          value={flightNumber}
          onChange={handleFlightNumberChange}
        />

        {/* //! Date input by ChatGPT // */}
        <select
          id="date"
          value={date}
          onChange={handleDateChange}
        >
          {generateDateOptions()}
        </select>
        <button
          type="submit"
          onClick={handleSearch}
        >
          Search Flight
        </button>
      </form>
      <hr />
    </>
  );
}
