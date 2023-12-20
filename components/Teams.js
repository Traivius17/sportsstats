import { useState, useEffect } from "react";
import "./Teams.css";

function Teams() {
  const [getTeamInfo, setTeamInfo] = useState();
  const [getTeamID, setSelectedTeamID] = useState();
  const [getTeam, setSelectedTeam] = useState();
  const [getSeason, setSelectedSeason] = useState();
  const [getTeamStats, setSelectedTeamStats] = useState();
  const [showStats, setShowStats] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d99ba602e1msha1a92019d05c93ep175718jsn6cd0888135dc",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
      //   d64311d2d5msh216cd8b10527398p1748dfjsna673a72707c2
    },
  };
  useEffect(() => {
    async function fetchTeamsCode() {
      try {
        const response = await fetch(
          "https://api-nba-v1.p.rapidapi.com/teams",
          options
        );

        const data = await response.json();

        const info = data.response;

        setTeamInfo(info);
      } catch (error) {
        console.error("Issue Fetching Data");
      }
    }
    fetchTeamsCode();
  }, []);
  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(
          `https://api-nba-v1.p.rapidapi.com/teams?id=${getTeamID}`,
          options
        );

        const data = await response.json();
        const info = data.response;
        setSelectedTeam(info);

        //   setTeam(data);
      } catch (error) {
        console.error("Issue Fetching Data");
      }
    }
    fetchTeams();
  }, [getTeamID]);

  useEffect(() => {
    async function fetchTeamStats() {
      try {
        const response = await fetch(
          `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${getTeamID}&season=${getSeason}`,
          options
        );

        const data = await response.json();
        const info = data.response;
        setSelectedTeamStats(info);

        //   setTeam(data);
      } catch (error) {
        console.error("Issue Fetching Data");
      }
    }
    fetchTeamStats();
  }, [getTeamID, getSeason]);

  useEffect(() => {
    if (getSeason && getTeamID) {
      setShowStats(true);
    }
  }, [getSeason, getTeamID]);

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
      <h1>Checkout Team Statistics</h1>
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

      <select
        id="teams"
        className="form-select"
        value={getTeamID}
        onChange={(e) => setSelectedTeamID(e.target.value)}
        required
      >
        <option value="" selected disabled>
          Select a Team:
        </option>
        {getSeason &&
          getTeamInfo &&
          getTeamInfo.map((teams) => (
            <option key={teams.code} value={teams.id}>
              ({teams.id}): {teams.name}
            </option>
          ))}
      </select>

      <section>
        {getTeam &&
          getTeam.map((data) => (
            <div>
              <img src={data.logo} alt="Team Logo" />
              <h1>Name: {data.name} </h1>
              <p>Nickname: {data.nickname}</p>
              <p>Code: {data.code}</p>
              <p>City: {data.city}</p>
            </div>
          ))}
      </section>
      {showStats ? (
        <div className="table-container">
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th>Games</th>
                <th>Fast Break Points</th>
                <th>Points In Paint</th>
                <th>Biggest Lead</th>
                <th>Second Chance Points</th>
                <th>Points Off Turnovers</th>
                <th>Longest Run</th>
                <th>Points</th>
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
              <tr>
                {getTeamStats &&
                  getTeamStats.map((data) => (
                    <>
                      <td> {data.games}</td>
                      <td> {data.fastBreakPoints}</td>
                      <td> {data.pointsInPaint}</td>
                      <td> {data.biggestLead}</td>
                      <td> {data.secondChancePoints}</td>
                      <td> {data.pointsOffTurnovers}</td>
                      <td> {data.longestRun}</td>
                      <td> {data.points}</td>
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
                    </>
                  ))}
              </tr>
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
export default Teams;
