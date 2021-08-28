import React from 'react';
import Layout from '../components/layout.js';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>My name is <Link to="/about">Cam</Link>, I'm a full stack engineer from Seattle who loves rock climbing.</h2>
      <p>I would love to chat, please <Link to="/contact">contact me!</Link></p>
    </Layout>
  );
};

export default IndexPage;