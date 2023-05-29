async function Api() {
  const url = "https://api-football-beta.p.rapidapi.com";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6ed671d621452290f895a1b90a58c719",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return (
    <div
      id="wg-api-football-standings"
      data-host="v3.football.api-sports.io"
      data-key="6ed671d621452290f895a1b90a58c719"
      data-league="39"
      data-team=""
      data-season="2021"
      data-theme=""
      data-show-errors="false"
      data-show-logos="true"
      className="wg_loader"
    ></div>
  );
}

export default Api;
