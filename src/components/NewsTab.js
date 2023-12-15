import React from "react";
import "./NewsTab.css";

function NewsTab() {
  return (
    <div className="tab-menu">
      <iframe
        title="Tab Menu"
        src="https://rss.app/embed/v1/wall/tywNsW1rmFujWEJD" /* Replace with your desired URL */
        width="250"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
}

export default NewsTab;
