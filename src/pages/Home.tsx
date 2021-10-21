import React from "react";
import { Link } from "react-router-dom";
export default function Home () {
  return (
    <div className="bgimg">

  <div className="middle">
        <h1>COMING SOON ....</h1>
        {/* <Link to="/message">Message</Link> */}
        <Link to="/list">Patient List</Link>

  </div>
  <div className="bottomleft">
    
  </div>
</div>
  );
}
