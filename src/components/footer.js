import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Footer = () => {
  const { author } = useSiteMetadata();

  return (
    <footer>
      <p>Created by Cameron Zimmerman, © 2021</p>
    </footer>
  );
};

export default Footer;
