import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FlightTracker = () => {
    
    const [startDate, setStartDate] = useState(new Date()); // Today's date as default
    const [endDate, setEndDate] = useState(new Date());

    // Function to handle date changes
    const handleDateChange = (date) => {
        setStartDate(date);
        setEndDate(new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000)); // Set end date to 3 days later
    };

    return (
        <div>
            {/* Other components, e.g., airline and flight number inputs */}
            <label>Select Date Range:</label>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
            />

            {/* Display selected date range */}
            <p>
                Selected Date Range: {startDate.toDateString()} to{" "}
                {endDate.toDateString()}
            </p>

            {/* Other components and logic */}
        </div>
        
    );
};

