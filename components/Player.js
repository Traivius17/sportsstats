import React, { useEffect, useState } from "react";
import "./Player.css";

function Player() {
  const [getPlayerStats, setSelectedPlayerStats] = useState();
  const [getPlayerName, setSelectedPlayerName] = useState();
  const [getPlayerID, setSelectedPlayerID] = useState();

  const [getSeason, setSelectedSeason] = useState();

  const [showStats, setShowStats] = useState(false);
  const [getUserInput, setUserInput] = useState("");
  const [getFinalInput, setFinalPoint] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d99ba602e1msha1a92019d05c93ep175718jsn6cd0888135dc",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchPlayerStats() {
      try {
        const response = await fetch(
          `https://api-nba-v1.p.rapidapi.com/players/statistics?id=${getPlayerID}&season=${getSeason}`,
          options
        );

        const data = await response.json();
        const info = data.response;
        // const player = data.response[0].player.firstname;

        setSelectedPlayerStats(info);
        //   setTeam(data);
      } catch (error) {
        console.error("Issue Fetching Data");
      }
    }
    fetchPlayerStats();
  }, [getPlayerID, getSeason]);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await fetch(
          `https://api-nba-v1.p.rapidapi.com/players?search=${getUserInput}`,
          options
        );

        const data = await response.json();
        const info = data.response;

        setSelectedPlayerName(info);

        //   setTeam(data);
      } catch (error) {
        console.error("Issue Fetching Data");
      }
    }
    fetchPlayer();
  }, [getFinalInput]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(getUserInput);
  };

  useEffect(() => {
    if (getSeason && getFinalInput) {
      setShowStats(true);
    }
  }, [getSeason, getFinalInput]);

  const seasonsArray = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  return (
    <div>
      <h1>Checkout Player Statistics</h1>
      <select
        id="seasons"
        className="form-select"
        value={getSeason}
        onChange={(e) => setSelectedSeason(e.target.value)}
        required
      >
        <option value="" selected disabled>
          Select a Season:
        </option>
        {seasonsArray.map((season) => (
          <option key={season} value={season}>
            {season}
          </option>
        ))}
      </select>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          placeholder="Please Enter Player's Last Name"
          onChange={(e) => setUserInput(e.target.value)}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>

      <section className="playerStats">
        {getPlayerName &&
          getPlayerName.map((player) => {
            return (
              <div className="playerCard" key={player.id}>
                <p>Player Quick Facts</p>
                <p>Birth: {player.birth.date}</p>
                <p>College: {player.college}</p>
                <p>Country: {player.birth.country}</p>
                <p>NBA Start: {player.nba.start}</p>
                <p>Years Pro: {player.nba.pro}</p>
                <p>
                  Height: {player.height.feets} Feet {player.height.inches}
                  Inches
                </p>
                <p>Weight: {player.weight.pounds} Pounds</p>

                <button onClick={(e) => setSelectedPlayerID(player.id)}>
                  {player.firstname} {player.lastname} Game Stats
                </button>
              </div>
            );
          })}
      </section>
      {showStats ? (
        <div className="table-container">
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th>Game</th>
                <th>Points</th>
                <th>Position</th>
                <th>Minutes Played</th>
                <th>Field Goals Made</th>
                <th>Field Goals Attempted</th>
                <th>Field Goal Percentage</th>
                <th>Free Throws Made</th>
                <th>Free Throws Attempted</th>
                <th>Free Throw Percentage</th>
                <th>Three Pointers Made</th>
                <th>Three Pointers Attempted</th>
                <th>Three Pointer Percentage</th>
                <th>Offensive Rebounds</th>
                <th>Defensive Rebounds</th>
                <th>Total Rebounds</th>
                <th>Assists</th>
                <th>Personal Fouls</th>
                <th>Steals</th>
                <th>Turnovers</th>
                <th>Blocks</th>
                <th>Plus Minus</th>
              </tr>
            </thead>

            <tbody>
              {getPlayerStats &&
                getPlayerStats.map((data, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td> {data.points}</td>
                    <td> {data.pos}</td>
                    <td> {data.min}</td>
                    <td> {data.fgm}</td>
                    <td> {data.fga}</td>
                    <td> {data.fgp}</td>
                    <td> {data.ftm}</td>
                    <td> {data.fta}</td>
                    <td> {data.ftp}</td>
                    <td> {data.tpm}</td>
                    <td> {data.tpa}</td>
                    <td> {data.tpp}</td>
                    <td> {data.offReb}</td>
                    <td> {data.defReb}</td>
                    <td> {data.totReb}</td>
                    <td> {data.assists}</td>
                    <td> {data.pFouls}</td>
                    <td> {data.steals}</td>
                    <td> {data.turnovers}</td>
                    <td> {data.blocks}</td>
                    <td> {data.plusMinus}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="results">NO RESULTS YET</p>
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
    </div>
  );
}

export default Player;
