import React from "react";
import Layout from "../components/layout.js";
import Head from "../components/head.js";

const ContactPage = () => {
  return (
    <Layout>
      <Head pageTitle="Contact" />
      <h1>Contact</h1>
      <p>cameronazimmerman@gmail.com</p>
      <p>
        See what I'm up to on{" "}
        <a href="https://twitter.com/CameronZimmer20" target="_blank" rel="noreferrer">
          my twitter!
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
