import React, { useState, useEffect } from "react";
import "./Styling/InputBar.css";

export default function InputBar({ onSearch }) {
  const [airline, setAirline] = useState("");
  const [flight, setFlight] = useState("");
  const [date, setDate] = useState("");

  //!Fetching api //

  //! -- Event handle change -- //
  const handleAirlineChange = (e) => {
    setAirline(e.target.value);
  };

  const handleflightChange = (e) => {
    setFlight(e.target.value);
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
    console.log(airline, flight, date);
  };

  const handleSearch = () => {
    if (airline !== "" && flight !== "" && date !== "") {
      onSearch({ airline, flight, date });
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
      <h1>Welcome to Flight Tracker</h1>
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
          value={flight}
          onChange={handleflightChange}
        />

        {/* //! Date input by ChatGPT // */}
        <select
          id="date"
          value={date}
          onChange={handleDateChange}
        >
          {generateDateOptions()}
        </select>

        {/* Button to store information */}
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
