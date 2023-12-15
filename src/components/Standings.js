import { useState, useEffect } from "react";
import "./Standings.css";

function Standings() {
  const [getTeamInfo, setTeamInfo] = useState();
  const [getTeamID, setSelectedTeamID] = useState();
  const [getTeam, setSelectedTeam] = useState();
  const [getSeason, setSelectedSeason] = useState();
  const [getTeamStandings, setSelectedTeamStandings] = useState();
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
    async function fetchTeamStandings() {
      try {
        const response = await fetch(
          `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${getSeason}&team=${getTeamID}`,
          options
        );

        const data = await response.json();
        const info = data.response;
        setSelectedTeamStandings(info);

        //   setTeam(data);
      } catch (error) {
        console.error("Issue Fetching Data");
      }
    }
    fetchTeamStandings();
  }, [getTeamID, getSeason]);

  useEffect(() => {
    if (getSeason && getTeamID) {
      setShowStats(true);
    }
  }, [getSeason, getTeamID]);

  const seasonsArray = ["2018", "2019", "2020", "2021", "2022", "2023"];

  return (
    <div>
      <h1>Checkout Team Standings</h1>
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

      <section className="info">
        {getTeam &&
          getTeam.map((data) => (
            <div className="infoD">
              <img src={data.logo} alt="Team Logo" />
              <h1>Name: {data.name} </h1>
              <p className="info-p">Nickname: {data.nickname}</p>
              <p className="info-p">Code: {data.code}</p>
              <p className="info-p">City: {data.city}</p>
            </div>
          ))}
      </section>
      {showStats ? (
        <div className="table-container">
          <table className="table table-hover table-dark ">
            <thead>
              <tr>
                <th>Conference Name</th>
                <th>Conference Rank</th>
                <th>Conference Wins</th>
                <th>Conference Losses</th>
                <th>Division Name</th>
                <th>Division Rank</th>
                <th>Division Win</th>
                <th>Division Loss</th>
                <th>Games Behind</th>
                <th>Home Wins</th>
                <th>Away Wins</th>
                <th>Total Wins</th>
                <th>Win Percentage</th>
                <th>Win Last Ten</th>
                <th>Home Losses</th>
                <th>Away Losses</th>
                <th>Total Losses</th>
                <th>Loss Percentage</th>
                <th>Loss Last Ten</th>
                <th>Streak</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {getTeamStandings &&
                  getTeamStandings.map((data) => (
                    <>
                      <td> {data.conference.name}</td>
                      <td> {data.conference.rank}</td>
                      <td> {data.conference.win}</td>
                      <td> {data.conference.loss}</td>
                      <td> {data.division.name}</td>
                      <td> {data.division.rank}</td>
                      <td> {data.division.win}</td>
                      <td> {data.division.loss}</td>
                      <td> {data.division.gamesBehind}</td>
                      <td> {data.win.home}</td>
                      <td> {data.win.away}</td>
                      <td> {data.win.total}</td>
                      <td> {data.win.percentage}</td>
                      <td> {data.win.lastTen}</td>
                      <td> {data.loss.home}</td>
                      <td> {data.loss.away}</td>
                      <td> {data.loss.total}</td>
                      <td> {data.loss.percentage}</td>
                      <td> {data.loss.lastTen}</td>
                      <td> {data.streak}</td>
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
export default Standings;
