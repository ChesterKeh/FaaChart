import { FlightTicketInformation } from "./FlightTicketInformation";
import "../Styling/TicketPrice.css";

export function TicketPrice(props) {
  const {
    id,
    airlineCodes,
    departureAirportCode,
    arrivalAirportCode,
    price,
    currencyCode,
  } = props;

  const tempPrice = "$2,581";

  return (
    <div id="PlaneticketPrice">
      <h4 class="Price">{tempPrice}</h4>
      <button className="TicketPrice"> Select </button>
    </div>
  );
}
