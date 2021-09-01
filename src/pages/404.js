import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <img
        alt="confused Travolta"
        src="https://c.tenor.com/9ud1r4sc-QQAAAAM/confused-john-travolta.gif"
      />
      <p>
        <Link to="/">Return Home?</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
