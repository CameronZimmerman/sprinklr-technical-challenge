import React from "react";
import Layout from "../components/layout.js";
import Head from "../components/head.js";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <Layout>
      <Head pageTitle="Not found" />
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
