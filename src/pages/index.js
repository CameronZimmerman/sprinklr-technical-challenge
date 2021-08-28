import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>My name is <Link to="/about">Cam</Link>, I'm a full stack engineer from Seattle who loves rock climbing.</h2>
      <p>I would love to chat, please <Link to="/contact">contact me!</Link></p>
    </div>
  );
};

export default IndexPage;