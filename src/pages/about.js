import React from 'react';
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Hello! Thank you for visiting my humble blog, and for allowing me this opportunity to interview with Sprinklr. My name is Cameron Zimmerman and I am incredibly excited for the chance to meet any and all who may read this. I'm looking forward to contributing to a great team!</p>
      <Link to="/">return home?</Link>
    </div>
  );
};

export default AboutPage;