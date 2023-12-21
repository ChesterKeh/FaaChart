const token =
  "patTvUzdUJ2NAazjE.73450dd0809ae9b13031466645839cc73f38954411a1de2c9c88f82e2839e291";

export async function create2(data) {
  const url = "https://api.airtable.com/v0/appC6QkMUSDhFdLlq/SavedFlights";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  return jsonData;
}

export async function delete2(id) {
  const url = `https://api.airtable.com/v0/appC6QkMUSDhFdLlq/SavedFlights/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const jsonData = await response.json();
  return jsonData;
  //* update state in react
}
