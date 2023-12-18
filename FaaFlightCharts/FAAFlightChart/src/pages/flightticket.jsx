import { useEffect, useState } from "react";

export default function flightticket() {
  const [id, setId] = useState();

  useEffect(() => {
    fetch(
      "https://api.flightapi.io/roundtrip/657d513f57d0fa338ac322be/HAN/SGN/2024-04-10/2024-04-12/1/0/1/Economy/USD"
    )
      .then((Response) => Response.json())
      .then((data) => console.log(data));
  });

  return <></>;
}
