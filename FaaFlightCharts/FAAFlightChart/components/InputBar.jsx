export function InputBar() {
  return (
    <header>
      <form action="text">
        <input
          type="text"
          id="fname"
          name="fname"
          value="Airport ID"
        />
        <button>Search</button>

        <br />
        <input
          type="checkbox"
          id="weather"
          name="weather"
          value="Weather"
        />
        <label htmlFor="weather">Weather</label>
        <br />

        <input
          type="checkbox"
          id="autopilot"
          name="autopilot"
          value="AutoPilot Flight Director"
        />
        <label htmlFor="autopilot">AutoPilot Flight Director</label>
        <br />
      </form>
    </header>
  );
}
