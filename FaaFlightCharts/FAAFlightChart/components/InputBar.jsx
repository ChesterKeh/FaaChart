import React from "react";

export function InputBar() {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "center" }}>
        <form
          action="text"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <input
            type="text"
            id="fname"
            name="fname"
            value="From"
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            id="To"
            name="To"
            value="To"
            style={{ marginRight: "10px" }}
          />
          <select
            id="currency"
            name="currency"
            style={{ marginRight: "10px" }}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <button>Search</button>
        </form>
      </header>
    </>
  );
}
