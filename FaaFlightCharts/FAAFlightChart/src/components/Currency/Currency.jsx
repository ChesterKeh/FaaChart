import React, { useState } from "react";

const Currency = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    const currencies = [
        { code: "USD", name: "United States Dollar" },
        { code: "EUR", name: "Euro" },
        { code: "GBP", name: "British Pound Sterling" },
        // Add more currencies here...
    ];

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    // Function to perform currency conversion
    const convertCurrency = (amount, fromCurrency, toCurrency) => {
        // Implement your currency conversion logic here...
        // Return the converted amount
    };

    return (
        <div>
            <select
                id="currency"
                name="currency"
                style={{ marginRight: "10px" }}
                value={selectedCurrency}
                onChange={handleCurrencyChange}
            >
                {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                        {currency.name}
                    </option>
                ))}
            </select>
            {/* Add other components or logic related to currency conversion */}
        </div>
    );
};

export default Currency;
