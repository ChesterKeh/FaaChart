import { useEffect, useState } from "react";
import { InputBar } from "./InputBar";
import axios from "axios";

export function DepartureData(props) {
  const {
    flight_date,
    flight_status,
    departure,
    airport,
    timezone,
    icao,
    terminal,
    gate,
    delay,
    scheduled,
    estimated,
    actual,
    estimated_runway,
    actual_runway,
  } = props;

    const [data, setData] = useState(null);
    const apiLink = "https://api.aviationstack.com/v1/flights";

    console.log(apiLink); // Add this line to log the apiLink

    useEffect(() => {
      fetch(apiLink)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    useEffect(() => {
      axios
        .get(apiLink, {
          headers: { "?access_key": "11cf52b0e24e20b9f7df637f5692dfc4" },
        })
        .then((res) => console.log(res.data));
    });
}
