import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/atm">ATM Transaction</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
