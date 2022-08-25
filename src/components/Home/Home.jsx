import React from "react";
import { Navigate, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        Test GraphQL here --- <Link to="/home/graphql">GraphQL Testing</Link>
      </p>
    </div>
  );
};

export default Home;
