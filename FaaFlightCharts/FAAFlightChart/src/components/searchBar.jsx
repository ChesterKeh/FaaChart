import { React, useState } from "react";

export function SearchBar() {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        placeholder="Type to Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
