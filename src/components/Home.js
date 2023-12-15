import React from "react";
import video1 from "./videos/video1.mp4";
import Squiz from "./Squiz";
import "./Home.css";

function Home() {
  return (
    <div className="right-side-content">
      <video
        width="100%"
        height="540"
        loop
        autoplay
        muted
        controls
        src={video1}
        type="video/mp4"
      ></video>
      <div className="section">
        <h1 className="intro">Welcome</h1>
        <p className="intro">
          Get ready to dive into the exciting world of basketball statistics!
          Whether you're a die-hard fan or just getting started, our website is
          the perfect place to enhance your basketball knowledge. We are here to
          provide you with all the information you need. From player statistics
          to game analysis, we've got you covered. Don't worry if you're not a
          pro at understanding complex stats – we break it down in a way that
          anyone can understand. We're all about making basketball analytics
          accessible to everyone! Feel free to explore our website and discover
          the fascinating world of basketball statistics. With our user-friendly
          interface and comprehensive data, you'll become a basketball stats
          guru in no time!
        </p>

        <p className="intro">
          Get all the latest basketball stats and information on your favorite
          NBA teams, players, and games. Stay up to date with the NBA standings,
          individual player stats, and team stats. Join us and explore the
          exciting world of basketball!
        </p>
      </div>
      <h2 className="section">
        Put your NBA knowledge to the test with this short quiz!
      </h2>
      <Squiz />
    </div>
  );
}

export default Home;
