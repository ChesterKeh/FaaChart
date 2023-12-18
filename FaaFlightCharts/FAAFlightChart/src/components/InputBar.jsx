import React, { useState } from "react";
import "./Styling/InputBar.css";

export function InputBar({ onSearch }) {
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

  const handleSearch = () => {
    onSearch(userInput);
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
