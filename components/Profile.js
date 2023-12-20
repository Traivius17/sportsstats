import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [photo, setPhoto] = useState(null);
  const [displayedProfile, setDisplayedProfile] = useState(null);
  const [currMode, setCurrMode] = useState("dark");
  const nbaTeams = [
    "dark",
    "Hawks",
    "Celtics",
    "Nets",
    "Hornets",
    "Bulls",
    "Cavaliers",
    "Mavericks",
    "Nuggets",
    "Pistons",
    "Warriors",
    "Rockets",
    "Pacers",
    "Clippers",
    "Lakers",
    "Grizzlies",
    "Heat",
    "Bucks",
    "Timberwolves",
    "Pelicans",
    "Knicks",
    "Thunder",
    "Magic",
    "_76ers",
    "Suns",
    "TrailBlazers",
    "Kings",
    "Spurs",
    "Raptors",
    "Jazz",
    "Wizards",
  ];

  const handleModeChange = () => {
    const currentIndex = nbaTeams.indexOf(currMode);
    const nextIndex = (currentIndex + 1) % nbaTeams.length;
    setCurrMode(nbaTeams[nextIndex]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const profileInfo = (
      <div>
        <h2>Profile Information</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Favorite Team:</strong> {favoriteTeam}
            </p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img
              src={photo ? URL.createObjectURL(photo) : ""}
              alt="Uploaded Photo"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
        </div>
      </div>
    );

    setDisplayedProfile(profileInfo);
  };

  return (
    <div className={currMode}>
      <h2> Profile Settings</h2>
      <form className="profile-settings">
        <label>Name:</label>

        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age:</label>
        <input
          type="number"
          id="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Favorite Team:</label>
        <input
          type="text"
          id="favoriteTeam"
          placeholder="Favorite Team"
          value={favoriteTeam}
          onChange={(e) => setFavoriteTeam(e.target.value)}
        />
        <label>Add Photo:</label>
        <input
          type="file"
          id="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />

        <button onClick={handleSubmit}>Submit Profile</button>

        <div id="displayProfile">{displayedProfile}</div>
      </form>

      <button id="mode" onClick={handleModeChange}>
        Change Background
      </button>
    </div>
  );
};

export default Profile;
